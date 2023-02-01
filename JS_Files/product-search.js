let productSearchInput = document.querySelector('#product-search-input')

let productsNamesArray = document.getElementsByClassName('name')
//let unfound = document.querySelector('.unfound');

productSearchInput.addEventListener('input', function () {
	let inputValue = productSearchInput.value
	let searchQuery = inputValue.toLowerCase()

	for (let i = 0; i < productsNamesArray.length; i++) {
		let name = productsNamesArray[i].textContent.toLowerCase()

		if (name.includes(searchQuery)) {
			productsNamesArray[i].parentElement.parentElement.style.display = "block"
		} else {
			productsNamesArray[i].parentElement.parentElement.style.display = "none"
		}
	}
})
