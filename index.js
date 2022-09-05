const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards, event) {
    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
 
    return writeCards();
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");