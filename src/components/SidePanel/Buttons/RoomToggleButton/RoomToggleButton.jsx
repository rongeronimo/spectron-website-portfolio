import React, { useState } from "react";
import "./RoomToggleButton.scss";
import { useToggleRoomStore } from "../../../../stores/toggleRoomStore.js";
import { useUiStore } from "../../../../stores/uiStore.js";

// ✅ Import images directly — React will resolve their paths correctly
import darkButton from "../../../../images/darkButton.png";
import darkHovered from "../../../../images/darkHovered.png";
import lightButton from "../../../../images/lightButton.png";
import lightHovered from "../../../../images/lightHovered.png";

const RoomToggleButton = () => {
  const { isDarkRoom, setDarkRoom, isTransitioning } = useToggleRoomStore();
  const { closePanel } = useUiStore();
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    closePanel();
    if (!isTransitioning) {
      setDarkRoom(!isDarkRoom);
    }
  };

  // Correctly use imported image paths
  const buttonImage = isDarkRoom
    ? isHovered
      ? darkHovered
      : darkButton
    : isHovered
      ? lightHovered
      : lightButton;

  return (
    <button
      className="toggle-button"
      onClick={handleToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: `url(${buttonImage})`,
      }}
    />
  );
};

export default RoomToggleButton;
