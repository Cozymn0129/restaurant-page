import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import loadContact from "./contact.js";
import "./styles.css";

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

// initial display
function initialisePage() {
    loadHome();

    document.getElementById('home-btn').addEventListener('click', () => {
        clearContent();
        loadHome();
    });

    document.getElementById('menu-btn').addEventListener('click', () => {
        clearContent();
        loadMenu();
    });

    document.getElementById('about-btn').addEventListener('click', () => {
        clearContent();
        loadAbout();
    });

    document.getElementById('contact-btn').addEventListener('click', () => {
        clearContent();
        loadContact();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initialisePage();
});
