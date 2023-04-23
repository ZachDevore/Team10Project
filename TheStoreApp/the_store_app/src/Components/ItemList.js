import ItemRow from './ItemRow';

export default function ItemList( { rows } ) {
    let r = [];
  
    for (let i = 0; i < rows.length; i++) {
      r.push(<ItemRow item={rows[i]}/>)
    }
  
    return (<div id="mainContent" style={{maxHeight: window.innerHeight*.95}}>{r}</div>);
  }