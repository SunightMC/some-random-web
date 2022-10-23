function AddToCart(name) {
    var theDiv = document.getElementById("cart");
    var content = document.createTextNode("1x", name);
    theDiv.appendChild(content);
}