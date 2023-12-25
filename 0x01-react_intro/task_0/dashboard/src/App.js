import logo from './dashboard/holberton.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </header>
      <div className="Divder"></div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="Divder"></div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>

    </div>
  );
}

export default App;
