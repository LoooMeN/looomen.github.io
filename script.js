window.addEventListener('DOMContentLoaded', () => {
    let accordions = document.querySelectorAll('.faq-item');
    let burger = document.querySelector('#burger');
    let header = document.querySelector('.header-wrapper')
    let mobileMenu = document.querySelector('.mobile-menu');

    accordions.forEach((acc) => {
        acc.addEventListener('click', () => {
            acc.classList.toggle('--open');
        })
    });

    burger.addEventListener('click', () => {
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
    })
})