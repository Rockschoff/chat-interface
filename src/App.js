import "./styles.css";
import Response from "./Response";
import { useEffect, useState } from "react";
export default function App() {
  const [chatList, setChatList] = useState([]);
  // setChatList([{ text: "yo! we da text!", sender: "bot" }]);
  useEffect(() => {
    setChatList([{ text: "yo! we da text!", sender: "bot" }]);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    var text = document.getElementById("chatbox-input").value.trim();
    if (text.length > 0) {
      setChatList([...chatList, { text: text, sender: "me" }]);
    }
    e.target.reset();
    //Call OpenAI API
  }
  return (
    <div className="App">
      <div className="chatwindow">
        {chatList.map((ele, index) => {
          return <Response text={ele.text} sender={ele.sender} key={index} />;
        })}
      </div>
      <div className="chatbox">
        <div className="chatbox-upload">
          <p>+</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="chatbox-input"
            id="chatbox-input"
          ></input>
          <input type="submit" className="chatbox-button"></input>
        </form>
      </div>
    </div>
  );
}
