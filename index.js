let cart = JSON.parse(localStorage.getItem('cart') || '[]');
const books = (window && window.booksData) ? window.booksData : [];

function showSkeletonLoader(grid, count = 6) {
    grid.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'product-card skeleton';
        skeleton.innerHTML = `
            <div class="skeleton-img"></div>
            <div class="skeleton-info">
                <div class="skeleton-line skeleton-title"></div>
                <div class="skeleton-line skeleton-text"></div>
                <div class="skeleton-line skeleton-price"></div>
                <div class="skeleton-line skeleton-button"></div>
            </div>
        `;
        grid.appendChild(skeleton);
    }
}

function renderProducts(list) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    // Show skeleton loader while rendering
    showSkeletonLoader(grid, list.length || 6);
    
    // Use requestAnimationFrame to ensure smooth rendering
    requestAnimationFrame(() => {
        grid.innerHTML = '';
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        list.forEach((b) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            const isFavorite = favorites.includes(b.id);
            card.innerHTML = `
                <div class="product-img">${b.emoji}</div>
                <div class="product-info">
                    <div class="product-header">
                        <h3>${b.title}</h3>
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${b.id})" title="Add to favorites">❤️</button>
                    </div>
                    <p>${b.author} • ${b.genre}</p>
                    <div class="price">${b.price} ₺</div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
            card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(b.title));
            grid.appendChild(card);
        });
    });
}

        function addToCart(productName) {
            cart.push(productName);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showNotification(`${productName} added to cart!`, 'success');
        }

        function removeFromCart(productName) {
            const index = cart.indexOf(productName);
            if (index > -1) {
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                showNotification(`${productName} removed from cart!`, 'error');
            }
        }

function updateCartCount() {
    const cartCountNav = document.getElementById('cartCountNav');
    if (cartCountNav) {
        cartCountNav.textContent = cart.length;
        cartCountNav.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}

        function showCart() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
            } else {
                alert('In your cart:\n' + cart.join('\n'));
            }
        }

        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.textContent = message;
            const bgColor = type === 'error' ? '#EF4444' : '#10b981';
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: ${bgColor};
                color: white;
                padding: 1rem 2rem;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                z-index: 1000;
                animation: slideIn 0.3s ease-out;
            `;
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease-in';
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

window.toggleFavorite = function(bookId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.indexOf(bookId);
    const btn = event.target.closest('.favorite-btn');
    
    if (index > -1) {
        favorites.splice(index, 1);
        if (btn) btn.classList.remove('active');
        showNotification('Removed from favorites');
    } else {
        favorites.push(bookId);
        if (btn) btn.classList.add('active');
        showNotification('Added to favorites');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
}

function updateFavoritesCount() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const countEl = document.getElementById('favoritesCount');
    if (countEl) {
        countEl.textContent = favorites.length;
        countEl.style.display = favorites.length > 0 ? 'flex' : 'none';
    }
}

function showFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.length === 0) {
        alert('Your favorites list is empty!');
    } else {
        alert(`You have ${favorites.length} favorite book(s)!`);
    }
}

function showProfile() {
    alert('Profile page coming soon!');
}

window.filterByCategory = function(category) {
    const filtered = books.filter(b => b.genre === category);
    renderProducts(filtered);
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth' });
};

function renderFeaturedSection(gridId, bookList) {
    const grid = document.getElementById(gridId);
    if (!grid || !bookList || bookList.length === 0) return;
    
    // Show skeleton loader
    showSkeletonLoader(grid, bookList.length);
    
    requestAnimationFrame(() => {
        grid.innerHTML = '';
        bookList.forEach((b) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            const isFavorite = favorites.includes(b.id);
            card.innerHTML = `
                <div class="product-img">${b.emoji}</div>
                <div class="product-info">
                    <div class="product-header">
                        <h3>${b.title}</h3>
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${b.id})" title="Add to favorites">❤️</button>
                    </div>
                    <p>${b.author} • ${b.genre}</p>
                    <div class="price">${b.price} ₺</div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
            card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(b.title));
            grid.appendChild(card);
        });
    });
}

// Hero Carousel
let currentSlideIndex = 0;
let carouselInterval = null;

window.currentSlide = function(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    // Reset auto-slide timer
    if (carouselInterval) {
        clearInterval(carouselInterval);
        startCarousel();
    }
};

function showSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Auto-slide carousel
function startCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
    carouselInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateFavoritesCount();
    renderProducts(books);
    
    // Initialize carousel
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        showSlide(0);
        startCarousel();
    }
    
    // Render featured sections
    renderFeaturedSection('newReleasesGrid', books.slice(0, 4));
    renderFeaturedSection('bestsellersGrid', books.slice(0, 4));
    renderFeaturedSection('editorsChoiceGrid', books.slice(2, 6));
    renderFeaturedSection('onSaleGrid', books.filter(b => b.price < 150));
    
    // Update favorite button states for hardcoded cards
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.forEach(id => {
        const btn = document.querySelector(`.favorite-btn[onclick*="${id}"]`);
        if (btn) btn.classList.add('active');
    });
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase();
            const filtered = books.filter(b =>
                b.title.toLowerCase().includes(q) ||
                b.author.toLowerCase().includes(q) ||
                b.genre.toLowerCase().includes(q)
            );
            renderProducts(filtered);
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Add event listeners for nav icons
    const favoritesBtn = document.getElementById('favoritesBtn');
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showFavorites();
        });
    }
    
    const profileBtn = document.getElementById('profileBtn');
    if (profileBtn) {
        profileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showProfile();
        });
    }
});