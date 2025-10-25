export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class='contact'>
        <h1 class='contact-title'>Contact Us!</h1>
        <div class='contact-info'>
            📍 123 London Road, Code City<br>
            📞 +44 123 456 789<br>
            ✉️ hello@thisrestaurant.com
        </div>
    </div>
    `
}
