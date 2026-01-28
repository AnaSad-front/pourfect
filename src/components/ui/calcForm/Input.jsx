function Input({
  label = "Label",
  placeholder = "Example",
  type = "text",
  hint,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-xs">
      <label className="flex items-center gap-xs text-primary text-sm tracking-wide">
        {label} <span>{hint}</span>
      </label>
      <input
        type={type}
        pattern="[0-9]*"
        className="rounded-lg cursor-pointer outline outline-accent p-xxs w-full text-primary text-sm placeholder:text-secondary hover:bg-bg-secondary hover:outline-accent-secondary focus:outline-accent-secondary active:bg-bg-secondary"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
