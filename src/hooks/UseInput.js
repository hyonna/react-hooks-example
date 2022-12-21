import { useState } from "react";

const useInput = (iniitialValue, validator) => {
  const [value, setValue] = useState(iniitialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};
export default function UseInput() {
  // const maxLen = (value) => value.length < 10;
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <input placeholder="Name" {...name} />
    </div>
  );
}
