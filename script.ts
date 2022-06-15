const container = document.querySelector('#game') as HTMLElement

interface ItemInterface {
    div: HTMLElement,
    symbol: string
}

const icons: string[] = [
    "fa-cat",
    "fa-crow",
    "fa-dog",
    "fa-dragon",
    "fa-fish",
    "fa-frog",
    "fa-horse",
    "fa-otter",
    "fa-paw",
    "fa-spider"
]

let iconsMerged: string[] = [...icons, ...icons]

let selected: ItemInterface[] = []

function closeCards() {
    setTimeout(() => {
        selected[0].div.style.backgroundColor = "darkkhaki"
        selected[0].div.innerHTML = ``

        selected[1].div.style.backgroundColor = "darkkhaki"
        selected[1].div.innerHTML = ``

        selected = []
    }, 1000)
}

function cardsMatch() {
    selected[0].div.classList.add("open")
    selected[1].div.classList.add("open")

    selected = []
}

function compareSymbols() {

    if (selected[0].symbol === selected[1].symbol) {
        cardsMatch()
    } else {
        closeCards()
    }

}

function cardClicked(e: any) {
    if (e.target.className.includes('open')) return

    if (selected.length < 2) {
        const { value: iconName } = e.target.attributes[1]
        e.target.style.backgroundColor = "white"
        e.target.innerHTML = `<i class="fas ${iconName}"></i>`

        const item: ItemInterface = {
            div: e.target,
            symbol: iconName
        }

        selected.push(item)

        if (selected.length === 2) compareSymbols()
    }


}

function appendHtml() {
    iconsMerged = iconsMerged.sort((a, b) => 0.5 - Math.random());

    for (let i = 0; i < iconsMerged.length; i++) {
        container.innerHTML += `<div class="card" iconName="${iconsMerged[i]}"></div>`
    }

    const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>
    cards.forEach(x => x.onclick = cardClicked)
}

appendHtml()