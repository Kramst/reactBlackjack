let deck, card
const getDecks = () =>{
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
        .then(newDeck => newDeck.json())
        .then(newdeck => deck=newdeck)
}

const getCard = player =>{
    fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)
        .then(newcard => card=newcard.json())
        .then(card => card = card.cards[0])
        .then(card => {
            let points = document.querySelector('.points')
            isNaN(+card.value) ? points.innerHtml += 10 : points.innerHtml += (+card.value)
        })
}