function toggleSidebar() {
    const sidebar = document.getElementById('toc');
    const overlay = document.getElementById('toc-overlay');
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
}
