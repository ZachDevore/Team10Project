export default function ItemRow({item}) {
    return (
      <table className="item" style={{width: "100%"}}>
        <colgroup>
          <col style={{width:"1%"}}/>
          <col style={{width:"99%"}}/>
        </colgroup>
        <tr>
          <td><img src={item.Image} className="productImage"/></td>
          <td className="info">
            <span className="name">{item.ProductName}</span>
            <span className="price">{item.ProductPrice.toFixed(2)}</span><br/>
            Quantity in Stock:<span className="qty">{item.InitialQuantity}</span><br/><br/>
            <span>{item.ProductDescription}</span>
          </td>
        </tr>
      </table>
    );
  }