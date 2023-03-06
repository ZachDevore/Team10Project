import '../Styles/addProduct.css';

export default function AddProduct () {
    return (
        <>
            <table style={{width: "100%"}}>
            <colgroup>
                <col style={{width: "20%"}}/>
                <col style={{width: "30%"}}/>
                <col style={{width: "20%"}}/>
                <col style={{width: "30%"}}/>
            </colgroup>
            <tbody>
                <tr>
                    <td id="navBar" style={{textAlign: "center", border: "1px solid white"}} colSpan="4">Nav Bar</td>
                </tr>
                <tr>
                    <td colSpan="4" style={{border: "1px solid white"}}>
                        <div id="dragDrop" style={{height: "300px", width: "100%", textAlign: "center", lineHeight: "300px", verticalAlign: "middle"}}>Drag & Drop space</div>
                    </td>
                </tr>
                <tr>
                    <td style={{paddingTop: "15px"}}>
                        <label>Product Name:</label>
                    </td>
                    <td style={{paddingTop: "15px"}}>
                        <input type="text" size="40"/>
                    </td>
                    <td style={{paddingTop: "15px"}}>
                        <label>Initial Quantity:</label>
                    </td>
                    <td style={{paddingTop: "15px"}}>
                        <input type="text" size="40"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Product Price:</label>
                    </td>
                    <td>
                        <input type="text" size="40" placeholder="$0.00"/>
                    </td>
                    <td>
                        <label>Minimum Stock Level:</label>
                    </td>
                    <td>
                        <input type="text" size="40"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Supplier:</label>
                    </td>
                    <td>
                        <select type="text" style={{marginTop: "4px"}}>
                            <option>Example</option>
                            <option>Test</option>
                        </select>
                        <button>Add</button>
                    </td>
                    <td>
                        <label>Reorder Point:</label>
                    </td>
                    <td>
                        <input type="text" size="40"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Availability:</label>
                    </td>
                    <td>
                        <select>
                            <option value="true">Available</option>
                            <option value="false">Not Available</option>
                        </select>
                    </td>
                    <td>
                        <label>Reorder Quantity:</label>
                    </td>
                    <td>
                        <input type="text" size="40"/>
                    </td>
                </tr>
                <tr>
                    <td id="categories" colSpan="2" style={{verticalAlign: "top", border: "none", textAlign: "center", paddingTop: "15px"}}>
                        <table style={{width: "100%", padding: "10px", border: "none"}}>
                            <tbody>
                                <tr>
                                    <td style={{verticalAlign: "top", border: "none"}}>
                                        <label style={{float: "none"}}>Categories:</label>
                                        <button style={{marginLeft: "20px"}}>Add Category</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label style={{float: "none", marginRight: "10px"}}>
                                            <input style={{float: "none", marginLeft: "3px"}} type="checkbox" id="test1" name="test1" value="t1"/>
                                            Test 1
                                        </label>
                                        <label style={{float: "none", marginRight: "10px"}}>
                                            <input style={{float: "none", marginRight: "3px"}} type="checkbox" id="test4" name="test4" value="t4"/>
                                            Test 4
                                        </label><br/>
                                        <label style={{float: "none", marginRight: "10px"}}>
                                            <input style={{float: "none", marginRight: "3px"}} type="checkbox" id="test2" name="test2" value="t2"/>
                                            Test 2
                                        </label>
                                        <label style={{float: "none", marginRight: "10px"}}>
                                            <input style={{float: "none", marginRight: "3px"}} type="checkbox" id="test5" name="test5" value="t5"/>
                                            Test 5
                                        </label><br/>
                                        <label style={{float: "none", marginRight: "10px"}}>
                                            <input style={{float: "none", marginRight: "3px"}} type="checkbox" id="test3" name="test3" value="t3"/>
                                            Test 3
                                        </label>
                                        <label style={{float: "none", marginRight: "10px"}}>
                                            <input style={{float: "none", marginRight: "3px"}} type="checkbox" id="test6" name="test6" value="t6"/>
                                            Test 6
                                        </label><br/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td id="desc" colSpan="2" style={{border: "none", paddingTop: "15px"}}>
                        <table style={{width: "100%", border: "none"}}>
                            <tbody>
                                <tr>
                                    <td>
                                        <label style={{float: "left"}}>Product Description:</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <textarea style={{height: "100px", width: "90%", padding: "5px"}}></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
    );
}