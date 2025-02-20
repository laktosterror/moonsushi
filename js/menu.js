const menuItems = [
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
    // Add more menu items as needed
];

function getRandomInList(list){
    return Math.floor(Math.random() * list.length);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Site Loaded");

    document.getElementById("myButton").onclick = function () {
    }
})