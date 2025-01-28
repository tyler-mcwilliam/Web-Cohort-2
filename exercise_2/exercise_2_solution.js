function drawAceOfSpades() {
  let deckId = document.getElementById("deck").textContent;
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var hand = document.getElementById("hand");
      hand.innerHTML = "";
      const aceOfSpades = data.cards.find(
        (card) => card.value === "ACE" && card.suit === "SPADES"
      );
      if (aceOfSpades) {
        var image = document.createElement("img");
        image.src = aceOfSpades.image;
        hand.appendChild(image);
      } else {
        console.error("Ace of Spades not found in the deck.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
} // Copy and paste js here
