import SocialLinks from "./SocialLinks";

const Footer: React.FC<{opacity: number}> = ({opacity}) => {
  return (
    <footer className="bg-gray-200 p-8 grid gap-0 justify-center">
      <div className="text-center">
        <p>Find Me on Social Media</p>
      </div>
      <SocialLinks opacity={opacity} />
    </footer>
  );
}
 
export default Footer;