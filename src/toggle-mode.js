let buttonToggle = document.querySelector('#toggle-mode')

buttonToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light')
})