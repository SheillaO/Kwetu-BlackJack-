let player = {
  name: "Olly",
  chips: 200,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack = false; // RESET THIS!
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  // Card counter
  cardsEl.textContent = "Cards (" + cards.length + "): ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;

    // WIN! Add bet to chips
    player.chips += bet;
    wins += 1;

    // Update streak
    currentStreak += 1;
    if (currentStreak > bestStreak) {
      bestStreak = currentStreak;
    }
    streakEl.textContent = bestStreak;

    updateStats();
  } else {
    message = "You're out of the game!";
    isAlive = false;

    // LOSS! Subtract bet from chips
    player.chips -= bet;
    losses += 1;

    // Reset streak
    currentStreak = 0;

    updateStats();
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

// Betting System
let bet = 10;
let betEl = document.getElementById("bet-el");

function placeBet() {
  let amount = prompt("How much do you want to bet? (10, 20, 50, 100)");
  bet = Number(amount);
  betEl.textContent = bet;
}

// Win/Loss Tracker
let wins = 0;
let losses = 0;
let winsEl = document.getElementById("wins-el");
let lossesEl = document.getElementById("losses-el");

function updateStats() {
  winsEl.textContent = wins;
  lossesEl.textContent = losses;
  playerEl.textContent = player.name + ": $" + player.chips;
}

// Streak Tracker
let currentStreak = 0;
let bestStreak = 0;
let streakEl = document.getElementById("streak-el");

// African Cities Selector
let cities = ["Nairobi", "Lagos", "Cape Town", "Cairo", "Accra", "Dakar"];
let currentCity = 0;
let cityEl = document.getElementById("city-el");

function changeCity() {
  currentCity += 1;

  if (currentCity >= cities.length) {
    currentCity = 0;
  }

  cityEl.textContent = cities[currentCity];
}

let dealerCards = [];
let dealerSum = 0;

function dealerTurn() {
  dealerCards = [getRandomCard(), getRandomCard()];
  dealerSum = dealerCards[0] + dealerCards[1];

  while (dealerSum < 17) {
    let newCard = getRandomCard();
    dealerCards.push(newCard);
    dealerSum += newCard;
  }

  let dealerEl = document.getElementById("dealer-el");
  dealerEl.textContent = "Dealer: " + dealerSum;
}

// When game ends, save stats
function saveStats() {
  localStorage.setItem("wins", wins);
  localStorage.setItem("losses", losses);
  localStorage.setItem("chips", player.chips);
}

// When page loads, restore stats
function loadStats() {
  wins = Number(localStorage.getItem("wins")) || 0;
  losses = Number(localStorage.getItem("losses")) || 0;
  player.chips = Number(localStorage.getItem("chips")) || 200;
  updateStats();
}

// Call on page load
loadStats();

function resetStats() {
  wins = 0;
  losses = 0;
  currentStreak = 0;
  bestStreak = 0;
  player.chips = 200;
  updateStats();
  streakEl.textContent = bestStreak;
}