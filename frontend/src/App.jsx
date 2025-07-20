import { useState } from 'react';
import './App.css';
import NavBar from './components/NabBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top NavBar */}
      <NavBar />

      {/* Main Content Area */}
      <div className="flex-1 p-4 text-white bg-gray-900">
        <p>Welcome to the App!</p>
      </div>
    </div>
  );
}

export default App;
