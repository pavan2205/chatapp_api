import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Messages = () => {
  const { roomId } = useParams();
  let [messages, setMessages] = useState([]);
  let [inputs, setInputs] = useState("");

  useEffect(() => {
    console.log(roomId);
    messages = [];
    const headers = { "Content-Type": "application/json" };
    axios
      .get(
        `http://35.76.120.169/api/organizations/654130c95596847426743990/chatrooms/654130c95596847426743990/${roomId}/messages`,
        { headers }
      )
      .then(async function (response) {
        console.log(response.data.messages);
        let roomnames = await response.data.messages;
        let updatedRoomlist = roomnames.map((roomname) => roomname);
        setMessages(updatedRoomlist); // Update the state with the new data
      });
  }, [messages]);

  const sendMessage = () => {
    // You can handle the message sending logic here
    console.log("Message sent: " + inputs);
    axios
      .post(
        `http://35.76.120.169/api/organizations/654130c95596847426743990/chatrooms/654130c95596847426743990/${roomId}/message`,
        { sender: "becky lynch", receiver: "praneeth", text: `${inputs}` }
      )
      .then((response) => {
        console.log(response.status, response.data.token);
        // window.location.reload();
      });
  };

  return (
    <div>
      <h1>Messages</h1>
      {messages.map((message) => {
        return (
          <p>
            <span>{message.sender}:&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>{message.text}</span>
          </p>
        );
      })}
      <div>
        <input
          id="messi"
          value={inputs}
          onChange={(e) => setInputs(e.target.value)}
        ></input>
        <button onClick={sendMessage}>Send</button>
      </div>
      <p>&copy;App-Pavan Naik&nbsp; &copy;Api-Praneeth P</p>
    </div>
  );
};

export default Messages;
