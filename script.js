

const toggle = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav-links");


toggle.addEventListener("click", function () {

    nav.classList.toggle("show");

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("show");

    });

});



/* =========================================
   FOOD MENU FILTER
========================================= */

const tabs = document.querySelectorAll(".tab");

const items = document.querySelectorAll(".menu-item");


function filterMenu(category) {

    items.forEach(function (item) {

        if (item.dataset.category === category) {

            item.style.display = "grid";

        } else {

            item.style.display = "none";

        }

    });

}


/* Show Breakfast by default */

filterMenu("breakfast");


/* Tab click */

tabs.forEach(function (tab) {

    tab.addEventListener("click", function () {


        /* Remove active from all tabs */

        tabs.forEach(function (item) {

            item.classList.remove("active");

        });


        /* Add active to clicked tab */

        tab.classList.add("active");


        /* Filter menu */

        filterMenu(tab.dataset.category);

    });

});



/* =========================================
   RESERVATION FORM
========================================= */

const form = document.getElementById("bookingForm");

const message = document.getElementById("formMessage");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    message.textContent =
        "Thank you! Your table request has been received.";


    form.reset();

});



/* =========================================
   TESTIMONIAL DOTS
========================================= */

const quotes = document.querySelectorAll(".quote");

const dots = document.querySelectorAll(".dot");


dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {


        /* Remove active */

        quotes.forEach(function (quote) {

            quote.classList.remove("active");

        });


        dots.forEach(function (item) {

            item.classList.remove("active");

        });


        /* Activate selected */

        quotes[index].classList.add("active");

        dot.classList.add("active");

    });

});