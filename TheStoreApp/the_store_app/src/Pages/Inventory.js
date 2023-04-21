import logo from '../logo.jpg';
import cart from '../cartLogo.jpg';
import backpack from '../backpack.png';
import blanket from '../blanket.jpg';
import pm from '../pancakeMix.jpg';
import socks from '../socks.jpg';
import toaster from '../toaster.jpg';
import ItemList from '../Components/ItemList';
import { useEffect, useState } from 'react';
/*import './App.css';*/

/*const items = [
  {
    image: toaster,
    productID: 1,
    qty: 20,
    name: 'Toaster',
    price: 35,
    desc: 'Blah function with a retro, commercial look for your kitchen counter. Features include six-setting browning dials,' +
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
]; */



export default function Inventory() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let lamData = {
      "cmd": "query"
    }
    fetch('https://rk89vj0qf3.execute-api.us-east-1.amazonaws.com/Test/dynamodbmanager', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lamData)
    })
    .then(response => response.json())
    .then(response => {
        if (response.ok) {
            //alert("Got data" + JSON.stringify(response));
            setItems(response.results)
        }
        else {
            alert("Could not load items from database: " + JSON.stringify(response.failure));
            setItems([]);
        }
    });
  }, [])

  return (
    <div className="App">
      <table style={{width: "100%"}}>
        <tbody>
          <tr>
            <td>
              <ItemList rows={items}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}