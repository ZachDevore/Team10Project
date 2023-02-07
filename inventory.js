// Things needed:
// Get input (image, item name, price, quantity in stock, description, link to item page) for each item available, company logo, etc.
// Dynamically add HTML code to display each item
// Search bar functionality 
// Link to Cart
// Link to login page (or account page/logout if already logged in)
// Side bar links (? right - navigation, left - advertisement space for current deals)

function addLogo(fileName) {
    var add = '<img src="' + fileName + '"></a>';
    $("#logo td").append(add);
}

function addItem(image, name, price, q, desc) {
    var add = '<table><col style="width:20%"><col style="width:80%"><td><img src="' + image
    add += '></td><td><table><tr><td><table><td>' + name + '</td><td>' + price + '</td></table></td></tr>'
    add += '<tr><td>Quantity in Stock:' + q + '</td></tr><tr><td>' + desc + '</td></tr></table></td></table>'
    $("#main content").append(add);
}
