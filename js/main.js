const searchForm = document.querySelector('.drop-down-menu')
const navSearchLink = document.querySelector('.nav-search')
const closeButtonMobileNav = document.querySelector('.close-button')
const ButtonMobileNav = document.querySelector('.navbar-toggler')

const handleSearchForm = () => {
	searchForm.classList.toggle('form-floating-active')

	//1
	navSearchLink.classList.toggle('nav-search-color-change')
}

const checkIfMarkIsVisible = () => {
	if (navSearchLink.classList.contains('nav-search-color-change')) {
		//2
		navSearchLink.innerHTML = 'Szukaj <i class="fa-solid fa-x"></i>'
	}
}

const addSearch = () => {
	if (searchForm.classList.contains('drop-down-menu')) {
		navSearchLink.innerHTML = 'Szukaj <i class="fa-solid fa-magnifying-glass"></i>'
	}
}
navSearchLink.addEventListener('click', handleSearchForm)
navSearchLink.addEventListener('click', addSearch)
navSearchLink.addEventListener('click', checkIfMarkIsVisible)
closeButtonMobileNav.addEventListener('click', handleSearchForm)
ButtonMobileNav.addEventListener('click', handleSearchForm)
