window.addEventListener('DOMContentLoaded', () => {
    let accordions = document.querySelectorAll('.faq-question');
    let burger = document.querySelector('#burger');
    let header = document.querySelector('.header-wrapper');
    let mobileMenu = document.querySelector('.mobile-menu');
    let mobileLinks = mobileMenu.querySelectorAll('.nav-link');
    let mobileCTA = mobileMenu.querySelector('.cta-header-button');

    accordions.forEach((acc) => {
        acc.addEventListener('click', () => {
            acc.parentElement.classList.toggle('--open');
        })
    });

    function toggleFullscreenMenu() {
        if (!header.classList.contains('--open')) {
            mobileMenu.style.display = "block";
            setTimeout(() => {
                header.classList.toggle('--open');
            }, 0)
        } else {
            header.classList.toggle('--open');
            setTimeout(() => {
                mobileMenu.style.display = "none";
            }, 300)
        }
    }

    mobileLinks.forEach((link) => {link.addEventListener('click', toggleFullscreenMenu)});
    mobileCTA.addEventListener('click', toggleFullscreenMenu);

    burger.addEventListener('click', toggleFullscreenMenu);
})