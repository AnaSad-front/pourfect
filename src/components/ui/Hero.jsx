function Hero({ children }) {
  return (
    <div className="flex flex-col justify-center items-center my-md">
      {children}
    </div>
  );
}

export default Hero;
