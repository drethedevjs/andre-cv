"use client";
import ChatMessage, { ChatterRole } from "@/interfaces/chatMessage";
import PromptJudgement from "@/interfaces/promptJudement";
import { cvPost } from "@/utils/fetching";
import { Bot } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Suggestions from "./Suggestions";

const ChatBox = () => {
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const [userMsg, setUseMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  // The messageHistory variable is for sending relevant messages to the mimicking llm.
  // I'm separating this into another array so that the user can see his/her past
  // messages and but allow only relevant messages to be responded to by the mimicking llm.
  const [messageHistory, setMessageHistory] = useState<ChatMessage[]>([]);

  useEffect(() => {
    if (!messages.length) {
      setTimeout(() => {
        addMsgToChatBox(
          "assistant",
          "Hi there, I'm Andre's chatbot. Feel free to ask me anything related to my job history."
        );

        setIsLoading(false);
      }, 2000);
    }
    const el = chatBoxRef.current;
    if (!el) return;

    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMsg = async () => {
    setSuggestions([]);
    addMsgToChatBox("user", userMsg);
    setIsLoading(true);
    const judgement: PromptJudgement = JSON.parse(await askGemJudge());

    if (judgement.isRelevant) await askAi();
    else {
      addMsgToChatBox("judge", judgement.reason);
      setSuggestions(judgement.suggestions);
    }
    setIsLoading(false);
  };

  const askGemJudge = async () => {
    const response = await cvPost("judge", { message: userMsg });

    if (!response.ok)
      console.error("Judge--Something went wrong:", response.statusText);

    return await response.json();
  };

  const addMsgToChatBox = (role: ChatterRole, message: string) => {
    if (!message) return;

    const newMsg: ChatMessage = {
      role: role,
      content: message
    };

    setUseMsg("");
    setMessages((prevMessages) => [...prevMessages, newMsg]);
  };

  const askAi = async () => {
    const relevantMsg: ChatMessage = {
      content: userMsg,
      role: "user"
    };

    const body = {
      messages: [...messageHistory, relevantMsg]
    };

    setMessageHistory((prevMessages) => [...prevMessages, relevantMsg]);

    const response = await cvPost("groq", body);

    if (!response.ok) {
      console.error("AI Andre--Something went wrong...", response.statusText);
      addMsgToChatBox(
        "error",
        "I'm sorry but it appears that there was an error"
      );
      return;
    }

    const llmResponse = await response.json();
    const { content, role } = llmResponse.choices[0].message;

    addMsgToChatBox(role, content);
  };

  const roleBasedBubbleStyles = {
    user: "bg-white",
    judge: "bg-secondary text-white",
    error: "bg-accent text-white",
    system: "",
    assistant: ""
  };

  return (
    <>
      <section className="mx-5">
        <div className="chat-box" ref={chatBoxRef}>
          <ul className="space-y-2">
            {messages.map((message, idx) => {
              if (message.role !== "user") {
                return (
                  <li
                    key={idx}
                    className="max-w-5/6 lg:max-w-lg flex gap-x-2 sm:gap-x-4"
                  >
                    <div
                      className={`${
                        roleBasedBubbleStyles[message.role]
                      }  border border-secondary rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700 dark:text-slate-50`}
                    >
                      {idx === 0 && (
                        <div className="flex gap-2">
                          <h3 className="font-medium text-gray-800 dark:text-white cv-gradient">
                            AI Andre
                          </h3>
                          <Bot color="green" size={38} />
                        </div>
                      )}
                      <p className="text-base md:text-xl">{message.content}</p>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li
                    key={idx}
                    className="max-w-5/6 lg:max-w-lg flex gap-x-2 sm:gap-x-4 ms-auto justify-end"
                  >
                    <div className="grow text-end space-y-3">
                      <div className="inline-block bg-primary rounded-2xl p-4 shadow-2xs">
                        <p className="text-base md:text-xl text-white text-start">
                          {message.content}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
          {isLoading && (
            <div
              className="bottom-10 left-10 animate-spin size-12 border-4 border-current border-t-transparent text-primary rounded-full"
              role="status"
              aria-label="loading"
            ></div>
          )}
        </div>
        <p className="italic text-gray-400 text-sm ml-5 mb-5">
          Powered by Groq and Gemini
        </p>
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-5">
          <div className="w-full">
            <input
              id="user-msg"
              type="text"
              className="py-2.5 sm:py-3 px-4 block w-full h-16 !mb-0 text-xl border-gray-200 rounded-lg sm:text-sm focus:border-secondary! focus:ring-secondary! disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 disabled:bg-gray-200 disabled:cursor-not-allowed"
              placeholder="Talk to me..."
              value={userMsg}
              disabled={isLoading}
              onChange={(e) => setUseMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMsg();
              }}
            />
          </div>
          <button
            className="btn disabled:!bg-primary/50 disabled:!border-primary/50 disabled:cursor-not-allowed"
            type="submit"
            onClick={sendMsg}
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </section>
      {suggestions.length > 0 && <Suggestions suggestions={suggestions} />}
    </>
  );
};

export default ChatBox;
