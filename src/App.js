import './App.css';
import {Body} from './components/Body';
import { Navigation } from './components/Navigation';
import { Taskbar } from './components/Taskbar';

function App() {
  return (
    <>
    <Taskbar />
    <Body />
    <Navigation />
    </>
  );
}

export default App; 
