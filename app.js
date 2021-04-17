document.addEventListener('DOMContentLoaded', () => {

    // card options

    const cardArray =[
    {
        name: 'cupcake',
        img: 'images/cupcake.png'
    },
    {
        name: 'cupcake',
        img: 'images/cupcake.png'
    },
    {
        name: 'gamer',
        img: 'images/gamer.png'
    },
    {
        name: 'gamer',
        img: 'images/gamer.png'
    },
    {
        name: 'owl',
        img: 'images/owl.png'
    },
    {
        name: 'owl',
        img: 'images/owl.png'
    },
    {
        name: 'purpleNose',
        img: 'images/purpleNose.png'
    },
    {
        name: 'purpleNose',
        img: 'images/purpleNose.png'
    },
    {
        name: 'slug',
        img: 'images/slug.png'
    },
    {
        name: 'slug',
        img: 'images/slug.png'
    },
    {
        name: 'sun',
        img: 'images/sun.png'
    },
    {
        name: 'sun',
        img: 'images/sun.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

// create the board

function createBoard() {
    // put the images on the page
    for(let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        // set the pattern
        card.setAttribute('src', 'images/pattern.png')
        card.setAttribute('data-id', i)
        // set the function to flip the cards on click
        card.addEventListener('click', flipcard)
        grid.appendChild(card)

    }
}

// check for match
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cardsWon.push(cardsChosen)

    } else {
        cards[optionOneId].setAttribute('src', 'images/pattern.png')
        cards[optionTwoId].setAttribute('src', 'images/pattern.png')
        alert('Sorry try again')
    } 
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all.'
    }
}

// flip your card

function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()


});