const dropDownMenu = document.querySelector('.drop-down-menu')
const navSearchLink = document.querySelector('.nav-search')
const closeButtonMobileNav = document.querySelector('.close-button')
const BarsButtonMobileNav = document.querySelector('.navbar-toggler')

const handleDropDownMenu = () => {
	dropDownMenu.classList.toggle('drop-down-menu-active')
	navSearchLink.classList.toggle('nav-search-color-change')
}

// handling icon change when clicking search button in desktop view
const checkIfMarkIsVisible = () => {
	if (navSearchLink.classList.contains('nav-search-color-change')) {
		navSearchLink.innerHTML = 'Szukaj <i class="fa-solid fa-x"></i>'
	}
}

const backOfSearchIcon = () => {
	if (dropDownMenu.classList.contains('drop-down-menu')) {
		navSearchLink.innerHTML = 'Szukaj <i class="fa-solid fa-magnifying-glass"></i>'
	}
}

navSearchLink.addEventListener('click', handleDropDownMenu)
navSearchLink.addEventListener('click', backOfSearchIcon)
navSearchLink.addEventListener('click', checkIfMarkIsVisible)
closeButtonMobileNav.addEventListener('click', handleDropDownMenu)
BarsButtonMobileNav.addEventListener('click', handleDropDownMenu)
