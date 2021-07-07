const headerCityButton = document.querySelector('.header__city-button');
const subheadeCart = document.querySelector('.subheader__cart')
const cartOverlay = document.querySelector('.cart-overlay')
const cartBtnClose = document.querySelector('.cart__btn-close')

if(localStorage.getItem('lomoda-location')){
    headerCityButton.textContent = localStorage.getItem('lomoda-location')
}

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Your city';

headerCityButton.addEventListener('click', () => {
    const city = prompt('Where are you from?')
    headerCityButton.textContent = city
    localStorage.setItem('lomoda-location', city)
});

// lock scroll
function disableScroll() {
    const widthScroll = window.innerWidth = document.body.offsetWidth
}

function enableScroll() {
    document.body.overflow = ''
}
// Modal window

const cardModalOpen = () => {
    cartOverlay.classList.add("cart-overlay-open")
    disableScroll()
}

const cardModalClose = () => {
    cartOverlay.classList.remove("cart-overlay-open")
    enableScroll()
}

subheadeCart.addEventListener('click', cardModalOpen)

cartOverlay.addEventListener('click', event => {
    const target = event.target
    if (target.classList.contains('cart__btn-close')
     || target.classList.contains('cart-overlay')) {
        cardModalClose()
    }
})
