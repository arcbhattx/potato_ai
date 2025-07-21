import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainApp from './components/MainApp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

    <NavBar></NavBar>
    <MainApp></MainApp>
    
    </>
  );
}

export default App;
