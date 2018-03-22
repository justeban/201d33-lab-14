'use strict';

function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product


  var itemElement=document.getElementById('items');


  for ( var i = 0; i < Product.allProducts.length; i++) {

    var optionsElement = document.createElement('option');
    optionsElement.textContent = Product.allProducts[i].name;
    itemElement.appendChild(optionsElement);

  }

}

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // console.log(event.target.items.value);
  // Do all the things
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

function addSelectedItemToCart() {
  var itemName = event.target.items.value;
  var itemQuantity = event.target.quantity.value;

  new Cart(itemName, itemQuantity);
}

function saveCartToLocalStorage() {
  var storedCart = JSON.stringify(Cart.allContents);
  localStorage.setItem('storedcart', storedCart );
}

function updateCounter() {
  // TODO: Update the cart count in the header
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
}
// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)
var catalogSubmit = document.getElementById('catalog');
catalogSubmit.addEventListener('submit', handleSubmit);


// Start it up ...
populateForm();
