import logo from './dashboard/holberton.jpg';
import { getFooterCopy, getFullYear } from './utils';
import './App.css';

function App() {

  const year = getFullYear()
  const footerTxt = getFooterCopy()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </header>
      <div className="Divder"></div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type='text' placeholder="email"/>
        <label htmlFor="password">Password:</label>
        <input type='text' placeholder="password"/>
        <button type="submit">OK</button>
      </div>
      <div className="Divder"></div>
      <div className="App-footer">
        <p>Copyright {year} - {footerTxt}</p>
      </div>

    </div>
  );
}

export default App;
