import {
  faBitbucket,
  faGithubSquare,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = ({
  opacity,
  color = "text-white",
  hoverColor = "text-white"
}: {
  opacity: number;
  color?: string;
  hoverColor?: string;
}) => {
  return (
    <div className="flex flex-row">
      <a
        href="https://www.linkedin.com/in/drethedev/"
        target="_blank"
        className="social"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          size="lg"
          className={`${color} ${hoverColor} transition-colors`}
        />
      </a>

      <a
        href="https://github.com/drethedevjs"
        target="_blank"
        className="social"
      >
        <FontAwesomeIcon
          icon={faGithubSquare}
          size="lg"
          className={`${color} ${hoverColor} transition-colors`}
        />
      </a>

      <a
        href="https://bitbucket.org/drethedev/workspace/overview/"
        target="_blank"
        className="social"
      >
        <FontAwesomeIcon
          icon={faBitbucket}
          size="lg"
          className={`${color} ${hoverColor} transition-colors`}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
