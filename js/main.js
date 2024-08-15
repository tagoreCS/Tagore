function toggleWishlist(element) {
    if (element.style.color === 'red') {
        element.style.color = '#ccc';  // Not in wishlist, show default color
    } else {
        element.style.color = 'red';  // In wishlist, show red color
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseover', function (event) {
        dropdownMenu.classList.add('show');
        dropdown.setAttribute('aria-expanded', true);
    });

    dropdown.addEventListener('mouseout', function (event) {
        dropdownMenu.classList.remove('show');
        dropdown.setAttribute('aria-expanded', false);
    });

});

function showToast() {
    var toastEl = document.getElementById('cartToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
}

function addToCart(id, name, img, price, tax) {
    const item = { id, name, img, price, tax };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    var toastEl = document.getElementById('cartToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
}