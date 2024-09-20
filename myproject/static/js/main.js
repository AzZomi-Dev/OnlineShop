let btn = document.getElementById('PostPro');
let FormCon = document.getElementById('FormCon');
let CancelX = document.getElementById('CancelX');

btn.addEventListener('click', function () {
    FormCon.style.cssText = 'display: block;';
    btn.style.cssText = 'display: none;';
})
CancelX.addEventListener('click', function () {
    FormCon.style.cssText = 'display: none';
    btn.style.cssText = 'display: inline-block;';

})

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
