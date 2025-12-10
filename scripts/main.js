// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadFooter();
});

function loadHeader() {
    fetch('head.html')
        .then(response => response.text())
        .then(html => {
            // 1. 載入 HTML
            document.getElementById('header').innerHTML = html;

            // 2. 載入完成後，立刻綁定手機版選單功能
            initMobileMenu();
        })
        .catch(error => console.error('Error loading header:', error));
}

function loadFooter() {
    fetch('foot.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// 手機版選單邏輯獨立成一個 function，比較乾淨
function initMobileMenu() {
    const menu = document.querySelector('#mobileMenu');
    const navMenu = document.querySelector('.navMenu');

    if (menu && navMenu) {
        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            navMenu.classList.toggle('active');
        });
    }
}