'use strict';

var itemCount = 0;

function populateForm() {
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
  var itemCounter = document.getElementById('itemCount');
  itemCount = Cart.allContents.length;

  itemCounter.innerHTML = itemCount;

}

function updateCartPreview() {

  var cartContents = document.getElementById('cartContents');
  var ulElement = document.createElement('ul');

  var liElement = document.createElement('li');
  var itemName = event.target.items.value;
  liElement.textContent = itemName;
  ulElement.appendChild(liElement);

  liElement = document.createElement('li');
  var itemQuantity = event.target.quantity.value;
  liElement.textContent = itemQuantity;
  ulElement.appendChild(liElement);
  console.log(ulElement);
  cartContents.appendChild(ulElement);

}

// function updateCartPreviewOnRefresh() {
//   if (Cart.allContents) {
//     for (var i = 0; i < Cart.allContents; i++){

//     }
//   }
// }

var catalogSubmit = document.getElementById('catalog');
catalogSubmit.addEventListener('submit', handleSubmit);

updateCounter(); // save cart counter on refresh
// Start it up ...

// updateCartPreviewOnRefresh();

populateForm();
