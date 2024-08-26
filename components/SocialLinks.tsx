const SocialLinks: React.FC<{opacity: number}> = ({opacity}) => {
  return (
    <div className="flex flex-row">
        <a href="https://www.linkedin.com/in/drethedev/" target="_blank" className="m-5 size-7">
          <img src="/linkedin-logo.png" alt="LinkedIn logo" className={`opacity-${opacity}`} />
        </a>

        <a href="https://github.com/drethedevjs" target="_blank" className="m-5 size-7">
          <img src="/github-logo.png" alt="GitHub logo" className={`opacity-${opacity}`} />
        </a>

        <a href="https://bitbucket.org/drethedev/workspace/overview/" target="_blank" className="m-5 size-7">
          <img src="/bitbucket-logo.png" alt="Bitbucket logo" className={`opacity-${opacity}`} />
        </a>
      </div>
  );
}
 
export default SocialLinks;