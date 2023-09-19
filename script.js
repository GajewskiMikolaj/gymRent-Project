const toggleBtn = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("menu")[0]

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})