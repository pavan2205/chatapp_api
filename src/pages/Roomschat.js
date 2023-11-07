import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Rooms = () => {
  let [roomlist, setRoomlist] = useState([]);
  useEffect(() => {
    roomlist = [];
    const headers = { "Content-Type": "application/json" };
    axios
      .get(
        "http://35.76.120.169/api/organizations/654130c95596847426743990/chatrooms/654130c95596847426743990",
        { headers }
      )
      .then(async function (response) {
        let roomnames = await response.data.rooms;
        let updatedRoomlist = roomnames.map((roomname) => roomname);
        setRoomlist(updatedRoomlist); // Update the state with the new data
        console.log(updatedRoomlist);
      });
  }, []);

  return (
    <div>
      <h1>Rooms</h1>
      <ul>
        {roomlist.map((room) => {
          return (
            <li key={room._id}>
              <Link to={`/Messages/${room._id}`}>{room.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Rooms;
