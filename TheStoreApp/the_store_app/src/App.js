import logo from './logo.svg';
import NavigationBar from './Components/NavigationBar';
import {Route, Routes} from "react-router-dom";
import IndividualProductView from './Pages/IndividualProductView';
import Login from './Components/Login';

function App() {
  
  return (
    <>
      <IndividualProductView />
      <Login />
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
