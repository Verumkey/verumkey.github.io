function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById("sidebar-overlay");
    sidebar.classList.toggle('show');
    overlay.classList.toggle("show");

    // ����С��Ļʱ��ֹ����
    if (window.innerWidth <= 768) {
        document.body.classList.toggle("no-scroll");
    }
}

const overlay = document.getElementById('sidebar-overlay');
overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
        toggleSidebar();
    }
});

const sidebar = document.querySelector('.sidebar');
sidebar.addEventListener('click', function (event) {
    event.stopPropagation();
});