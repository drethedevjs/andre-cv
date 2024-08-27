import Image from "next/image";

const SocialLinks: React.FC<{opacity: number}> = ({opacity}) => {
  return (
    <div className="flex flex-row">
        <a href="https://www.linkedin.com/in/drethedev/" target="_blank" className="social">
          <Image src="/linkedin-logo.png" alt="LinkedIn logo" className={`opacity-${opacity}`} width={30} height={30} />
        </a>

        <a href="https://github.com/drethedevjs" target="_blank" className="social">
          <Image src="/github-logo.png" alt="GitHub logo" className={`opacity-${opacity}`} width={30} height={30} />
        </a>

        <a href="https://bitbucket.org/drethedev/workspace/overview/" target="_blank" className="social">
          <Image src="/bitbucket-logo.png" alt="Bitbucket logo" className={`opacity-${opacity}`} width={30} height={30} />
        </a>
      </div>
  );
}

export default SocialLinks;