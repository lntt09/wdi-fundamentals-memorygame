var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function(){

		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match");
		}
		else{
			alert("Sorry, try again");
		}
}

var flipCard = function(cardID){
	if (cardsInPlay.length === 2){
		return checkForMatch();
	}
	else{
		alert("Please select another card to play");
	}
	console.log("User flipped " + cards[cardID])

	cardsInPlay.push(cards[cardID])

};

flipCard(0);
flipCard(2);


