import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState<number>(0)
  const handleShowAlert = () => {
    alert("Hello react")
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>{`Alert was shown: ${counter} times`}</div>
        <button onClick={handleShowAlert}>Show alert</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
