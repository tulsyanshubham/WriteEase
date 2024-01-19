import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import UseCases from './Components/UseCases';
import HowItWorks from './Components/HowItWorks';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <UseCases/>
      <HowItWorks/>
    </div>
  );
}

export default App;
