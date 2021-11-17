// redirect to hoome page if user logged in
window.onload = () => {
	if (sessionStorage.user) {
		user = JSON.parse(sessionStorage.user)
		if (compareToken(user.authToken, user.email)) {
			location.replace('/')
		}
	}
}

const loader = document.querySelector('.loader')

// select inputs
const submitBtn = document.querySelector('.submit-btn')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const number = document.querySelector('#number')
const tac = document.querySelector('#terms')
const notification = document.querySelector('#notification')

submitBtn.addEventListener('click', (e) => {
	e.preventDefault()

	if (name.value.length < 3) {
		showAlert('Name must be at least 3 letter long')
	} else if (!email.value.length) {
		showAlert('Enter your email')
	} else if (!password.value.length) {
		showAlert('Password should be at least 8 characters long')
	} else if (!number.value.length) {
		showAlert('Enter your phone number')
	} else if (!Number(number.value) || number.value.length < 10) {
		showAlert('Invalid number, please enter a valid phone number')
	} else if (!tac.checked) {
		showAlert('Terms & Conditions must be checked')
	} else {
		// submit form
		loader.style.display = 'flex'
		sendData('/signup', {
			name: name.value,
			email: email.value,
			password: password.value,
			number: number.value,
			tac: tac.checked,
			notification: notification.checked,
			seller: false,
		})
	}
})

// send data function
const sendData = (path, data) => {
	fetch(path, {
		method: 'post',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((response) => {
			processData(response)
		})
}

const processData = (data) => {
	loader.style.display = null
	if (data.alert) {
		showAlert(data.alert)
	} else if (data.name) {
		console.log(data)
		// create authToken
		data.authToken = generateToken(data.email)
		sessionStorage.user = JSON.stringify(data)
		location.replace('/')
	}
}

// alert function
const showAlert = (msg) => {
	let alertBox = document.querySelector('.alertBox')
	let alertMsg = document.querySelector('.alertBox__msg')
	alertMsg.innerHTML = msg
	alertBox.classList.add('show')
	setTimeout(() => {
		alertBox.classList.remove('show')
	}, 3000)
}
