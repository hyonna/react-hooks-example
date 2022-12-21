import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default function UseClick() {
  const sayHello = () => "Say Hello";

  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>H1</h1>
    </div>
  );
}
