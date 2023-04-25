import CartRow from './CartRow';

export default function CartList({rows}) {
    let r = [];
  
    for (let i = 0; i < rows.length; i++) {
      r.push(<CartRow cartIndex={i} />)
    }
  
    return (<div style={{maxHeight: window.innerHeight*.95}}>{r}</div>);
  }