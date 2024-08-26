const cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartContainer = document.getElementById('cart-container');
const cartItemsElement = document.getElementById('cart-items');
const viewCartButton = document.getElementById('view-cart');
const closeCartButton = document.getElementById('close-cart');

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const productName = button.parentElement.querySelector('h2').textContent;
        const productPrice = button.parentElement.querySelector('p').textContent.split('$')[1];
        
        cart.push({ id: productId, name: productName, price: parseFloat(productPrice) });
        updateCartCount();
    });
});

// Update cart item count
function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

// View cart functionality
viewCartButton.addEventListener('click', () => {
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });
    cartContainer.style.display = 'block';
});

// Close cart functionality
closeCartButton.addEventListener('click', () => {
    cartContainer.style.display = 'none';
});
