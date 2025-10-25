export default function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class='about'>
        <h1 class='title'>About us</h1>
        <div class='text'>
            Welcome to The Fancy Restaurant.
            Nestled in the heart of culinary creativity, we believe that food is more than just nourishment — it’s an experience.
            Each dish we serve is a conversation between flavour, passion, and artistry, crafted with care and plated with love.
            From the comforting aroma of our pastas to the delicate sweetness of our desserts, every bite tells a story.
            Come, take a seat, and let us redefine what “fancy” truly means.
        </div>
    </div>
    `
}
