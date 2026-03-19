import React, { useEffect } from "react";
import SidePanel from "../components/SidePanel/SidePanel.jsx";
import "./PagewithSidePanel.scss";
import { useUiStore } from "../stores/uiStore.js";

const PagewithSidePanel = ({ sections }) => {
  const { openPanel } = useUiStore();

  useEffect(() => {
    openPanel();
  }, []);

  return (
    <>
      <div className="hello"></div>
      <SidePanel sections={sections} />
    </>
  );
};

export default PagewithSidePanel;

