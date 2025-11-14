import React from "react";
import "./RoomToggleButton.scss";
import { useToggleRoomStore } from "../../../../stores/toggleRoomStore.js";
import { useUiStore } from "../../../../stores/uiStore.js";

const RoomToggleButton = () => {
  const { isDarkRoom, setDarkRoom, isTransitioning } = useToggleRoomStore();
  const { closePanel } = useUiStore();

  const handleToggle = () => {
    closePanel();
    if (!isTransitioning) {
      setDarkRoom(!isDarkRoom);
    }
  };

  return (
    <div className="toggle-button" onClick={handleToggle}>
      <svg
        width="118"
        height="47"
        viewBox="0 0 118 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isDarkRoom ? "dark" : "light"}
      >
        {/* RECT 1 (background) */}
        <rect
          className="rect1"
          width="118"
          height="46.8727"
          rx="8"
          fill="white"
        />

        {/* RECT 2 (black diamond) */}
        <rect
          className="rect2"
          x="0.00115317"
          y="0.691664"
          width="16.0683"
          height="16.0659"
          transform="matrix(0.72337 0.69046 -0.721064 0.692868 47.6682 12.2233)"
          fill="black"
          stroke="black"
        />

        {/* RECT 3 (white diamond outline) */}
        <rect
          className="rect3"
          x="0.00115317"
          y="0.691664"
          width="16.0683"
          height="16.0659"
          transform="matrix(0.72337 0.69046 -0.721064 0.692868 71.3723 12.1855)"
          fill="white"
          stroke="black"
        />

        {/* LINES */}
        <line
          className="line1"
          y1="-0.5"
          x2="19.1061"
          y2="-0.5"
          transform="matrix(0.72337 0.69046 -0.721064 0.692868 53.8301 25.6219)"
          stroke="black"
        />

        <line
          className="line2"
          y1="-0.5"
          x2="19.1061"
          y2="-0.5"
          transform="matrix(0.72337 0.69046 -0.721064 0.692868 50.0089 9.28299)"
          stroke="black"
        />
      </svg>
    </div>
  );
};

export default RoomToggleButton;
