window.addEventListener('DOMContentLoaded', () => {
    let accordions = document.querySelectorAll('.faq-item');
    let burger = document.querySelector('#burger');
    let header = document.querySelector('.header')

    accordions.forEach((acc) => {
        acc.addEventListener('click', () => {
            acc.classList.toggle('--open');
        })
    });

    burger.addEventListener('click', () => {
        header.classList.toggle('--open');
    })
})