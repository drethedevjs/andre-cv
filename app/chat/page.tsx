"use client";
import ChatMessage from "@/interfaces/chatMessage";
import { useState } from "react";

const Chat = () => {
  const [userMsg, setUseMsg] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Tell me about yourself.",
      dateTime: new Date(),
      sender: "user"
    }
  ]);

  const sendMsg = () => {
    if (!userMsg) return;

    const newMsg: ChatMessage = {
      sender: "user",
      dateTime: new Date(),
      text: userMsg
    };

    const newMessageSet = [...messages, newMsg];
    console.log(newMessageSet);
    setUseMsg("");
    setMessages(newMessageSet);
  };

  return (
    <>
      <section className="container mx-auto">
        <h1 className="mb-5 text-center cv-gradient">Chat with Me</h1>
        <p className="text-center mx-auto w-1/2 text-xl">
          You are now interacting with an AI chat bot that has read my LinkedIn
          profile and will be simulating me. Please keep all questions relevant
          to work related experiences. This page is mainly for employers looking
          to learn more about me before contacting me.
        </p>
      </section>

      <section>
        <div className="chat-box">
          <ul className="space-y-5">
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
              if (message.sender === "bot") {
                return (
                  <li key={idx} className="max-w-lg flex gap-x-2 sm:gap-x-4">
                    <div className="bg-white border border-secondary rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                      <p>{message.text}</p>
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
                        <p className="text-xl text-white">{message.text}</p>
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
    </>
  );
};

export default Chat;
