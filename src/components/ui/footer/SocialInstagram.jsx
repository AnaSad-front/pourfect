import { FaInstagram } from "react-icons/fa";

function SocialInstagram() {
  return (
    <li>
      <a
        target="_blank"
        href="https://www.instagram.com/anastas_sadyreva"
        className="group focus:outline-none"
      >
        <FaInstagram
          className="fill-secondary size-[2.7rem] -translate-y-1 cursor-pointer transition-all duration-300 ease-in-out group-hover:fill-accent-secondary
        group-focus-visible:fill-accent-secondary"
        />
      </a>
    </li>
  );
}

export default SocialInstagram;
