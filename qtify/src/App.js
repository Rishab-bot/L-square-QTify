import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import search from './components/search';

function App() {
  return (
    <div className="App">
      <navbar />
      <search />
      <logo />
      <hero />
    </div>
  );
}

export default App;
