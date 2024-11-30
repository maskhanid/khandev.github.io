// sidebar.js
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function initSidebar() {
    const toggleButton = document.getElementById('sidebarToggleButton');
    toggleButton.addEventListener('click', toggleSidebar);
}