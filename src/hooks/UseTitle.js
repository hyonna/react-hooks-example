import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);

  return setTitle;
};

export default function UseTitle() {
  const titleUpdator = useTitle("Loading...");
  setTimeout(() => titleUpdator("Home"), 5000);
  return <div></div>;
}
