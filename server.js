// import packages
const express = require('express')
const admin = require('firebase-admin')
const bcrypt = require('bcrypt')
const path = require('path')

// firebase admin setup
let serviceAccount = require('./shopper-ecommerce-3350a-firebase-adminsdk-t0n3e-33e5612a0d.json')

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
})

let db = admin.firestore()

// declare static path
let staticPath = path.join(__dirname, 'public')

// initialize express.js
const app = express()

// middlewares
app.use(express.static(staticPath))
app.use(express.json())

// routes
// --- home route
app.get('/', (req, res) => {
	res.sendFile(path.join(staticPath, 'index.html'))
})

// --- product route
app.get('/product', (req, res) => {
	res.sendFile(path.join(staticPath, 'product.html'))
})

// --- search route
app.get('/search', (req, res) => {
	res.sendFile(path.join(staticPath, 'search.html'))
})

// --- signup route
app.get('/signup', (req, res) => {
	res.sendFile(path.join(staticPath, 'signup.html'))
})

app.post('/signup', (req, res) => {
	let { name, email, password, number, tac, notification } = req.body

	// form validations
	if (name.length < 3) {
		return res.json({ alert: 'Name must be 3 letters long' })
	} else if (!email.length) {
		return res.json({ alert: 'Enter your email' })
	} else if (!password.length) {
		return res.json({ alert: 'Password should be at least 8 characters long' })
	} else if (!number.length) {
		return res.json({ alert: 'Enter your phone number' })
	} else if (!Number(number) || number.length < 10) {
		return res.json({
			alert: 'Invalid number, please enter a valid phone number',
		})
	} else if (!tac) {
		return res.json({ alert: 'Terms & Conditions must be checked' })
	}

	// store user in db
	db.collection('users')
		.doc(email)
		.get()
		.then((user) => {
			if (user.exists) {
				return res.json({ alert: 'email already exists' })
			} else {
				// encrypt the password before storing it
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(password, salt, (err, hash) => {
						req.body.password = hash
						db.collection('users')
							.doc(email)
							.set(req.body)
							.then((data) => {
								res.json({
									name: req.body.name,
									email: req.body.email,
									seller: req.body.seller,
								})
							})
					})
				})
			}
		})
})

// --- 404 route
app.get('/404', (req, res) => {
	res.sendFile(path.join(staticPath, '404.html'))
})

app.use((req, res) => {
	res.redirect('/404')
})

app.listen(3000, () => {
	console.log('listening on Port 3000...')
})
