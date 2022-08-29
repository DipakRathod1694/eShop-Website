
import './App.css';
import Header from "./Header.js" 
import Home from "./Home.js"
import Checkout from "./Checkout"
import { Route,Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/checkout" element={<><Header/><Checkout/></>}></Route>
          <Route path='/' element={<><Header/><Home/></>}></Route>
        </Routes>
    </div>
  );
}

export default App;
