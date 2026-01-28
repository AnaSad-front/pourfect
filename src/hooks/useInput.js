import { useState } from "react";

export function useInput(initValue) {
  const [value, setValue] = useState(initValue);
  const [error, setError] = useState("");

  const replaceLetters = (str) => (str = str.replace(/[^\d]/g, ""));

  const validateNumber = (value) => {
    if (!value) return "Field is required";
    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const validValue = replaceLetters(value);

    setValue(validValue);
    setError(validateNumber(validValue));
  };

  return { value, error, handleChange };
}
