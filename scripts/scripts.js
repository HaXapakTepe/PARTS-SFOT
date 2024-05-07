document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')

	const toggleMenu = () => {
		menu.classList.toggle('menu--active')
		burger.classList.toggle('burger--active')
		body.classList.toggle('no-scroll')
	}

	const clickOutsideMenu = event => {
		if (!menu.contains(event.target) && !burger.contains(event.target)) {
			menu.classList.remove('menu--active')
			burger.classList.remove('burger--active')
			body.classList.remove('no-scroll')
		}
	}

	burger.addEventListener('click', toggleMenu)
	document.addEventListener('click', clickOutsideMenu)

	const slidersSwipers = []
	const sliderSwiper = document.querySelectorAll('.slider__swiper')
	sliderSwiper?.forEach((swiper, index) => {
		slidersSwipers.push(setSlidersSwiper(index + 1))
	})
	function setSlidersSwiper(index) {
		return new Swiper(`.slider__swiper--${index}`, {
			loop: true,
			autoplay: {
				delay: 4000,
			},
			navigation: {
				prevEl: `.slider__arrow-prev--${index}`,
				nextEl: `.slider__arrow-next--${index}`,
			},
			spaceBetween: 20,
			breakpoints: {
				1366: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			},
		})
	}
})
