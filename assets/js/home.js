const buyBtns =document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

function showBuyTickets() {
    modal.classList.add('open')
}

function hiddenBuyTickets() {
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hiddenBuyTickets)

modal.addEventListener('click', hiddenBuyTickets)

modalContainer.addEventListener('click', function (event){
    event.stopPropagation()
})