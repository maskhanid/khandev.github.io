// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi komponen-komponen
    initNavbar();
    initSidebar();
    initSlideshow();
    updateStats();
});

function updateStats() {
    // Simulasi update statistik (ganti dengan data sebenarnya)
    document.getElementById('total-hits').textContent = Math.floor(Math.random() * 10000);
    document.getElementById('hits-today').textContent = Math.floor(Math.random() * 1000);
}