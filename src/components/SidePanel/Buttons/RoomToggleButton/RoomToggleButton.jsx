import React, { useRef, useEffect } from "react";
import './RoomToggleButton.scss';
import  { useToggleRoomStore }  from "../../../../stores/toggleRoomStore.js";
import { useUiStore } from "../../../../stores/uiStore.js";

import gsap from "gsap";

const RoomToggleButton = () => {
  
  const { isDarkRoom, setDarkRoom, isTransitioning } = useToggleRoomStore();
  const { closePanel } = useUiStore();

  const handleToggle = () => {
    closePanel();
    if(!isTransitioning){
      setDarkRoom(!isDarkRoom);
    } 
  };
  return (
    <>
      <button className="toggle-button"
      onClick={handleToggle}
      >
      Switch
      </button>
    </>
  );
};

export default RoomToggleButton;
