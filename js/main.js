const dropDownMenuMobile = document.querySelector('.drop-down-menu-mobile')
const navSearchLink = document.querySelector('.nav-search')
const closeButtonMobileNav = document.querySelector('.close-button')
const BarsButtonMobileNav = document.querySelector('.navbar-toggler')
const showHideIcon = document.querySelector('.fa-chevron-down')
const showHideButton = document.querySelector('.button-box')
const ShowHideContent = document.querySelector('.rest-of-products-list')
const productBoxAll = document.querySelectorAll('.product-box')
const restOfProductsListLine = document.querySelector('.end-line-rest-of-products')
const footerYear = document.querySelector('.footer-year')

const handleDropDownMenu = () => {
	dropDownMenuMobile.classList.toggle('drop-down-menu-mobile-active')
	navSearchLink.classList.toggle('nav-search-color-change')
}

const handleIconChange = () => {
	//checking what icon is actually seen in nav search link and replacing it
	if (dropDownMenuMobile.classList.contains('drop-down-menu-mobile')) {
		navSearchLink.innerHTML = 'Szukaj <i class="fa-solid fa-magnifying-glass"></i>'
	}
	if (navSearchLink.classList.contains('nav-search-color-change')) {
		navSearchLink.innerHTML = 'Szukaj <i class="fa-solid fa-x"></i>'
	}
}

//closing  menu by mouse click, not only a nav search link
const closingMenu = () => {
	if (navSearchLink.classList.contains('nav-search-color-change')) {
		document.addEventListener(
			'click',
			(handleCloseOutsideDiv = event => {
				const containerForClassOfDiv = event.target
				if (containerForClassOfDiv.classList.contains('drop-down-menu-mobile')) {
					dropDownMenuMobile.classList.remove('drop-down-menu-mobile-active')
					navSearchLink.innerHTML = 'Szukaj <i class="fa-solid fa-magnifying-glass"></i>'
					navSearchLink.classList.remove('nav-search-color-change')
				}
			})
		)
	}
}

//products section, show and hide rest of products
const showContent = e => {
	productBoxAll.forEach(item => {
		item.classList.toggle('drop-rest-of-products')
		item.classList.toggle('product-box-margin-top')
	})
	ShowHideContent.classList.toggle('hide')
	showHideButton.classList.toggle('change')
	restOfProductsListLine.classList.toggle('end-line-rest-of-products-active')
	if (ShowHideContent.classList.contains('hide')) {
		showHideIcon.style.transform = 'rotate(180deg)'
	} else {
		showHideIcon.style.transform = 'rotate(0)'
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

navSearchLink.addEventListener('click', handleDropDownMenu)
navSearchLink.addEventListener('click', handleIconChange)
navSearchLink.addEventListener('click', closingMenu)
closeButtonMobileNav.addEventListener('click', handleDropDownMenu)
BarsButtonMobileNav.addEventListener('click', handleDropDownMenu)
showHideButton.addEventListener('click', showContent)
