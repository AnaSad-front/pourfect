import { FaLinkedin } from "react-icons/fa";

function SocialLinkedIn() {
  return (
    <li>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/anasad"
        className="group focus:outline-none"
      >
        <FaLinkedin
          className="fill-secondary size-xsm  cursor-pointer transition-all duration-300 ease-in-out group-hover:fill-accent-secondary
        group-focus-visible:fill-accent-secondary"
        />
      </a>
    </li>
  );
}

export default SocialLinkedIn;
