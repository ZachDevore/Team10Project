import './App.css';
import logo from './logo.svg';
import NavigationBar from './Components/NavigationBar';
import {Route, Routes} from "react-router-dom";
import IndividualProductView from './Pages/IndividualProductView';
import PopUp from './Components/PopUp';

function App() {
  
  return (
    <>
      <IndividualProductView />
    </>
  );
}

/* This is how to set up routing
 <div className="container">
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/pricing" element={<Pricing />} />
         <Route path="/about" element={<About />} />
        </Routes>
      </div>
      */

export default App;


