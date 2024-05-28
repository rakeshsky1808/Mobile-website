// <!-- Add this script tag in the head section or include it in a separate JavaScript file (e.g., cart.js) -->
<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Sample data for cart items
        const cartItems = [
            { name: "Product 1", price: 20.00, quantity: 1 },
            { name: "Product 2", price: 15.00, quantity: 2 },
            // Add more items as needed
        ];

        // Function to render cart items
        function renderCart() {
            const cartContainer = document.querySelector('.cart-items');
            const totalContainer = document.querySelector('.cart-total h2');
            let total = 0;

            // Clear existing items
            cartContainer.innerHTML = '';

            // Loop through each item in the cart and display it
            cartItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');

                itemElement.innerHTML = `
                    <img src="item-image.jpg" alt="${item.name} Image">
                    <div class="item-details">
                        <h2>${item.name}</h2>
                        <p>Price: $${item.price.toFixed(2)}</p>
                        <p>Quantity: ${item.quantity}</p>
                    </div>
                    <button class="remove-item">Remove</button>
                `;

                // Add event listener to the "Remove" button
                const removeButton = itemElement.querySelector('.remove-item');
                removeButton.addEventListener('click', () => removeFromCart(item));

                cartContainer.appendChild(itemElement);

                // Update total
                total += item.price * item.quantity;
            });

            // Display the total price
            totalContainer.textContent = `Total: $${total.toFixed(2)}`;
        }

        // Function to remove an item from the cart
        function removeFromCart(itemToRemove) {
            const index = cartItems.indexOf(itemToRemove);
            if (index !== -1) {
                cartItems.splice(index, 1);
                renderCart(); // Update the cart display
            }
        }

        // Initial render
        renderCart();
    });
</script>

