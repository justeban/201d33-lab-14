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
  for (var i = 0;  i < Cart.length; i++ ) { 

  // TODO: Create a TR
    var trElement= document.createElement('tr');

    // TODO: Create a TD for the quantity and the item
    var tdElement= document.createElement('td');
    tdElement.textContent= Cart[i].item;
    trElement.appendChild(tdElement);

    var tdElement= document.createElement('td');
    tdElement.textContent= Cart[i].quantity;
    trElement.appendChild(tdElement);
    cartTable.tBodies[0].appendChild(trElement);

  // TODO: Add the TR to the TBODY and both TD's to the TR
  }
}

function removeItemFromCart() {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item

  // TODO: Save the cart back to local storage


  // TODO: Re-draw the cart table
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

loadCart();

showCart();