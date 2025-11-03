import './App.scss'
import React, { useEffect } from "react";
import RoomToggleButton from './components/SidePanel/Buttons/RoomToggleButton/RoomToggleButton'
import SidePanel from './components/SidePanel/SidePanel';
import Experience from './Experience/Experience';
import LoadingPage from "./pages/LoadingPage/LoadingPage";

import { useResponsiveStore } from './stores/useResponsiveStore';

function App() {

  const {updateDimensions} = useResponsiveStore();
  
  useEffect(() => {
      window.addEventListener('resize', updateDimensions);

      return () => {
        window.removeEventListener('resize', updateDimensions);
      }
    });

  return ( 
    <>
      <LoadingPage />
      <RoomToggleButton />
      <SidePanel />
      <Experience />
    </>
  );
}

export default App;
