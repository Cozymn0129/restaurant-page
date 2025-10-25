import carbonaraImage from '../img/carbonara.png';
import fishAndChipsImage from '../img/fish_and_chips.png';
import curryImage from '../img/curry.png';
import cheeseCakeImage from '../img/cheesecake.png';


export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class='menu'>
        <h1 class='title'>Take a look at our fine options!</h1>
        <div class='items'>
            <div class='menu-item carbonara'>
                <img src=${carbonaraImage} class='food carbonara-image'>
                <div class='menu-detail'>
                    <h1 class='menu-title'>Carbonara</h1>
                    <div class='menu-description'>This carbonara is made by an top-notch Italian chef</div>
                </div>
            </div>
            <div class='menu-item fish_and_chips'>
                <img src=${fishAndChipsImage} class='food fish_and_chips-image'>
                <div class='menu-detail'>
                    <h1 class='menu-title'>Fish and Chips</h1>
                    <div class='menu-description'>This fish and chips is made by a top-notch British chef</div>
                </div>
            </div>
            <div class='menu-item curry'>
                <img src=${curryImage} class='food curry-image'>
                <div class='menu-detail'>
                    <h1 class='menu-title'>Curry</h1>
                    <div class='menu-description'>This curry is made by a top-notch Indian chef</div>
                </div>
            </div>
            <div class='menu-item cheesecake'>
                <img src=${cheeseCakeImage} class='food cheesecake-image'>
                <div class='menu-detail'>
                    <h1 class='menu-title'>Cheesecake</h1>
                    <div class='menu-description'>This cheesecake is made by a top-notch French chef</div>
                </div>
            </div>
        </div>
    </div>
    `
}
