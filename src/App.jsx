import './App.scss'
import RoomToggleButton from './components/SidePanel/Buttons/RoomToggleButton/RoomToggleButton'
import SidePanel from './components/SidePanel/SidePanel';
import Experience from './Experience/Experience';
import LoadingPage from "./pages/LoadingPage/LoadingPage";

function App() {
  return ( 
    <>
      <SidePanel />
      <Experience />
      <LoadingPage />
      <RoomToggleButton />
    </>
  );
}

export default App;
