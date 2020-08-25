const calcValue = (card, points) =>{
    points = parseInt(points.innerHTML, 10)
    if(card.value === 'ACE'){
        points + 11 > 21 ? points += 1 : points += 11
        pile.push(card.value)
    }
    else isNaN(+card.value) ? points += 10 : points += (+card.value)
    return(points)
}