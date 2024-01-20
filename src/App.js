import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import UseCases from './Components/UseCases';
import HowItWorks from './Components/HowItWorks';
import Message from './Components/Message';
import Pricing from './Components/Pricing';
import Ready from './Components/Ready';
import About from './Components/About';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <UseCases/>
      <HowItWorks/>
      <Message/>
      <Pricing/>
      <Ready/>
      <About/>
    </div>
  );
}

export default App;
