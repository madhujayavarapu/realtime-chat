import React from "react";
import profilePic from "../../images/profile_pic.svg";
import { FaTrashAlt, FaReply, FaInfo } from "react-icons/fa";

export const Messages = () => {
  const messages = [
    {
      id: "notification_1",
      message: "Welcome to the group Crazy Boys!!",
      type: "notification"
    },
    { id: "you_1", type: "message", sender: "you", message: "Hi" },
    { id: "you_2", type: "message", sender: "you", message: "How are you..?" },
    {
      id: "you_hello",
      type: "message",
      sender: "Surya",
      message: "Hi"
    },
    {
      id: "other_1",
      type: "message",
      sender: "Satish",
      message: "Hello Madhu, I'm Fine"
    },
    {
      id: "other_2",
      type: "message",
      sender: "Satish",
      message: "What about you..?"
    },
    { id: "you_3", type: "message", sender: "you", message: "Yeah I'm good." },
    {
      id: "you_4",
      type: "message",
      sender: "you",
      message: "Shall we catch up on this weekend!"
    },
    { id: "other_3", type: "message", sender: "other", message: "Yeah sure" },
    {
      id: "notification_2",
      message: "Madhu Created a event on Oct 3, 2020",
      type: "notification"
    }
  ];
  return (
    <div className="chat__messages-container">
      {messages.map(m => (
        <>
          {m.type === "message" && (
            <div
              key={m.id}
              className={`message ${
                m.sender === "you" ? "align-right" : "align-left"
              }`}
            >
              {m.sender !== "you" && (
                <img
                  src={profilePic}
                  alt={m.sender}
                  className="avatar message__avatar"
                />
              )}
              <div className="message__main">
                <p className="message__text">{m.message}</p>
                <div className="message__meta">
                  {m.sender !== "you" && (
                    <p className="message__meta-name">{m.sender}</p>
                  )}
                  <p className="message__meta-time">12:30 PM</p>
                </div>
              </div>
            </div>
          )}

          {m.type === "notification" && (
            <div className="notification">
              <h4 className="notification__text">{m.message}</h4>
            </div>
          )}
        </>
      ))}
    </div>
  );
};
