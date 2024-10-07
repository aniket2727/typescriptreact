// Code written by Aniket Kadam
import { useState, useRef } from "react";

const Code11 = () => {
  const [values, setValues] = useState<string[]>(["", "", "", ""]);

  // Create refs for each input
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const forthInputRef = useRef<HTMLInputElement>(null);

  // Array of refs to easily access them in order
  const inputRefs = [firstInputRef, secondInputRef, thirdInputRef, forthInputRef];

  const handleInputChange = (index: number, value: string) => {
    if (value.length === 1) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      // Move to next input if not the last one
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  return (
    <div>
      <h1>Enter 4-digit Code</h1>
      {values.map((value, index) => (
        <input
          key={index}
          type="number"
          value={value}
          ref={inputRefs[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
          maxLength={1} // Ensure only 1 digit can be entered
          autoFocus={index === 0} // Auto-focus on the first input
        />
      ))}
    </div>
  );
};

export default Code11;
