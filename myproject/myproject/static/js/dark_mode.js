document.addEventListener('DOMContentLoaded', _ => {
    const themeToggle = document.getElementById('theme-toggle');
    const darkModeClass = 'dark-mode';

    // Load saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add(darkModeClass);
    }

    themeToggle.addEventListener('click', _ => {
        document.body.classList.toggle(darkModeClass);
        // Save user preference in localStorage
        if (document.body.classList.contains(darkModeClass)) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
