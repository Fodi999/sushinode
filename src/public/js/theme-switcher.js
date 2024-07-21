 //js/theme-switcher.js
"use strict";
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('bx-moon', 'bx-sun');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('bx-sun', 'bx-moon');
        }
    });
}

const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    htmlElement.classList.add('dark');
    themeIcon.classList.replace('bx-sun', 'bx-moon');
} else {
    htmlElement.classList.remove('dark');
    themeIcon.classList.replace('bx-moon', 'bx-sun');
}

