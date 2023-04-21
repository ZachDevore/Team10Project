import ItemList from '../Components/ItemList';
import { useEffect, useState } from 'react';
/*import './App.css';*/

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