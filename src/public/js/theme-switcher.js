 "use strict";
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        console.log('Toggle button clicked');
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            console.log('Switched to light mode');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            console.log('Switched to dark mode');
        }
        console.log('Current classList:', htmlElement.classList);
    });
}

const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log('Stored theme:', storedTheme);
console.log('Prefers dark mode:', prefersDark);

if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    htmlElement.classList.add('dark');
    console.log('Initial theme set to dark mode');
} else {
    htmlElement.classList.remove('dark');
    console.log('Initial theme set to light mode');
}
