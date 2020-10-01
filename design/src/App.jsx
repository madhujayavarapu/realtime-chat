import React, { useState } from "react";
import profilePic from "./images/profile_pic.svg";
import { Sidebar, Messages } from "./components";
import { AiOutlinePlusCircle, AiOutlineSend } from "react-icons/ai";

export const App = () => {
  const [message, setMessage] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  return (
    <div className="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Message Area */}
      <div className="chat">
        <header className="chat__header">
          <div>
            <h2 className="chat__header-group-name">Crazy Boys</h2>
            <p className="typing">typing...</p>
          </div>
          <div className="user-info">
            <img
              src={profilePic}
              alt="logged in user profilepic"
              className="avatar"
            />
            <h2 className="user-info__name">Madhu</h2>
          </div>
        </header>
        <div className="chat__body">
          <main className="chat__messages">
            {/* Messages */}
            <Messages />

            {/* Type Area */}
            <div className="chat__messages-footer">
              <button className="btn--plus">
                <AiOutlinePlusCircle />
              </button>
              <div
                className="message-area"
                contentEditable
                role="textbox"
                onFocus={() => setShowPlaceholder(false)}
                onBlur={() => setShowPlaceholder(!!message)}
              >
                {!!message && (
                  <div className="message-area__value">{message}</div>
                )}
                {!message && showPlaceholder && (
                  <div className="message-area__placeholder">
                    Enter your message here.
                  </div>
                )}
              </div>
              <button className="send-btn">
                <AiOutlineSend />
                Send
              </button>
            </div>
          </main>
          <aside className="chat__info">
            <div className="group__meta">
              <img
                src={profilePic}
                alt="Group"
                className="avatar group__meta-avatar"
              />
              <div className="group__info">
                <h3 className="group__info-title">Crazy Boys</h3>
                <p className="group__info-created-on ">
                  Created on Sep 28, 2020
                </p>
              </div>
            </div>

            <ul className="tabs">
              <li className="tabs__item active">Members</li>
              <li className="tabs__item">Settings</li>
            </ul>

            <ul className="group__members">
              <li className="group__members-item">
                <img
                  src={profilePic}
                  alt="user"
                  className="avatar user__avatar"
                />
                <h4 className="group__members-item-name">
                  Madhu <span className="online">Online</span>
                </h4>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      {/* End of Message Area */}
    </div>
  );
};
