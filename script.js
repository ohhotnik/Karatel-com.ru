document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const downloadBtn = document.getElementById('download-btn');
    const toast = document.getElementById('toast');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target) && navMenu.classList.contains('active')) {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    downloadBtn.addEventListener('click', () => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    });
});
