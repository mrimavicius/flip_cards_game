const game = document.getElementById("game") as HTMLElement


let numOfCards: number = 20
let cardsArray: string[] = [
    'fa-flag',
    'fa-flag',
    'fa-dragon',
    'fa-dragon',
    'fa-apple-whole',
    'fa-apple-whole',
    'fa-candy-cane',
    'fa-candy-cane',
    'fa-btc',
    'fa-btc',
    'fa-bicycle',
    'fa-bicycle',
    'fa-basket-shopping',
    'fa-basket-shopping',
    'fa-anchor',
    'fa-anchor',
    'fa-cat',
    'fa-cat',
    'fa-peace',
    'fa-peace'
]

let shuffledCardsArray = cardsArray
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

let hasClickedCard = false

let firstCard, secondCard

function disableCards() {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
}

function checkForMatch() {

    if (firstCard.innerHTML === secondCard.innerHTML) {
        disableCards()
        return
    } else {
        setTimeout(() => {
            firstCard.style.background = "darkkhaki"
            secondCard.style.background = "darkkhaki"
        }, 5000)
    }
}

function flipCard() {

    if (!hasClickedCard) {
        hasClickedCard = true
        firstCard = this as HTMLElement
        firstCard.style.background = "white"
        return
    }

    secondCard = this
    secondCard.style.background = "white"
    hasClickedCard = false

    checkForMatch()

}

function appendCards() {
    for (let i = 0; i < numOfCards; i++) {

        game.innerHTML += `
        <div class="card"><i class="fa-solid ${shuffledCardsArray[i]}"></i></div>
        `
    }

    const card = document.querySelectorAll(".card") as NodeListOf<HTMLElement>

    card.forEach(x => x.addEventListener("click", flipCard))

}

appendCards()