import { NavLink } from "react-router";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm text-center font-semibold outline outline-accent rounded-full px-sm py-xs w-auto cursor-pointer transition-all duration-300 ease-in-out hover:outline-none hover:bg-accent-secondary hover:text-bg focus:outline-none focus:bg-accent-secondary focus:text-bg  ${
          isActive ? "bg-accent text-bg" : "bg-transparent text-primary"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
