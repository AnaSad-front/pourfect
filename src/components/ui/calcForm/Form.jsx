function Form({ className = "", children }) {
  return (
    <form className={`flex flex-col justify-between gap-sm ${className}`}>
      {children}
    </form>
  );
}

export default Form;
