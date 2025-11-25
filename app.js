// Data
const PETS = [
    // Existing pets
    {
        id: 'p1',
        name: 'Bella',
        type: 'Dog',
        breed: 'Golden Retriever',
        age: '2 years',
        gender: 'Female',
        price: 150,
        image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
        description: 'Bella is a ray of sunshine. She loves playing fetch and is great with kids.'
    },
    {
        id: 'p2',
        name: 'Max',
        type: 'Dog',
        breed: 'Siberian Husky',
        age: '3 years',
        gender: 'Male',
        price: 200,
        image: 'https://images.unsplash.com/photo-1544568100-12612527cc8d?auto=format&fit=crop&w=600&q=80',
        description: 'Max is an energetic and friendly husky who loves long walks and snow.'
    },
    {
        id: 'p3',
        name: 'Luna',
        type: 'Cat',
        breed: 'Siamese',
        age: '1.5 years',
        gender: 'Female',
        price: 120,
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
        description: 'Luna is a graceful and affectionate Siamese cat who loves to cuddle.'
    },
    // New pets
    {
        id: 'p4',
        name: 'Charlie',
        type: 'Dog',
        breed: 'Beagle',
        age: '1 year',
        gender: 'Male',
        price: 180,
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80',
        description: 'Charlie is a playful beagle with a great sense of smell. He loves outdoor adventures and is great with families.'
    },
    {
        id: 'p5',
        name: 'Milo',
        type: 'Cat',
        breed: 'Maine Coon',
        age: '2.5 years',
        gender: 'Male',
        price: 220,
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
        description: 'Milo is a majestic Maine Coon with a gentle personality. He enjoys being around people and is very affectionate.'
    },
    {
        id: 'p6',
        name: 'Daisy',
        type: 'Dog',
        breed: 'Dachshund',
        age: '4 years',
        gender: 'Female',
        price: 170,
        image: 'https://images.unsplash.com/photo-1518020382112-a041986f8582?auto=format&fit=crop&w=600&q=80',
        description: 'Daisy is a sweet and loyal dachshund who loves to cuddle and go for short walks. She gets along well with other pets.'
    },
    {
        id: 'p7',
        name: 'Oliver',
        type: 'Cat',
        breed: 'British Shorthair',
        age: '1 year',
        gender: 'Male',
        price: 250,
        image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=600&q=80',
        description: 'Oliver is a charming British Shorthair with a plush coat. He has a calm demeanor and loves to play with feather toys.'
    },
    {
        id: 'p8',
        name: 'Lucy',
        type: 'Dog',
        breed: 'Poodle',
        age: '5 years',
        gender: 'Female',
        price: 210,
        image: 'https://images.unsplash.com/photo-1611003228941-98852ba62227?auto=format&fit=crop&w=600&q=80',
        description: 'Lucy is an intelligent poodle who is already trained in basic commands. She loves water and enjoys learning new tricks.'
    },
    {
        id: 'p9',
        name: 'Leo',
        type: 'Cat',
        breed: 'Ragdoll',
        age: '2 years',
        gender: 'Male',
        price: 230,
        image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80',
        description: 'Leo is a beautiful Ragdoll cat with striking blue eyes. He has a gentle nature and loves to be held and cuddled.'
    }
];

const PRODUCTS = [
    // Existing products
    {
        id: 'pd1',
        name: 'Premium Dog Food',
        type: 'Food',
        category: 'Dog',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1589927986086-c7a35e2d0f4d?auto=format&fit=crop&w=600&q=80',
        description: 'High-quality dog food with real meat and vegetables. 15lb bag.'
    },
    {
        id: 'pd2',
        name: 'Cat Litter Box',
        type: 'Accessory',
        category: 'Cat',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1605491379640-2efc8dc3778d?auto=format&fit=crop&w=600&q=80',
        description: 'Enclosed cat litter box with carbon filter to control odor.'
    },
    // New products - Food
    {
        id: 'pd3',
        name: 'Grain-Free Salmon Dry Food',
        type: 'Food',
        category: 'Dog',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1586277400033-8a1c1a7b5a7e?auto=format&fit=crop&w=600&q=80',
        description: 'Premium grain-free salmon recipe for adult dogs. 20lb bag.'
    },
    {
        id: 'pd4',
        name: 'Kitten Formula Wet Food',
        type: 'Food',
        category: 'Cat',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1628842763128-9a3c2c7a94c3?auto=format&fit=crop&w=600&q=80',
        description: 'Nutrient-rich wet food specially formulated for growing kittens. 24-pack.'
    },
    // New products - Collars
    {
        id: 'pd5',
        name: 'Leather Dog Collar',
        type: 'Collar',
        category: 'Dog',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1583511655826-057004d7f8a9?auto=format&fit=crop&w=600&q=80',
        description: 'Genuine leather dog collar with metal buckle. Available in multiple sizes.'
    },
    {
        id: 'pd6',
        name: 'Breakaway Cat Collar',
        type: 'Collar',
        category: 'Cat',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1533738365-bd6bc6394059?auto=format&fit=crop&w=600&q=80',
        description: 'Safe breakaway collar with bell. Adjustable and comfortable for all cat sizes.'
    },
    // Additional products
    {
        id: 'pd7',
        name: 'Dental Care Chew Sticks',
        type: 'Treat',
        category: 'Dog',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1594149929988-8a0e9c2e6a1c?auto=format&fit=crop&w=600&q=80',
        description: 'Dental chews that help clean teeth and freshen breath. 30 count.'
    },
    {
        id: 'pd8',
        name: 'Automatic Feeder',
        type: 'Accessory',
        category: 'Cat',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1600168072778-2a1a6d4e4b1f?auto=format&fit=crop&w=600&q=80',
        description: 'Programmable automatic pet feeder with portion control. Holds up to 4 meals.'
    },
    {
        id: 'pd9',
        name: 'Premium Cat Tree',
        type: 'Furniture',
        category: 'Cat',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1618477466127-c61bf33a0a0b?auto=format&fit=crop&w=600&q=80',
        description: 'Multi-level cat tree with scratching posts and cozy perches. 60" tall.'
    },
    {
        id: 'pd10',
        name: 'Dog Training Clicker',
        type: 'Training',
        category: 'Dog',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1583511655826-057004d7f8a9?auto=format&fit=crop&w=600&q=80',
        description: 'Professional dog training clicker with wrist strap. Great for positive reinforcement.'
    },
    {
        id: 'pd11',
        name: 'Self-Cleaning Litter Box',
        type: 'Accessory',
        category: 'Cat',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1605491379640-2efc8dc3778d?auto=format&fit=crop&w=600&q=80',
        description: 'Automatic self-cleaning litter box with odor control system. For cats up to 15 lbs.'
    },
    {
        id: 'pd12',
        name: 'Waterproof Dog Bed',
        type: 'Bedding',
        category: 'Dog',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1591768793355-74d04bb9908d?auto=format&fit=crop&w=600&q=80',
        description: 'Orthopedic waterproof dog bed with memory foam. Available in multiple sizes.'
    },
    {
        id: 'pd13',
        name: 'Catnip Toys Set',
        type: 'Toy',
        category: 'Cat',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1533738365-bd6bc6394059?auto=format&fit=crop&w=600&q=80',
        description: 'Set of 5 catnip-infused toys including mice, balls, and feather wands.'
    },
    {
        id: 'pd14',
        name: 'Retractable Dog Leash',
        type: 'Accessory',
        category: 'Dog',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1583511655826-057004d7f8a9?auto=format&fit=crop&w=600&q=80',
        description: '16ft retractable leash with ergonomic handle and one-touch brake system.'
    },
    {
        id: 'pd15',
        name: 'Automatic Water Fountain',
        type: 'Accessory',
        category: 'Cat',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1600168072778-2a1a6d4e4b1f?auto=format&fit=crop&w=600&q=80',
        description: 'Quiet 2L water fountain with 3 flow modes and replaceable filter.'
    },
    {
        id: 'pd16',
        name: 'Dog Raincoat',
        type: 'Clothing',
        category: 'Dog',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1591768793355-74d04bb9908d?auto=format&fit=crop&w=600&q=80',
        description: 'Waterproof dog raincoat with reflective strips. Available in multiple sizes and colors.'
    },
    {
        id: 'pd17',
        name: 'Window Cat Perch',
        type: 'Furniture',
        category: 'Cat',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1618477466127-c61bf33a0a0b?auto=format&fit=crop&w=600&q=80',
        description: 'Suction cup window perch with soft cushion. Holds up to 50 lbs.'
    },
    {
        id: 'pd18',
        name: 'Dog Life Jacket',
        type: 'Accessory',
        category: 'Dog',
        price: 44.99,
        image: 'https://images.unsplash.com/photo-1583511655826-057004d7f8a9?auto=format&fit=crop&w=600&q=80',
        description: 'Buoyancy aid dog life jacket with handle. Perfect for swimming and boating.'
    },
    {
        id: 'pd19',
        name: 'Automatic Laser Toy',
        type: 'Toy',
        category: 'Cat',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1533738365-bd6bc6394059?auto=format&fit=crop&w=600&q=80',
        description: 'Automatic laser pointer with multiple play modes. Keeps cats active when you\'re away.'
    },
    {
        id: 'pd20',
        name: 'Dog Car Seat Cover',
        type: 'Accessory',
        category: 'Dog',
        price: 54.99,
        image: 'https://images.unsplash.com/photo-1591768793355-74d04bb9908d?auto=format&fit=crop&w=600&q=80',
        description: 'Waterproof and scratch-proof car seat cover with seat belt openings.'
    },
    {
        id: 'pd21',
        name: 'Cat Scratching Post',
        type: 'Furniture',
        category: 'Cat',
        price: 29.99,
        image: 'https://images.unsplash.com/1618477466127-c61bf33a0a0b?auto=format&fit=crop&w=600&q=80',
        description: '32" tall scratching post with sisal rope and hanging toy. Helps protect furniture.'
    },
    {
        id: 'pd22',
        name: 'Dog GPS Tracker',
        type: 'Accessory',
        category: 'Dog',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1583511655826-057004d7f8a9?auto=format&fit=crop&w=600&q=80',
        description: 'Real-time GPS tracker with activity monitoring and geofencing. Waterproof design.'
    }
];

// State
let cart = [];
let currentPetFilter = 'All';
let currentShopFilter = 'All';
let currentDetailItem = null;

// DOM Elements
const cartItemsEl = document.getElementById('cart-items');
const cartEmptyMessageEl = document.getElementById('cart-empty-message');
const cartContentEl = document.getElementById('cart-content');
const cartCountEl = document.getElementById('cart-count');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTotalEl = document.getElementById('cart-total');

// Initialize the app
function init() {
    renderPets();
    renderShop();
    renderCart();
    navigate('home');
}

// Navigation
function navigate(pageId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(el => {
        el.classList.add('hidden-section');
    });
    
    // Show target section
    const target = document.getElementById(pageId);
    if (target) target.classList.remove('hidden-section');

    // Update active nav state (Desktop)
    document.querySelectorAll('#desktop-menu button').forEach(btn => {
        if (btn.getAttribute('data-target') === pageId) {
            btn.classList.add('text-orange-600', 'border-b-2', 'border-orange-500');
            btn.classList.remove('text-gray-600');
        } else {
            btn.classList.remove('text-orange-600', 'border-b-2', 'border-orange-500');
            btn.classList.add('text-gray-600');
        }
    });
    
    // Mobile Nav
    document.querySelectorAll('.nav-mobile-link').forEach(btn => {
        if(btn.getAttribute('data-target') === pageId) {
            btn.classList.add('text-orange-600');
            btn.classList.remove('text-gray-500');
        } else {
            btn.classList.remove('text-orange-600');
            btn.classList.add('text-gray-500');
        }
    });

    window.scrollTo(0,0);
}

// Pet functions
function filterPets(type) {
    currentPetFilter = type;
    renderPets();
}

function renderPets() {
    const container = document.getElementById('pets-grid');
    if (!container) return;

    const filteredPets = currentPetFilter === 'All' 
        ? PETS 
        : PETS.filter(pet => pet.type === currentPetFilter);

    container.innerHTML = filteredPets.map(pet => `
        <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gray-100 relative">
                <img src="${pet.image}" alt="${pet.name}" class="w-full h-full object-cover">
                <span class="absolute top-3 right-3 bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-1 rounded-full">
                    $${pet.price}
                </span>
            </div>
            <div class="p-5">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">${pet.name}</h3>
                        <p class="text-gray-600">${pet.breed} • ${pet.gender} • ${pet.age}</p>
                    </div>
                </div>
                <p class="mt-3 text-gray-600 text-sm line-clamp-2">${pet.description}</p>
                <button onclick="window.app.openDetails('pet', '${pet.id}')" class="mt-4 w-full bg-orange-100 hover:bg-orange-200 text-orange-700 py-2 rounded-lg font-medium transition-colors">
                    View Details
                </button>
            </div>
        </div>
    `).join('');
}

// Shop functions
function filterShop(category) {
    currentShopFilter = category;
    renderShop();
}

function renderShop() {
    const container = document.getElementById('shop-grid');
    if (!container) return;

    const filteredProducts = currentShopFilter === 'All' 
        ? PRODUCTS 
        : PRODUCTS.filter(product => {
            if (currentShopFilter === 'Food') {
                return product.type === 'Food' || product.type === 'Treat';
            } else if (currentShopFilter === 'Collar') {
                return product.type === 'Collar' || product.type === 'Accessory';
            } else if (currentShopFilter === 'Accessory') {
                return product.type === 'Accessory' || product.type === 'Collar';
            } else if (currentShopFilter === 'Toy') {
                return product.type === 'Toy';
            }
            return product.category === currentShopFilter || product.type === currentShopFilter;
        });

    container.innerHTML = filteredProducts.map(product => `
        <div class="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
            <div class="h-48 bg-gray-100 relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                <div class="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-800">
                    ${product.category}
                </div>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="font-bold text-gray-900">${product.name}</h3>
                        <p class="text-sm text-gray-500">${product.type} • ${product.category}</p>
                    </div>
                    <span class="font-bold text-orange-600">$${product.price.toFixed(2)}</span>
                </div>
                <p class="text-gray-600 text-sm mt-2 line-clamp-2">${product.description}</p>
                <button onclick="window.app.addToCart('product', '${product.id}')" class="mt-4 w-full bg-orange-100 text-orange-700 py-2 rounded-lg font-medium hover:bg-orange-200 transition-colors">  Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Cart functions
function addToCart(type, id) {
    const item = type === 'pet' 
        ? PETS.find(p => p.id === id)
        : PRODUCTS.find(p => p.id === id);
    
    if (!item) return;

    // Check if item already exists in cart (matching both type and id)
    const existingItemIndex = cart.findIndex(i => i.id === id && i.type === type);
    
    if (existingItemIndex !== -1) {
        // Item exists, increment quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // Item doesn't exist, add new item to cart
        cart.push({
            ...item,
            type,
            quantity: 1,
            cartId: `${type}-${id}-${Date.now()}`
        });
    }

    // Show success notification
    showNotification(`${item.name} added to cart!`);
    
    // Update UI
    renderCart();
    updateCartCount();
    updateCartTotal();
}

// Show notification function
function showNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 opacity-0 translate-y-4';
        document.body.appendChild(notification);
    }
    
    // Set message and show
    notification.textContent = message;
    notification.classList.remove('opacity-0', 'translate-y-4');
    notification.classList.add('opacity-100', 'translate-y-0');
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('opacity-100', 'translate-y-0');
        notification.classList.add('opacity-0', 'translate-y-4');
    }, 3000);
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    renderCart();
    updateCartCount();
}

function renderCart() {
    if (!cartItemsEl || !cartEmptyMessageEl || !cartContentEl) return;

    if (cart.length === 0) {
        cartEmptyMessageEl.classList.remove('hidden');
        cartContentEl.classList.add('hidden');
        return;
    }

    cartEmptyMessageEl.classList.add('hidden');
    cartContentEl.classList.remove('hidden');

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in">
            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
            <div class="ml-4 flex-1">
                <h3 class="font-bold text-gray-900">${item.name}</h3>
                <p class="text-sm text-gray-500">${item.type === 'pet' ? 'Adoption' : item.category}</p>
                <div class="mt-2 flex items-center">
                    <button onclick="window.app.updateQuantity('${item.cartId}', -1)" class="text-gray-500 hover:text-orange-600 w-6 h-6 rounded-full flex items-center justify-center border border-gray-300">-</button>
                    <span class="mx-2 w-8 text-center">${item.quantity}</span>
                    <button onclick="window.app.updateQuantity('${item.cartId}', 1)" class="text-gray-500 hover:text-orange-600 w-6 h-6 rounded-full flex items-center justify-center border border-gray-300">+</button>
                </div>
            </div>
            <div class="text-right">
                <div class="font-bold text-gray-900">$${item.price * item.quantity}</div>
                <button onclick="window.app.removeFromCart('${item.cartId}')" class="mt-1 text-xs text-red-500 hover:text-red-700">Remove</button>
            </div>
        </div>
    `).join('');

    updateCartTotal();
}

function updateQuantity(cartId, change) {
    const item = cart.find(i => i.cartId === cartId);
    if (!item) return;

    item.quantity = Math.max(0, item.quantity + change);

    if (item.quantity <= 0) {
        removeFromCart(cartId);
    } else {
        renderCart();
        updateCartCount();
        updateCartTotal();
    }
}

function updateCartTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal; // Add tax/shipping if needed
    
    if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (cartTotalEl) cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

function updateCartCount() {
    if (!cartCountEl) return;
    
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (count > 0) {
        cartCountEl.textContent = count;
        cartCountEl.classList.remove('hidden');
    } else {
        cartCountEl.classList.add('hidden');
    }
}

// Modal functions
function openRescueModal() {
    const modal = document.getElementById('rescue-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
}

// Handle rescue form submission
function handleRescueFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const location = document.getElementById('location').value;
    const animalType = document.getElementById('animal-type').value;
    const description = document.getElementById('description').value;
    const contact = document.getElementById('contact').value;
    
    // Here you would typically send this data to a server
    console.log('Rescue Report Submitted:', { location, animalType, description, contact });
    
    // Show success message
    showNotification('Your report has been submitted. Our team will respond shortly.');
    
    // Close the modal
    closeModal('rescue-modal');
    
    // Reset the form
    document.getElementById('rescue-form').reset();
}

function openDetails(type, id) {
    const item = type === 'pet' 
        ? PETS.find(p => p.id === id)
        : PRODUCTS.find(p => p.id === id);
    
    if (!item) return;

    currentDetailItem = { ...item, type };
    
    const modal = document.getElementById('details-modal');
    if (!modal) return;

    // Set modal content
    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-img').alt = item.name;
    document.getElementById('modal-subtitle').textContent = type === 'pet' 
        ? `${item.breed} • ${item.gender} • ${item.age}`
        : item.brand;
    document.getElementById('modal-desc').textContent = item.description;
    document.getElementById('modal-price').textContent = `$${item.price}`;

    const metaEl = document.getElementById('modal-meta');
    const actionBtn = document.getElementById('modal-action-btn');
    
    if (type === 'pet') {
        if (metaEl) {
            metaEl.classList.remove('hidden');
            metaEl.innerHTML = `
                <div><span class="text-gray-500">Breed</span><div class="font-medium">${item.breed}</div></div>
                <div><span class="text-gray-500">Age</span><div class="font-medium">${item.age}</div></div>
                <div><span class="text-gray-500">Gender</span><div class="font-medium">${item.gender}</div></div>
                <div><span class="text-gray-500">Type</span><div class="font-medium">${item.type}</div></div>
            `;
        }
        if (actionBtn) {
            actionBtn.textContent = 'Adopt Me';
            actionBtn.onclick = () => {
                addToCart('pet', item.id);
                closeModal('details-modal');
            };
        }
    } else {
        if (metaEl) metaEl.classList.add('hidden');
        if (actionBtn) {
            actionBtn.textContent = 'Add to Cart';
            actionBtn.onclick = () => {
                addToCart('product', item.id);
                closeModal('details-modal');
            };
        }
    }

    // Show modal
    modal.classList.remove('hidden');
}

function openCheckout() {
    if (cart.length === 0) return;
    const modal = document.getElementById('payment-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
}

function processPayment(e) {
    if (e) e.preventDefault();
    
    const form = document.getElementById('payment-form');
    const success = document.getElementById('payment-success');
    const btn = document.getElementById('pay-btn');
    
    if (!form || !success || !btn) return;
    
    const originalText = btn.innerText;
    btn.disabled = true;
    btn.innerText = 'Processing...';
    
    // Simulate API call
    setTimeout(() => {
        btn.disabled = false;
        btn.innerText = originalText;
        
        // Show success
        form.classList.add('hidden');
        success.classList.remove('hidden');
        
        // Clear cart
        cart = [];
        renderCart();
        updateCartCount();
    }, 2000);
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for the rescue form
    const rescueForm = document.getElementById('rescue-form');
    if (rescueForm) {
        rescueForm.addEventListener('submit', handleRescueFormSubmit);
    }

    // Expose app functions to the window object
    window.app = {
        navigate,
        filterPets,
        filterShop,
        addToCart,
        removeFromCart,
        navigate,
        openDetails,
        openCheckout,
        openRescueModal,
        closeModal,
        processPayment
    };

    // Initialize the app
    init();
});