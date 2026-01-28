import { FaGithub } from "react-icons/fa";

function SocialGithub() {
  return (
    <li>
      <a
        target="_blank"
        href="https://github.com/AnaSad-front"
        className="group focus:outline-none"
      >
        <FaGithub
          className="fill-secondary size-xsm cursor-pointer transition-all duration-300 ease-in-out group-hover:fill-accent-secondary
        group-focus-visible:fill-accent-secondary"
        />
      </a>
    </li>
  );
}

export default SocialGithub;
