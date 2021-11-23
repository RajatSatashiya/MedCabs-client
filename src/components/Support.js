import { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import "./Support.css";
import AuthContext from "../context/authContext";

var socket;
function Support() {
  const authContext = useContext(AuthContext);
  const ENDPOINT = "http://localhost:5000";
  const [username, setUsername] = useState(null);
  const [messages, setMessages] = useState([]);

  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var displayMessages = (username, messages) => {
    return messages.map((mess, index) => (
      <div className="messages" key={index}>
        <div className="messauthor">{username}</div>
        <div className="messdesc">{mess}</div>
      </div>
    ));
  };

  var sendMessage = () => {
    if (message) {
      // socket.emit("sendMessage", message, () => setMessage(""));
      socket.emit("sendMessage", { message, token: authContext.token });
      setMessage("");
    }
    document.querySelector(".supportInput").value = "";
  };

  // * useEffect for socket connection and room name
  useEffect(() => {
    (async () => {
      setRoomName("support");
    })();
    socket = io(ENDPOINT);
    socket.emit("join", { room: roomName });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [roomName, ENDPOINT]);

  // * useEffect for message from server
  useEffect(() => {
    socket.on("message", (msg) => {
      var { user, text } = msg;
      setUsername(user);
      setMessages((messages) => [...messages, text]);
    });
  }, [roomName]);

  return (
    <>
      <div className="supportChat">
        <div className="supportUp">Send us a message</div>
        {displayMessages(username, messages)}
        <div className="supportDown">
          <input
            type="text"
            className="supportInput"
            placeholder="Type a message..."
            onChange={(event) => setMessage(event.target.value)}
          ></input>
          <i className="fas fa-play" onClick={() => sendMessage()}></i>
        </div>
      </div>
    </>
  );
}
export default Support;
