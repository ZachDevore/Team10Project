/*import logo from './logo.jpg';
import cart from './cartLogo.jpg';
import backpack from './backpack.png';
import blanket from './blanket.jpg';
import pm from './pancakeMix.jpg';
import socks from './socks.jpg';
import toaster from './toaster.jpg';*/
import Inventory from './Pages/Inventory';
import AddProduct from './Pages/AddProduct';
import ProductList from './Pages/Inventory';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import {Routes, Route} from 'react-router-dom';

/*const items = [
  {
    image: toaster,
    productID: 1,
    qty: 20,
    name: 'Toaster',
    price: 35,
    desc: 'Modern function with a retro, commercial look for your kitchen counter. Features include six-setting browning dials,' +
     '1½"-wide slots, lift-lever for small items, slide-out crumb tray, defrost and bagel buttons with LED indicators.'
  },
  {
    image: socks,
    productID: 2,
    qty: 50,
    name: 'Toe Socks',
    price: 12,
    desc: "Add warmth to your favorite adventure sandals with Bedrock's latest Performance Split-Toe Sock. Built with Injinji's Trail" +
    "Midweight technology and split-toe design, this sandal-compatible sock will keep your toes cozy as the mercury dips on trail or in" +
    "town. If you're looking for a tabi sock, lobster sock, or ninja sock to perfectly pair with your sandals, you're in the right place." +
    "Injinji's Midweight style provides maximum cushioning, featuring a padded heel and metatarsal for durability and protection." +
    "Mini-crew length fully covers the ankle and made with 33% Coolmax, 65% Nylon, 2% Lycra.  Imported."
  },
  {
    image: pm,
    productID: 3,
    qty: 40,
    name: 'Pancake Mix',
    price: 4.99,
    desc: "Make any moment memorable when you serve a stack of pancakes made with our Original Pancake & Waffle Mix. They’re perfectly" +
    "fluffy, so you can feel good about serving them to your family."
  },
  {
    image: blanket,
    productID: 4,
    qty: 15,
    name: 'Fluffy Blanket',
    price: 27.99,
    desc: "BEDSURE Sherpa Fleece Throw Blanket Twin Size for Couch - Thick and Warm Blankets for Winter, Soft and Fuzzy Twin Blanket for" +
    "Bed, Grey, 60x80 Inches"
  },
  {
    image: backpack,
    productID: 5,
    qty: 20,
    name: 'Cherry Backpack',
    price: 75,
    desc: 'Printed coated canvas and refined pebble leather. Inside zip and multifunction pockets Double zip closure, fabric lining' +
    'Handle with 2 1/4" drop. Outside zip pocket. Adjustable shoulder straps'
  },
];

<Inventory />*/    

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/addproduct" element={<AddProduct />} />
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
