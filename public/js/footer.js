const createFooter = () => {
	let footer = document.querySelector('footer')

	footer.innerHTML = `
    <div class="footer">
				<img src="./images/light-logo.png" class="logo" alt="footer logo" />
				<div class="footer__ul">
					<ul class="category">
						<li class="category__title">men</li>
						<li><a href="#" class="category__link">t-shirts</a></li>
						<li><a href="#" class="category__link">sweatshirts</a></li>
						<li><a href="#" class="category__link">shirts</a></li>
						<li><a href="#" class="category__link">jeans</a></li>
						<li><a href="#" class="category__link">shoes</a></li>
						<li><a href="#" class="category__link">shorts</a></li>
						<li><a href="#" class="category__link">pants</a></li>
					</ul>
					<ul class="category">
						<li class="category__title">women</li>
						<li><a href="#" class="category__link">t-shirts</a></li>
						<li><a href="#" class="category__link">sweatshirts</a></li>
						<li><a href="#" class="category__link">shirts</a></li>
						<li><a href="#" class="category__link">jeans</a></li>
						<li><a href="#" class="category__link">shoes</a></li>
						<li><a href="#" class="category__link">dresses</a></li>
						<li><a href="#" class="category__link">skirts</a></li>
					</ul>
				</div>
			</div>
			<p class="footer__title">about company</p>
			<p class="footer__info">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>
			<div class="footer__social">
				<div>
					<a href="#" class="footer__social-link">terms & services</a>
					<a href="#" class="footer__social-link">privacy policy</a>
				</div>
				<div>
					<a href="#" class="footer__social-link">instagram</a>
					<a href="#" class="footer__social-link">facebook</a>
					<a href="#" class="footer__social-link">twitter</a>
				</div>
			</div>
			<p class="footer__credit">Fake clothing apparel online store</p>
  `
}

createFooter()
