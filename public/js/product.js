const productImages = document.querySelectorAll('.product-details__images img')
const productImageSlide = document.querySelector('.image-slider')

let activeImageSlide = 0

productImages.forEach((item, i) => {
	item.addEventListener('click', () => {
		productImages[activeImageSlide].classList.remove('active')
		item.classList.add('active')
		productImageSlide.style.backgroundImage = `url('${item.src}')`
		activeImageSlide = i
	})
})

// toggle size button

const sizeBtns = document.querySelectorAll('.size-radio-btn')
let checkedBtn = 0

sizeBtns.forEach((item, i) => {
	item.addEventListener('click', () => {
		sizeBtns[checkedBtn].classList.remove('check')
		item.classList.add('check')
		checkedBtn = i
		console.log(item)
	})
})

// const data = [
// 	{
// 		name: 'Rehan',
// 		location: 'Pune',
// 		description: 'hello hi',
// 		created_by: 13692,
// 		users_name: 'xyz',
// 	},
// 	{
// 		name: 'Sameer',
// 		location: 'Bangalore',
// 		description: 'how are you',
// 		created_by: 13543,
// 		users_name: 'abc',
// 	},
// ]

// var htmlText = data.map(function (o) {
// 	return `
//       <div class="div-conatiner">
//       <p class="p-name"> Name: ${o.name}</p>
//       <p class="p-loc"> Location: ${o.location}</p>
//       <p class="p-desc"> Description: ${o.description}</p>
//       <p class="p-created"> Created by: ${o.created_by}</p>
//      <p class="p-uname"> Username: ${o.users_name}</p>
//      </div>
//   `
// })

// const mainContainer = document.querySelector('#myData')

// mainContainer.innerHtml = htmlText
