import { NavLink } from "react-router";

function FooterNavItem({ to, children }) {
  const handleClick = () => {
    const scrollTarget = document.getElementById("scrollTarget");
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm text-center cursor-pointer transition-all duration-300 ease-in-out hover:text-accent-secondary focus:text-accent-secondary focus:outline-none  ${
          isActive ? "text-secondary" : "text-secondary"
        }`
      }
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
}

export default FooterNavItem;
