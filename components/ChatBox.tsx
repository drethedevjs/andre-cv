"use client";
import ChatMessage, { ChatterRole } from "@/interfaces/chatMessage";
import PromptJudgement from "@/interfaces/promptJudement";
import { cvPost } from "@/utils/fetching";
import { useEffect, useRef, useState } from "react";
import Suggestions from "./Suggestions";

const ChatBox = () => {
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const [userMsg, setUseMsg] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([
    // "this is a suggestion"
  ]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const el = chatBoxRef.current;
    if (!el) return;

    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMsg = async () => {
    setSuggestions([]);
    addMsgToChatBox("user", userMsg);
    const judgement: PromptJudgement = JSON.parse(await askGemJudge());

    if (judgement.isRelevant) await askAi();
    else {
      addMsgToChatBox("judge", judgement.reason);
      setSuggestions(judgement.suggestions);
    }
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
    const msgWithoutJudge = messages.filter((m) => m.role !== "judge");

    const body = {
      messages: [...msgWithoutJudge, { role: "user", content: userMsg }]
    };
    const response = await cvPost("groq", body);

    if (!response.ok)
      console.error("AI Andre--Something went wrong...", response.statusText);

    const llmResponse = await response.json();
    const { content, role } = llmResponse.choices[0].message;

    addMsgToChatBox(role, content);
  };

  return (
    <>
      <section>
        <div className="chat-box" ref={chatBoxRef}>
          <ul className="space-y-2">
            <li className="max-w-lg flex gap-x-2 sm:gap-x-4">
              <div className="bg-white border border-secondary rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                <h3 className="font-medium text-gray-800 dark:text-white cv-gradient">
                  AI Andre
                </h3>
                <p className="text-xl">
                  Hi there, I'm Andre's chatbot. Feel free to ask me anything
                  related to my job history
                </p>
              </div>
            </li>

            {messages.map((message, idx) => {
              if (message.role !== "user") {
                return (
                  <li key={idx} className="max-w-lg flex gap-x-2 sm:gap-x-4">
                    <div
                      className={`${
                        message.role === "judge"
                          ? "bg-secondary text-white"
                          : "bg-white"
                      }  border border-secondary rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700`}
                    >
                      <p className="text-xl">{message.content}</p>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li
                    key={idx}
                    className="max-w-lg flex gap-x-2 sm:gap-x-4 ms-auto justify-end"
                  >
                    <div className="grow text-end space-y-3">
                      <div className="inline-block bg-primary rounded-2xl p-4 shadow-2xs">
                        <p className="text-xl text-white">{message.content}</p>
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="flex justify-between gap-4 mb-5">
          <div className="w-full">
            <input
              type="text"
              className="py-2.5 sm:py-3 px-4 block w-full h-16 mb-0 text-xl border-gray-200 rounded-lg sm:text-sm focus:!border-secondary focus:!ring-secondary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Talk to me..."
              value={userMsg}
              onChange={(e) => setUseMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMsg();
              }}
            />
          </div>
          <button className="btn" type="submit" onClick={sendMsg}>
            Send
          </button>
        </div>
      </section>
      {suggestions.length > 0 && <Suggestions suggestions={suggestions} />}
    </>
  );
};

export default ChatBox;
