import restaurantImage from '../img/restaurant.png';

export default function loadHome() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const headline = document.createElement('h1');
    headline.textContent = 'Made with perfection and precision.';

    const image = document.createElement('img');
    image.classList.add('home-image');
    image.src = restaurantImage;
    image.alt = 'Delicious restaurant image';

    homeDiv.appendChild(headline);
    homeDiv.appendChild(image);

    content.appendChild(homeDiv);
}
