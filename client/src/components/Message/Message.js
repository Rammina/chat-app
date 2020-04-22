import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

// import closeIcon from "../../icons/closeIcon.png";
// import onlineIcon from "../../icons/onlineIcon.png";

import "./Message.css";

const Message = ({ message, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
};

export default Message;
