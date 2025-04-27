// Cart data store
let cart = [];

// Function to add products to cart
const addToCart = (productName, productPrice) => {
  // Creating product object
  const product = {
    name: productName,
    price: productPrice
  };

  // Pushing product to cart array
  cart.push(product);

  // Showing success alert
  alert(`${productName} added to cart!`);

  // Updating cart display
  updateCart();
}

// Function to update cart display
const updateCart = () => {
  const cartItems = document.getElementById('cart-items');
  const total = document.getElementById('total');

  // Clear old cart
  cartItems.innerHTML = '123';

  let totalPrice = 0;

  // Loop through cart array and show items
  cart.forEach((product) => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    cartItems.appendChild(li);

    totalPrice += product.price;
  });

  // Update total price
  total.textContent = `Total: $${totalPrice}`;
}
updateCart();