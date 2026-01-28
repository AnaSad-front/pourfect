function Container({ children }) {
  return (
    <div
      id="scrollTarget"
      className="grid grid-cols-1 gap-md mb-lg lg:grid-cols-2"
    >
      {children}
    </div>
  );
}

export default Container;
