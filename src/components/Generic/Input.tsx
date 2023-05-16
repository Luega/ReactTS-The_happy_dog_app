import React, { useRef } from "react";

type Props = {
  className: string;
  type: string;
  placeholder: string;
  value: string | undefined | null;
  handlerFn: (userInput: string) => void;
};

const Input = (props: Props) => {
  return (
    <>
      <input
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value ? props.value : ""}
        onChange={(e) => props.handlerFn(e.target.value)}
      />
    </>
  );
};

export default Input;
