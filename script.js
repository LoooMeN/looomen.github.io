window.addEventListener('DOMContentLoaded', () => {
    let accordions = document.querySelectorAll('.faq-item');

    accordions.forEach((acc) => {
        acc.addEventListener('click', () => {
            acc.classList.toggle('--open')
        })
    });
})