import logo from './logo.svg';
import './App.css';
import  Card1 from "./Components/Card1";
import Navbar from "./Components/Navbar"
import Card3 from "./Components/Card3"
import Card2 from "./Components/Card2"

function App() {
  return (
    <div className="main-sec">
     <Navbar/>
     <Card1/>
     <Card2/>
     <Card3/>
    
    </div>
    
  );
}

export default App;
