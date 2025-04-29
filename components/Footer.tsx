import SocialLinks from "./SocialLinks";

const Footer = ({ opacity }: { opacity: number }) => {
  return (
    <footer className="bg-primary p-8 grid gap-0 justify-center">
      <div className="text-center text-white">
        <p>Find Me on Social Media</p>
      </div>
      <SocialLinks opacity={opacity} />
    </footer>
  );
};

export default Footer;
