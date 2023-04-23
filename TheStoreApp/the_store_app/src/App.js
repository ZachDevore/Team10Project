import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/*function ItemList({rows}) {
  let r = [];

  for (let i = 0; i < rows.length; i++) {
    r.push(<ItemRow item={rows[i]}/>)
  }

  return (<div id="mainContent" style={{maxHeight: window.innerHeight*.95}}>{r}</div>);
}*/

/*function ItemRow({item}) {
  return (
    <table className="item" style={{width: "100%"}}>
      <colgroup>
        <col style={{width:"1%"}}/>
        <col style={{width:"99%"}}/>
      </colgroup>
      <tr>
        <td><img src={item.image} className="productImage"/></td>
        <td className="info">
          <span className="name">{item.name}</span>
          <span className="price">{item.price.toFixed(2)}</span><br/>
          Quantity in Stock:<span className="qty">{item.qty}</span><br/><br/>
          <span>{item.desc}</span>
        </td>
      </tr>
    </table>
  );
}*/

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


