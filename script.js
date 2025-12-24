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
            e.preventDefault(); // Stop default jump so we can control it

            const blogSection = document.getElementById('blog');
            const blogHeader = blogSection.querySelector('h2');

            // Smooth scroll to the section
            blogSection.scrollIntoView({ behavior: 'smooth' });

            // Re-trigger animation
            // 1. Remove class if it exists to reset
            blogHeader.classList.remove('highlight-active');

            // 2. Force a reflow (browser paint/layout update)
            void blogHeader.offsetWidth;

            // 3. Add class back to start animation
            blogHeader.classList.add('highlight-active');

            // Optional: Remove class after animation ends to keep DOM clean
            blogHeader.addEventListener('animationend', () => {
                blogHeader.classList.remove('highlight-active');
            }, { once: true });
        });
    }
});
