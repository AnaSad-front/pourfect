function Footer({ children }) {
  return (
    <footer className="w-screen border-t border-accent flex flex-col justify-between items-center py-md gap-sm md:flex-row md:p-md md:mb-0">
      {children}
    </footer>
  );
}

export default Footer;
