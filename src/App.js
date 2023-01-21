
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
 // Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    
      <div>
        <Router>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Link to="/navbar">Navbar</Link>
      <Link to="/">Home</Link>

      <Link to="/footer">Footer</Link>

    

      <Routes>
        <Route path='/navbar' element={<Navbar />}> 
        </Route>

        <Route path='/' element={<Home />}> 
        </Route>


        <Route path='/footer' element={<Footer />}> 
        </Route>
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;