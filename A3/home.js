// 1. Update Copyright Year Automatically
function updateCopyrightYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// 2. Cart Counter Functionality
function updateCartCount() {
    // This would normally come from your cart system
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cart-count').textContent = cartCount;
}

// 3. Show Special Offers Banner
function showSpecialOffer() {
    if (!localStorage.getItem('offerClosed')) {
        document.getElementById('special-offers').classList.remove('hidden');
    }
}

// 4. Close Special Offer
function closeOffer() {
    document.getElementById('special-offers').classList.add('hidden');
    localStorage.setItem('offerClosed', 'true');
}

// 5. Animate Hero Section on Load
function animateHero() {
    const hero = document.getElementById('hero-section');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        hero.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);
}

// 6. Rotating Hero Text
const heroTexts = [
    { title: "WELCOME TO PIZZA HUT", subtitle: "Order your favorite pizza online!" },
    { title: "HUNGRY?", subtitle: "We've got the perfect pizza for you!" },
    { title: "DELICIOUS PIZZAS", subtitle: "Made with love and fresh ingredients" }
];

let currentHeroIndex = 0;

function rotateHeroText() {
    currentHeroIndex = (currentHeroIndex + 1) % heroTexts.length;
    document.getElementById('hero-title').textContent = heroTexts[currentHeroIndex].title;
    document.getElementById('hero-subtitle').textContent = heroTexts[currentHeroIndex].subtitle;
}

// 7. Track Button Clicks
function setupButtonTracking() {
    document.getElementById('cta-button').addEventListener('click', function() {
        console.log('Menu button clicked');
        // Add analytics tracking here
    });
}

// 8. Responsive Background Image
function adjustHeroHeight() {
    const hero = document.getElementById('hero-section');
    hero.style.height = `${window.innerHeight * 0.8}px`;
}

// 9. Initialize all functions
function init() {
    updateCopyrightYear();
    updateCartCount();
    showSpecialOffer();
    animateHero();
    setupButtonTracking();
    adjustHeroHeight();
    
    // Rotate hero text every 5 seconds
    setInterval(rotateHeroText, 5000);
    
    // Adjust height on resize
    window.addEventListener('resize', adjustHeroHeight);
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', init);