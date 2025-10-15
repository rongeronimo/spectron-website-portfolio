import { Suspense } from "react";
import './App.scss'
import RoomToggleButton from './components/SidePanel/Buttons/RoomToggleButton/RoomToggleButton'
import SidePanel from './components/SidePanel/SidePanel';
import Experience from './Experience/Experience';
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import * as THREE from 'three';

function App() {
  return ( 
    <>
      <SidePanel />
      <Experience />
      <LoadingPage />
    </>
  );
}

export default App;
