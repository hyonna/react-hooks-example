import { useRef } from "react";

const useFullScreen = (callBack) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callBack && typeof callBack === "function") {
        callBack(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callBack && typeof callBack === "function") {
      callBack(false);
    }
  };
  return { element, triggerFull, exitFull };
};

export default function UseFullScreen() {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen();
  return (
    <div style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          alt="img"
          src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}
