import React from 'react'; // add this line to import the React object
import Login from './Components/Login';

function App() {

  return (
    <>
      
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
