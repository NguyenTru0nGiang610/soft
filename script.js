const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeToggle.innerText = '🌙';
    } else {
        themeToggle.innerText = '☀️';
    }
});

const loginBtn = document.getElementById('login-btn');
const modal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

const searchInput = document.getElementById('movie-search');
const allPosters = document.querySelectorAll('.poster');

searchInput.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    allPosters.forEach((poster) => {
        const title = poster.getAttribute('alt').toLowerCase();

        if (title.includes(searchString)) {
            poster.style.display = 'block';
            poster.style.transform = 'scale(1.1)';
        } else {
            poster.style.display = 'none';
        }
    });
});