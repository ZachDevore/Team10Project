export default function ItemRow({item}) {
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
  }