import React, { useRef, useEffect } from "react";
import './SidePanel.scss';
import { useUiStore } from "../../stores/uiStore";

import gsap from "gsap";

const SidePanel = () => {
  const { isPanelOpen, panelContent, closePanel } = useUiStore();
  const panelRef = useRef(null);

  useEffect(() => {
    if (isPanelOpen) {
      gsap.to(panelRef.current, {
        x: 0,
        duration: 0.5,
      });
    } else {
      gsap.to(panelRef.current, {
        x: "100%",
        duration: 0.5,
      });
    }
  }, [isPanelOpen]);

  return (
    <>
      <div className={`overlay ${isPanelOpen ? "open" : ""}`} onClick={closePanel}/>
      
      <div ref={panelRef} className={`side-panel ${isPanelOpen ? "open" : ""}`}>
        <button onClick={closePanel} className="close-button">✕</button>

      <div className="side-panel-content">
        <img src="images/LightMode.png" className="side-panel-full-image" />

        <div className="side-panel-text">
          {panelContent && (
            <>
              <h1 className="panel-header">{panelContent.title}</h1>
              <p className="panel-content-description">{panelContent.content}</p>
            </>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default SidePanel;
