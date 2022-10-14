import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import AssainmentMark from './components/AssainmentMark/AssainmentMark';
import PhonesBar from './components/PhonesBar/PhonesBar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <AssainmentMark></AssainmentMark>
      <PhonesBar></PhonesBar>
    </div>
  );
}

export default App;
