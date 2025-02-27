const menuItems = [
    {
        title: "Tofu Maki",
        description: "Savory grilled marinated tofu, refreshing cucumber, and rich avocado, wrapped in fluffy sushi rice and nori, topped with a trendy sriracha mayo.",
        moreInfo: "Ingredients: fish, soy, mayo",
        image: "images/makitofu.webp",
        price: 120
    },
    {
        title: "Asparagus Nigiri",
        description: "Tender, lightly grilled asparagus atop a bed of warm, seasoned sushi rice, elegantly topped with a dollop of caviar for a luxurious burst of flavor.",
        moreInfo: "Ingredients: asparagus, soy, mayo",
        image: "images/asparagusnigiri.webp",
        price: 125
    },
    {
        title: "Squid Nigiri",
        description: "Delicate slices of fresh squid atop warm, seasoned sushi rice, drizzled with creamy mayo and garnished with fresh chives for a delightful burst of flavor.",
        moreInfo: "Ingredients: fish, soy, mayo",
        image: "images/squidnigiri.webp",
        price: 140
    },
    {
        title: "Fried Tuna Maki",
        description: "Crispy fried tuna and creamy avocado, paired with zesty sriracha mayo, wrapped in seasoned sushi rice and nori, topped with a luxurious dollop of caviar for an exquisite finish.",
        moreInfo: "Ingredients: fish, soy, mayo",
        image: "images/friedmaki.webp",
        price: 130
    },
    {
        title: "Placeholder",
        description: "Delicate slices of fresh squid atop warm, seasoned sushi rice, drizzled with creamy mayo and garnished with fresh chives for a delightful burst of flavor.",
        moreInfo: "Ingredients: fish, soy, mayo",
        image: "images/squidnigiri.webp",
        price: 120
    },
    {
        title: "Placeholder",
        description: "Crispy fried tuna and creamy avocado, paired with zesty sriracha mayo, wrapped in seasoned sushi rice and nori, topped with a luxurious dollop of caviar for an exquisite finish.",
        moreInfo: "Ingredients: fish, soy, mayo",
        image: "images/friedmaki.webp",
        price: 120
    },
];

let cart = [];

let cartTotalPrice = 0;

function addToCart(event) {
    const index = event.target.getAttribute('data-index');
    const item = menuItems[index];
    cart.push(item);
    console.log('Cart:', cart); // For debugging purposes
    updateCartDisplay();
}

function clearCart(){
    cart = [];
    updateCartDisplay();
}

function updateCartDisplay() {
    cartTotalPrice = 0;

    const cartCounter =  document.getElementById('cart-counter');
    cartCounter.innerHTML = cart.length.toString();

    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <h4>${item.title} - ${item.price}:-</h4>
        `;
        cartContainer.appendChild(cartItemElement);
        cartTotalPrice += item.price;
    });

    const cartTotalPriceDisplay = document.getElementById('totalPrice');
    cartTotalPriceDisplay.innerHTML = cartTotalPrice;
}

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById('menu-container');

    const rowElement = document.createElement('div');
    rowElement.className = 'row';
    menuContainer.appendChild(rowElement);

    menuItems.forEach((item, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'col-12 col-md-6';
        cardElement.innerHTML = `
            <div class="card menu-item w-100">
                <h3>${item.title}</h3>
                <img src="${item.image}" alt="${item.title}" class="img-fluid" loading="lazy">
                <p>${item.description}</p>
                <h4>${item.price} NOK</h4>
                <spann>
                    <button class="btn btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target="#moreInfo${index}" aria-expanded="false" aria-controls="moreInfo${index}">
                        Read More
                    </button>
                    <button class="btn btn-secondary add-to-cart" data-index="${index}">Add to Cart</button>
                </spann>
                <div class="collapse" id="moreInfo${index}">
                    <p class="moreInfo">${item.moreInfo}</p>
                </div>
            </div>
        `;
        rowElement.appendChild(cardElement);

    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
