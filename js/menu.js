const menuItems = [
    {
        title: "Tofu Maki",
        description: "Savory grilled marinated tofu, refreshing cucumber, and rich avocado, wrapped in fluffy sushi rice and nori, topped with a trendy sriracha mayo.",
        image: "images/makitofu.webp"
    },
    {
        title: "Asparagus Nigiri",
        description: "Tender, lightly grilled asparagus atop a bed of warm, seasoned sushi rice, elegantly topped with a dollop of caviar for a luxurious burst of flavor.",
        image: "images/asparagusnigiri.webp"
    },
    {
        title: "Squid Nigiri",
        description: "Delicate slices of fresh squid atop warm, seasoned sushi rice, drizzled with creamy mayo and garnished with fresh chives for a delightful burst of flavor.",
        image: "images/squidnigiri.webp"
    },
    {
        title: "Fried Tuna Maki",
        description: "Crispy fried tuna and creamy avocado, paired with zesty sriracha mayo, wrapped in seasoned sushi rice and nori, topped with a luxurious dollop of caviar for an exquisite finish.",
        image: "images/friedmaki.webp"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById('menu-container');

    let rowElement = null;

    menuItems.forEach((item, index) => {
        if (index % 2 === 0) {
            rowElement = document.createElement('div');
            rowElement.className = 'row';
            menuContainer.appendChild(rowElement);
        }

        const cardElement = document.createElement('div');
        cardElement.className = 'col';
        cardElement.innerHTML = `
      <div class="card alt">
        <h3>${item.title}</h3>
        <img src="${item.image}" alt="${item.title}">
        <p>${item.description}</p>
      </div>
    `;
        rowElement.appendChild(cardElement);
    });

});
