const btnMobile = document.querySelector('#btn-mobile')

btnMobile.addEventListener('click', () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    btnMobile.setAttribute("aria-expanded", active)

    if (active) {
        btnMobile.setAttribute("aria-label", 'Fechar Menu')
    } else [
        btnMobile.setAttribute("aria-label", 'Abrir Menu')
    ]
})