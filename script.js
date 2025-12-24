function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const button = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-mode')) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}

// Handle Blog Link Animation Reset
document.addEventListener("DOMContentLoaded", function () {
    const blogLink = document.querySelector('a[href="#blog"]');
    if (blogLink) {
        blogLink.addEventListener('click', function (e) {
            e.preventDefault();

            const blogSection = document.getElementById('blog');
            const blogHeader = blogSection.querySelector('h2');

            blogSection.scrollIntoView({ behavior: 'smooth' });

            blogHeader.classList.remove('highlight-active');

            void blogHeader.offsetWidth;

            blogHeader.classList.add('highlight-active');

            blogHeader.addEventListener('animationend', () => {
                blogHeader.classList.remove('highlight-active');
            }, { once: true });
        });
    }
});
