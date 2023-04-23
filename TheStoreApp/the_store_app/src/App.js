import Inventory from './Pages/Inventory';
import AddProduct from './Pages/AddProduct';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import {Routes, Route} from 'react-router-dom';
import LoginScreen from './Pages/LoginScreen';
import Cart from './Pages/Cart';
import PageNotFound from './Pages/PageNotFound';
import AboutPage from './Pages/AboutPage';
import SignUp from './Components/SignUpPage';

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/" element={<Inventory />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/signin" element={<LoginScreen />} />
        <Route path="/signUp" element={< SignUp/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
    /*<div className="App">
      <table id="topnav" style={{width: "100%"}}>
        <colgroup>
          <col style={{width: "5%"}}/>
          <col style={{width: "80%"}}/>
          <col style={{width: "5%"}}/>
          <col style={{width: "10%"}}/>
        </colgroup>
        <tbody>
          <tr>
            <td id="logo"><img src={logo} alt="" style={{height: 30}}/></td>
            <td><input type="text" size="40" style={{border: "2px solid blue", borderRadius: 6}} placeholder="search..."/></td>
            <td><img src={cart} alt="" style={{height: 30}}/></td>
            <td>login</td>
          </tr>
        </tbody>
      </table>
      <table style={{width: "100%"}}>
        <colgroup>
          <col style={{width: "90%"}}/>
          <col style={{width: "10%"}}/>
        </colgroup>
        <tbody>
          <tr>
            <td>
              <ItemList rows={items}/>
            </td>
            <td id="sideNav">
              <a href="#">Account Detail</a><br/><br/>
              <a href="#">Purchase History</a><br/><br/>
              <a href="#">Contact</a><br/><br/>
              <a href="#">FAQ</a><br/><br/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>*/
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

export default App;
