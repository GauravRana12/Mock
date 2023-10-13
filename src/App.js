import logo from './logo.svg';
import './App.css';
import Allroutes from './Allroutes/Allroutes';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Allroutes />
    </div>
  );
}

export default App;
