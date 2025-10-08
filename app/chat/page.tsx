import ChatBox from "@/components/ChatBox";

const Chat = async () => {
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
      <ChatBox />
    </>
  );
};

export default Chat;
