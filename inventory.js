// Things needed:
// Get input (image, item name, price, quantity in stock, description, link to item page) for each item available, company logo, etc.
// Dynamically add HTML code to display each item
// Search bar functionality 
// Link to Cart
// Link to login page (or account page/logout if already logged in)
// Side bar links (? right - navigation, left - advertisement space for current deals)

var productList = [
    {
        image: "toaster.jpg",
        productID: 1,
        qty: 20,
        name: 'Toaster',
        price: 35,
        desc: 'Modern function with a retro, commercial look for your kitchen counter. Features include six-setting browning dials,' +
         '1½"-wide slots, lift-lever for small items, slide-out crumb tray, defrost and bagel buttons with LED indicators.'
    },
    {
        image: "socks.jpg",
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
        image: "pancakeMix.jpg",
        productID: 3,
        qty: 40,
        name: 'Pancake Mix',
        price: 4.99,
        desc: "Make any moment memorable when you serve a stack of pancakes made with our Original Pancake & Waffle Mix. They’re perfectly" +
        "fluffy, so you can feel good about serving them to your family."
    },
    {
        image: "blanket.jpg",
        productID: 4,
        qty: 15,
        name: 'Fluffy blanket',
        price: 27.99,
        desc: "BEDSURE Sherpa Fleece Throw Blanket Twin Size for Couch - Thick and Warm Blankets for Winter, Soft and Fuzzy Twin Blanket for" +
        "Bed, Grey, 60x80 Inches"
    },
    {
        image: "backpack.png",
        productID: 5,
        qty: 20,
        name: 'Cherry Backpack',
        price: 75,
        desc: 'Printed coated canvas and refined pebble leather. Inside zip and multifunction pockets Double zip closure, fabric lining' +
        'Handle with 2 1/4" drop. Outside zip pocket. Adjustable shoulder straps'
    },
]

function addItems(productList) {
    var h = [];
    for (var i=0; i<productList.length; i++) {
        var prod = productList[i];
        h.push('<table class="item">');
        h.push('<col style="width:20%">');
        h.push('<col style="width:80%">');
        h.push('<td><img src="'+ prod.image +'" class="productImage"></td>');
        h.push('<td class="info">');
        h.push('<span class="name">'+prod.name+'</span>');
        h.push('<span class="price">$'+prod.price.toFixed(2)+'</span><br>');
        h.push('Quantity in Stock:<span class="qty">'+prod.qty+'</span><br><br>');
        h.push('<span>'+prod.desc+'</span>');
        h.push('</td>');
        h.push('</table>');
    }
    $("#mainContent").html(h.join(""));
}

function setHeight() {
    h = window.innerHeight*.9;
    $("#mainContent").css("max-height", h);
}

$(function() {
    addItems(productList);
    setHeight();
});