import React, { useRef, useEffect } from "react";
import './RoomToggleButton.scss';
import  { useToggleRoomStore }  from "../../../../stores/toggleRoomStore.js";

import gsap from "gsap";

const RoomToggleButton = () => {
  
  const { isDarkRoom, setDarkRoom } = useToggleRoomStore();

  const handleToggle = () => {
    setDarkRoom(!isDarkRoom);
  }

  return (
    <>
      <button className="toggle-button" onClick={handleToggle}>
      switch
      </button>
    </>
  );
};

export default RoomToggleButton;
