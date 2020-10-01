import React from "react";
import { FiSettings, FiLogOut, FiSearch } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import profilePic from "../../images/profile_pic.svg";

export const Sidebar = () => {
  const conversations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <button className="sidebar__header-icon">
          <FiSettings />
        </button>
        <h1 className="sidebar__header-brand">Chat</h1>
        <button className="sidebar__header-icon">
          <AiOutlinePlusCircle />
        </button>
      </div>
      <div className="sidebar__nav">
        <button className="sidebar__nav-item active">All</button>
        <button className="sidebar__nav-item">Groups</button>
        <button className="sidebar__nav-filter">
          <FiSearch />
        </button>
      </div>
      <div className="sidebar__conversations">
        {conversations.map(c => (
          <div className={`conversation ${c === 10 ? "active" : ""}`} key={c}>
            <img
              src={profilePic}
              alt="profile_pic"
              className="avatar conversation__avatar"
            />
            <div>
              <div className="conversation__info">
                <div className="conversation__info-top mb-1">
                  <h2 className="conversation__info-name">
                    Crazy boys {c === 2 && " new group co"}
                  </h2>
                  <p className="conversation__info-last-message-time">
                    12:34 PM
                  </p>
                </div>
              </div>
              <p className="conversation__last-message">
                This is the last message we had in this group.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="sidebar__footer">
        <p className="sidebar__footer-version">v1.0.0</p>
        <button className="sidebar__footer-logout">
          <FiLogOut />
        </button>
      </div>
    </aside>
  );
};
