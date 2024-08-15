// Sample item data, replace with dynamic data as necessary


function populateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;
    let totalTax = 0;

    const items = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (items.length === 0) {
        cartItems.innerHTML = '<tr><td colspan="5" class="text-center">Your cart is empty.</td></tr>';
    } else {

    items.forEach(item => {
        const itemTotal = parseFloat(item.price) + parseFloat(item.tax);
        total += parseFloat(item.price);
        totalTax += parseFloat(item.tax);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.img}" alt="${item.name}" style="width: 100px; height: auto;"> ${item.name}</td>
            <td>$${parseFloat(item.price).toFixed(2)}</td>
            <td>$${parseFloat(item.tax).toFixed(2)}</td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeItem(${item.id})" class="btn btn-danger">Remove</button></td>
        `;
        cartItems.appendChild(row);
    });
}

    // Update the total price and tax in the table footer
    document.getElementById('totalPrice').textContent = `$${(total + totalTax).toFixed(2)}`;
}

function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemId); // Remove item from array
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    populateCart(); // Repopulate cart after removal
}

// Initial population of the cart
document.addEventListener('DOMContentLoaded', populateCart);

function Checkout() {
    alert("Thank You for shopping with Us!!!!!");
  }