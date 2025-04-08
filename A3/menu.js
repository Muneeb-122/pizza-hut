// Menu data
const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 1499,
      image: "/A1/img/WhatsApp Image 2025-02-07 at 12.04.18 AM.jpeg",
      category: "vegetarian",
      description: "Classic pizza with tomato sauce and mozzarella"
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      price: 1699,
      image: "/A1/img/WhatsApp Image 2025-02-09 at 1.13.03 PM.jpeg",
      category: "non-vegetarian",
      description: "Spicy pepperoni with extra cheese"
    },
    {
      id: 3,
      name: "BBQ Chicken Pizza",
      price: 1799,
      image: "/A1/img/WhatsApp Image 2025-02-13 at 10.27.04 AM (1).jpeg",
      category: "non-vegetarian",
      description: "Grilled chicken with BBQ sauce"
    },
    {
      id: 4,
      name: "Veggie Supreme",
      price: 1599,
      image: "/A1/img/pizza-placeholder.jpg",
      category: "vegetarian",
      description: "Mixed vegetables with special sauce"
    },
    {
      id: 5,
      name: "Truffle Pizza",
      price: 1999,
      image: "/A1/img/pizza-placeholder.jpg",
      category: "specialty",
      description: "Gourmet pizza with truffle oil"
    }
  ];
  
  // Cart functionality
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // DOM Elements
  const menuContainer = document.getElementById('menu-items');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cartCount = document.getElementById('cart-count');
  
  // 1. Display Menu Items
  function displayMenuItems(items) {
    menuContainer.innerHTML = items.map(item => `
      <div class="menu-item border border-gray-200 rounded-lg overflow-hidden shadow-lg relative" data-category="${item.category}">
        <div class="price-tag">Rs. ${item.price}</div>
        <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
        <div class="p-4 text-center">
          <h3 class="text-xl font-semibold mb-2">${item.name}</h3>
          <p class="text-gray-600 text-sm mb-3">${item.description}</p>
          <button onclick="addToCart(${item.id})" 
            class="add-to-cart bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300 w-full">
            Add to Cart
          </button>
        </div>
      </div>
    `).join('');
  }
  
  // 2. Filter Menu Items
  function filterMenu(category) {
    if (category === 'all') {
      displayMenuItems(menuItems);
    } else {
      const filteredItems = menuItems.filter(item => item.category === category);
      displayMenuItems(filteredItems);
    }
  }
  
  // 3. Add to Cart Function
  function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    
    updateCart();
    showNotification(`${item.name} added to cart!`);
  }
  
  // 4. Update Cart Count
  function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
  
  // 5. Show Notification
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }
  
  // 6. Filter Button Event Listeners
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      filterMenu(button.dataset.category);
    });
  });
  
  // 7. Update Copyright Year
  function updateCopyrightYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
  }
  
  // Initialize
  function init() {
    displayMenuItems(menuItems);
    updateCart();
    updateCopyrightYear();
  }
  
  // Run when DOM is loaded
  document.addEventListener('DOMContentLoaded', init);