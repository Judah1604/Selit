let deleteBtn = document.getElementsByClassName('deleteBtn')
let checkOutItems = document.querySelector('.items')

addToCartBtn.addEventListener('click', function () {
	let item = document.createElement('div')
	item.classList.add('item')
	let itemImg = document.createElement('img')
	let productImgSrc = addToCartBtn.parentElement.parentElement.children[1].children[0].children[0].getAttribute('src')
	itemImg.setAttribute('src', productImgSrc)
	let productName = addToCartBtn.parentElement.parentElement.children[1].children[1].children[0].textContent
	itemImg.setAttribute('alt', productName)

	let infoSection = document.createElement('div')
	infoSection.classList.add('info')
	let itemName = document.createElement('h2')
	itemName.textContent = productName
	let itemPrice = document.createElement('h5')
	let itemPriceValue = addToCartBtn.parentElement.parentElement.children[1].children[1].children[1].children[0].children[0].textContent
	itemPrice.innerHTML = 'Price: ' + itemPriceValue

	infoSection.appendChild(itemName)
	infoSection.appendChild(itemPrice)
	
	if (addToCartBtn.parentElement.parentElement.
		children[1].children[1].children[2].children[0].children[1].value !== '') {
		let itemQuantity = document.createElement('p')
		let itemQuantityValue = addToCartBtn.parentElement.parentElement.children[1].children[1].children[2].children[0].children[1].value
		itemQuantity.innerHTML = 'Quantity: ' + itemQuantityValue
		infoSection.appendChild(itemQuantity)
		checkOutItems.appendChild(item)
	}
	
	if (addToCartBtn.parentElement.parentElement.children[1]
		.children[1].children[2].children[1].style.display !== 'none' && addToCartBtn.parentElement.parentElement.children[1]
		.children[1].children[2].children[1].value !== '') {
		let itemSize = document.createElement('p')
		let itemSizeValue = addToCartBtn.parentElement.parentElement.children[1].children[1].children[2].children[1].children[1].value
		itemSize.innerHTML = 'Size: ' + itemSizeValue
		infoSection.appendChild(itemSize)
		checkOutItems.appendChild(item)
	}
	
	let deleteBtnElement = document.createElement('div')
	deleteBtnElement.classList.add('deleteBtn')
	let deleteIcon = document.createElement('i')
	deleteIcon.classList.add('fa-solid')
	deleteIcon.classList.add('fa-xmark')
	deleteBtnElement.appendChild(deleteIcon)

	item.appendChild(itemImg)
	item.appendChild(infoSection)
	item.appendChild(deleteBtnElement)

	checkOutItems.appendChild(item)

	for (let i = 0; i < deleteBtn.length; i++) {
		deleteBtn[i].addEventListener('click', function () {
			var itemToBeDeleted = this.parentElement;
			itemToBeDeleted.remove()

			if (checkOutItems.childElementCount == 0) {
				let alertMsg = document.createElement('p');
				let alertMsgText = document.createTextNode('No check out items left')
				alertMsg.appendChild(alertMsgText)
				checkOutItems.appendChild(alertMsg)
			}
		})
	}
})
