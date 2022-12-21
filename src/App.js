import UseAxios from "./hooks/UseAxios";
import UseBeforeLeave from "./hooks/UseBeforeLeave";
import UseClick from "./hooks/UseClick";
import UseConfirm from "./hooks/UseConfirm";
import UseFadeIn from "./hooks/UseFadeIn";
import UseFullScreen from "./hooks/UseFullscreen";
import UseInput from "./hooks/UseInput";
import UseNetwork from "./hooks/UseNetwork";
import UseNotification from "./hooks/UseNotification";
import UsePreventLeave from "./hooks/UsePreventLeave";
import UseScroll from "./hooks/UseScroll";
import UseState from "./hooks/UseState";
import UseTabs from "./hooks/UseTabs";
import UseTitle from "./hooks/UseTitle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UseState />
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UseConfirm />
      <UsePreventLeave />
      <UseBeforeLeave />
      <UseFadeIn />
      <UseNetwork />
      <UseScroll />
      <UseFullScreen />
      <UseNotification />
      <UseAxios />
    </div>
  );
}

export default App;
