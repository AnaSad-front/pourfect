import { NavLink } from "react-router";

function LogoSmall() {
  return (
    <NavLink
      to="/"
      className="text-md font-bold text-accent leading-none mb-xs hover:text-accent-secondary focus:text-accent-secondary focus:outline-none"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Pourfect
    </NavLink>
  );
}

export default LogoSmall;
