import React from 'react';
import MicroApp from '@robincsl/micro-app'
import logo from './logo.svg';
import './App.css';

function App() {
  const [shouldThrowError, throwError] = React.useState(false);

  if (shouldThrowError) {
    throw new Error("Snap! The app crashed.")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => throwError(true)}>Trigger application error</button>
        <MicroApp />
      </header>
    </div>
  );
}

export default App;
