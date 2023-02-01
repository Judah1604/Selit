let detailsBtns = document.getElementsByClassName('detailsBtn')
let addToCartBtn = document.querySelector('.addToCartBtn')
let cartNumber = document.querySelector('.cart .number')
let cartCount = 0;
let cartDropdownMenu = document.querySelector('.cart .dropdown-menu');
let checkOutBtnElement = document.querySelector('.checkOutBtn')

// Modal elements

let modalImg = document.querySelector('#details-img')
let modalProductName = document.querySelector('.product-name')
let modalOurPrice = document.querySelector('.modal-our-price span')
let modalListPrice = document.querySelector('.modal-list-price span')

for (let i = 0; i < detailsBtns.length; i++) {
	detailsBtns[i].addEventListener('click', function () {
		let productPic = detailsBtns[i].parentElement.parentElement.children[0]
		let productPicSrc = productPic.getAttribute('src')
		let productPicAlt = productPic.getAttribute('alt')

		let productName = detailsBtns[i].parentElement.children[0].textContent
		let productOurPrice = detailsBtns[i].parentElement.children[1].children[0].textContent
		let productListPrice = detailsBtns[i].parentElement.children[1].children[1].textContent

		modalImg.setAttribute('src', productPicSrc)
		modalImg.setAttribute('alt', productPicAlt)
		modalProductName.textContent = productName
		modalOurPrice.textContent = productOurPrice
		modalListPrice.textContent = productListPrice

		let productClasses = detailsBtns[i].parentElement.parentElement.getAttribute('class')

		if (productClasses.includes('nosize')) {
			modalImg.parentElement.parentElement.children[1].children[2].children[1].style.display = 'none'
		} else {
			modalImg.parentElement.parentElement.children[1].children[2].children[1].style.display = 'flex'
		}

		document.querySelector('#quantity').value = ''
		document.querySelector('#sizes').value = ''
	})
}

if (cartNumber.textContent == '0') {
	let warning = document.createElement('p')
	warning.classList.add('warning')
	warning.innerHTML = "No added cart items"
	cartDropdownMenu.appendChild(warning);
}

addToCartBtn.addEventListener('click', () => {
	let warning = document.querySelector('.warning')
	if (warning) {
		warning.remove()
	}

	let dropdownItem = document.createElement('div')
	dropdownItem.classList.add('dropdown-item')
	let dropdownContent = document.createElement('div')
	dropdownContent.classList.add('dropdown-content')
	dropdownContent.classList.add('row')
	let cartProductImg = document.createElement('img')
	let cartProductImgSrc = addToCartBtn.parentElement.parentElement.children[1].children[0].children[0].getAttribute('src')
	let cartProductImgAlt = addToCartBtn.parentElement.parentElement.children[1].children[0].children[0].getAttribute('alt')
	cartProductImg.setAttribute('src', cartProductImgSrc)
	cartProductImg.setAttribute('alt', cartProductImgSrc)
	cartProductImg.classList.add('col-md-4')

	let cartProductNameContent = addToCartBtn.parentElement.parentElement.children[1].children[1].children[0].textContent
	let info = document.createElement('div')
	info.classList.add('info')
	info.classList.add('col-md-6')
	let cartProductName = document.createElement('h3')
	cartProductName.textContent = cartProductNameContent

	let quantityValue = addToCartBtn.parentElement.parentElement.children[1].children[1].children[2]
		.children[0].children[1].value
	let quantity = document.createElement('p')
	quantity.textContent = 'Quantity: ' + quantityValue

	let sizeValue = addToCartBtn.parentElement.parentElement.children[1].children[1].children[2]
		.children[1].children[1].value
	let sizeElement = addToCartBtn.parentElement.parentElement.children[1].children[1].children[2]
		.children[1]
	let size = document.createElement('p')
	size.textContent = 'Size: ' + sizeValue

	if (quantityValue == '') {
		alert('Quantity value cannot be left blank')
	} else if (sizeValue == '' && sizeElement.style.display !== 'none') {
		alert('Size value cannot be left blank')
	} else {
		checkOutBtnElement.style.display = 'block'

		info.appendChild(cartProductName)
		info.appendChild(quantity)
		info.appendChild(size)
		dropdownContent.appendChild(cartProductImg)
		dropdownContent.appendChild(info)
		dropdownItem.appendChild(dropdownContent)
		cartDropdownMenu.appendChild(dropdownItem)
		alert('Item has been added to cart successfully')

		cartCount++
		cartNumber.textContent = cartCount
	}
	
	if (sizeElement.style.display == 'none') {
		size.style.display = 'none'
	}
})
