'use strict';

var Cart = [];




function loadCart() {


  var jsonCartData = localStorage.getItem('storedcart');
  var useableCartData =JSON.parse(jsonCartData);

  if (useableCartData && useableCartData.length) {

    Cart = useableCartData;
    return Cart;
  }

}


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table
  var cartTable = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (var i = 0; i < Cart.length; i++ ) { 

  // TODO: Create a TR
    var trElement= document.createElement('tr');

    // TODO: Create a TD for the quantity and the item
    var tdElement= document.createElement('td');
    tdElement.innerHTML= '<button id="' + Cart[i].item + '">x</button>';
    trElement.appendChild(tdElement);

    tdElement= document.createElement('td');
    tdElement.textContent= Cart[i].item;
    trElement.appendChild(tdElement);

    tdElement= document.createElement('td');
    tdElement.textContent= Cart[i].quantity;
    trElement.appendChild(tdElement);
    cartTable.tBodies[0].appendChild(trElement);


  }
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  var itemID = event.target.id;

  for (var i in Cart) {
    if (Cart[i].item === itemID) {
      Cart.splice(i,1);
      break;
    }
  }
  // TODO: Save the cart back to local storage
  var newJsonCart = JSON.stringify(Cart);
  console.log(newJsonCart);
  localStorage.setItem('storedcart', newJsonCart);
  // TODO: Re-draw the cart table
  loadCart();
  var cartTable = document.getElementById('cart');
  cartTable.tBodies[0].innerHTML = '';
  showCart();
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var cartTable = document.getElementById('cart');
cartTable.addEventListener('click', removeItemFromCart );

loadCart();

showCart();