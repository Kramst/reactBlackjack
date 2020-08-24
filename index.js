let deck, card, pile = []
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
            points = parseInt(points.innerHTML, 10)
            points = calcValue(card, points)
            document.querySelector('.points').innerHTML = points
        })
}

const calcValue = (card, points) =>{
    if(card.value === 'ACE'){
        points + 11 > 21 ? points += 1 : points += 11
        pile.push(card.value)
    }
    else isNaN(+card.value) ? points += 10 : points += (+card.value)
    return(points)
}