export default function CartRow (props) {
    const cartItem = props.cartItem;
    return (
        <>
            <table className="item">
                <colgroup>
                    <col style={{width: "40px"}}/>
                    <col style={{width: "400px"}}/>
                    <col style={{width: "80px"}}/>
                    <col style={{width: "80px"}}/>
                </colgroup>
                <tbody>
                <tr className="item">
                    <td className="img"><img style={{width: "40px"}} src={cartItem.product.Image}/></td>
                    <td className="desc">
                        <table>
                            <tr>
                                <td>{cartItem.product.ProductName}</td>
                                <td>{cartItem.product.ProductPrice}</td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    {cartItem.product.ProductDesciption}
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td className="qty">{cartItem.quantity}</td>
                    <td className="total">{cartItem.lineItemTotal}</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}
