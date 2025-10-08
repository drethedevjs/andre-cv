"use client";
import ChatMessage, { ChatterRole } from "@/interfaces/chatMessage";
import { useEffect, useRef, useState } from "react";

const ChatBox = () => {
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const [userMsg, setUseMsg] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    // {
    //   content: "Tell me about yourself.",
    //   dateTime: new Date(),
    //   role: "user"
    // }
  ]);

  useEffect(() => {
    const el = chatBoxRef.current;
    if (!el) return;

    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMsg = async () => {
    addMsgToChatBox("user", userMsg);
    await askAi();
  };

  const addMsgToChatBox = (role: ChatterRole, message: string) => {
    if (!message) return;

    const newMsg: ChatMessage = {
      role: role,
      // dateTime: new Date(),
      content: message
    };

    setUseMsg("");
    setMessages((prevMessages) => [...prevMessages, newMsg]);
  };

  const askAi = async () => {
    const response = await fetch("/api/groq", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        messages: [...messages, { role: "user", content: userMsg }]
      })
    });

    if (!response.ok)
      console.error("Something went wrong...", response.statusText);

    const llmResponse = await response.json();
    const { content, role } = llmResponse.choices[0].message;

    addMsgToChatBox(role, content);
  };

  return (
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
                  <div className="bg-white border border-secondary rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                    <p>{message.content}</p>
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
      <div className="flex justify-between gap-4">
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
  );
};

export default ChatBox;
