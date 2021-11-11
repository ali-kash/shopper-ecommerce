const createNav = () => {
	let nav = document.querySelector('.navbar')

	nav.innerHTML = `
    <div class="nav">
				<img src="images/dark-logo.png" class="nav__logo" alt="logo" />
				<div class="nav-items">
					<div class="search">
						<input
							type="search"
							class="search__box"
							placeholder="search brand, product"
						/>
						<button class="search__btn">search</button>
					</div>
					<a href="#"><img src="images/user.png" alt="user icon" /></a>
					<a href="#"><img src="images/cart.png" alt="cart icon" /></a>
				</div>
			</div>

			<ul class="links-container">
				<li class="link-item"><a href="#" class="link">home</a></li>
				<li class="link-item"><a href="#" class="link">women</a></li>
				<li class="link-item"><a href="#" class="link">men</a></li>
				<li class="link-item"><a href="#" class="link">kids</a></li>
				<li class="link-item"><a href="#" class="link">accessories</a></li>
			</ul>
  `
}

createNav()
