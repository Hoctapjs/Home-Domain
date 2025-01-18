document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle menu khi nhấn vào hamburger menu
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Đảm bảo menu hiển thị ở kích thước lớn
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = '';
        }
    });
});
