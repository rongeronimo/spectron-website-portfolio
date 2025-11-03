import React, { useRef, useEffect } from "react";
import "./SidePanel.scss";
import { useUiStore } from "../../stores/uiStore";
import { useToggleRoomStore } from "../../stores/toggleRoomStore"; 
import gsap from "gsap";

import LightModeHigh from "../../images/LightModeHigh.png";
import DarkModeHigh from "../../images/DarkModeHigh.png";

const SidePanel = () => {
  const { isPanelOpen, panelContent, closePanel } = useUiStore();
  const { isDarkRoom } = useToggleRoomStore(); // <-- get dark/light mode state
  const panelRef = useRef(null);

  useEffect(() => {
    if (isPanelOpen) {
      gsap.to(panelRef.current, {
        x: 0,
        duration: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        x: "100%",
        duration: 1,
      });
    }
  }, [isPanelOpen]);

  return (
    <>
      <div
        className={`overlay ${isPanelOpen ? "open" : ""}`}
        onClick={closePanel}
      />

      <div
        ref={panelRef}
        className={`side-panel ${isPanelOpen ? "open" : ""} ${
          isDarkRoom ? "dark-mode" : "light-mode"
        }`}
      >
        <button onClick={closePanel} className="close-button">
          ✕
        </button>

        <div className="side-panel-content">
          {/*Dynamically switch image based on mode */}
          <img
            src={isDarkRoom ? LightModeHigh : DarkModeHigh}
            className="side-panel-full-image"
            alt="Side panel visual"
          />


          <div className="side-panel-text">
            {panelContent && (
              <>
                <h1 className="panel-header">{panelContent.title}</h1>
                <p className="panel-content-description">
                  {panelContent.content}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
