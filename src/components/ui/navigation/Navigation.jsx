import NavItem from "./NavItem";

function Navigation() {
  return (
    <>
      <p className="text-secondary text-xs text-center mb-xs">
        Select calculator type:
      </p>
      <nav className="flex flex-wrap justify-center gap-sm mb-lg sm:flex-row">
        <NavItem to="/">Candle</NavItem>
        <NavItem to="diffuser">Reed diffuser</NavItem>
        <NavItem to="gypsum">Gypsum</NavItem>
      </nav>
    </>
  );
}

export default Navigation;
