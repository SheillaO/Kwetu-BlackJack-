## 🎴 Kwetu Blackjack - African Card Game

An interactive blackjack game celebrating African culture through design and storytelling. Built with vanilla JavaScript to demonstrate game logic, state management, and user interaction.

<img width="1872" height="860" alt="Kwetu Blackjack" src="https://github.com/user-attachments/assets/a907a5b5-41cc-4aa3-83e3-a329b54d2a58" />

## 🚀 Live Demo

View Live Demo <https://qwetublackjack.netlify.app/>

## 🌍 What is Kwetu?

**Kwetu** means "home" in Swahili. This project brings the classic card game of 21 to an African context, featuring South African flag colors and the ability to "play" across major African cities.

## ✨ Features

- **Classic Blackjack Gameplay**: Get as close to 21 as possible without going over
- **Betting System**: Place bets ($10, $20, $50, $100) before each game
- **Win/Loss Tracking**: Real-time statistics tracking wins, losses, and chip count
- **Streak Counter**: Tracks your best winning streak
- **Card Counter**: Shows how many cards you've drawn
- **City Selector**: Play from Nairobi, Lagos, Cape Town, Cairo, Accra, or Dakar
- **Dynamic Chip Management**: Win bets when you hit 21, lose bets when you bust
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🎨 Design

Built with **South African flag colors** for a vibrant, professional look:

- **Blue** (#001489) - Background gradient
- **Green** (#007A4D) - Accents and borders
- **Red** (#DE3831) - Action buttons
- **Gold** (#FFB612) - Highlights and important info
- **Black & White** - High contrast for readability

## 🛠️ Technologies Used

- HTML5
- CSS3 (Gradients, Flexbox, Transitions)
- Vanilla JavaScript (ES6)
- Google Fonts (Poppins)

# 🎮 How to Play

1. **Place Your Bet**: Click "PLACE BET" and enter your wager amount
2. **Start Game**: Click "START GAME" to receive two random cards
3. **Make Your Move**:
   - Click "NEW CARD" to draw another card
   - Try to get as close to 21 as possible
4. **Win or Bust**:
   - Hit exactly 21 = Blackjack! 🏆 (Win your bet + streak increases)
   - Go over 21 = Bust! 💥 (Lose your bet + streak resets)
5. **Check Winner**: Click "CHECK WINNER" to see final results
6. **New Game**: Click "NEW GAME" to start fresh

## 📝 Code Highlights

### Random Card Generation

```javascript
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10; // Face cards
  } else if (randomNumber === 1) {
    return 11; // Ace
  } else {
    return randomNumber;
  }
}
```

### Win/Loss Logic with Betting

```javascript
if (sum === 21) {
  message = "You've got Blackjack!";
  hasBlackJack = true;
  player.chips += bet; // Win bet amount
  wins += 1;
  currentStreak += 1;
  if (currentStreak > bestStreak) {
    bestStreak = currentStreak;
  }
} else if (sum > 21) {
  message = "You're out of the game!";
  isAlive = false;
  player.chips -= bet; // Lose bet amount
  losses += 1;
  currentStreak = 0; // Reset streak
}
```

### City Selector

```javascript
let cities = ["Nairobi", "Lagos", "Cape Town", "Cairo", "Accra", "Dakar"];
let currentCity = 0;

function changeCity() {
  currentCity += 1;
  if (currentCity >= cities.length) {
    currentCity = 0; // Loop back to start
  }
  cityEl.textContent = cities[currentCity];
}
```

## 💡 Inspiration

As a Technical Product Marketing Manager passionate about African representation in tech, I wanted to create a classic game that celebrates African culture. This project demonstrates:

- **JavaScript fundamentals** in a practical, engaging way
- **Cultural storytelling** through code and design
- **User experience design** with clear visual hierarchy
- **State management** for game logic

Building "Kwetu Blackjack" allowed me to practice core programming concepts while creating something meaningful that represents African identity in digital spaces.

## 🎯 Challenges I Solved

**Challenge 1: Managing Game State**

- **Problem**: Tracking multiple game states (cards, sum, win/loss, streaks)
- **Solution**: Used boolean flags (`isAlive`, `hasBlackJack`) and centralized state updates with `renderGame()` and `updateStats()` functions

**Challenge 2: Handling Ace Values**

- **Problem**: Aces can be worth 11 or 1 in blackjack
- **Solution**: Simplified by always treating aces as 11 using conditional logic in `getRandomCard()`

**Challenge 3: Betting Integration**

- **Problem**: Updating chips based on wins/losses without breaking game flow
- **Solution**: Integrated chip calculations directly into win/loss conditions in `renderGame()`

**Challenge 4: Preventing Multiple Clicks**

- **Problem**: Players could draw cards after winning/losing
- **Solution**: Used `isAlive` and `hasBlackJack` boolean checks in `newCard()` function

## 🎓 What I Learned

This project helped me practice:

- **DOM Manipulation**: `getElementById()`, `textContent` for dynamic UI updates
- **Arrays**: Storing cards, cycling through cities with `push()` and array indexing
- **Conditionals**: `if/else` statements for game rules and win/loss logic
- **Loops**: `for` loop to display all cards
- **Functions**: Breaking code into reusable, readable functions
- **Objects**: Storing player data (`name`, `chips`) in a single object
- **Math Functions**: `Math.random()` and `Math.floor()` for card generation
- **User Input**: `prompt()` for betting interaction
- **State Management**: Tracking and updating multiple variables across functions
- **Event Handling**: `onclick` attributes for user interactions

## 🔮 Future Improvements

- [ ] Add dealer hand (stand at 17)
- [ ] Implement double down feature
- [ ] Add split functionality for pairs
- [ ] Save stats to localStorage (persist between sessions)
- [ ] Add sound effects for wins/losses
- [ ] Multiplayer mode
- [ ] Leaderboard system
- [ ] Card animations
- [ ] More African city backgrounds
- [ ] Multiple languages (Swahili, French, etc.)

## 🌍 Cultural Context

The six cities featured represent major hubs across Africa:

- **Nairobi** (Kenya) - East Africa
- **Lagos** (Nigeria) - West Africa
- **Cape Town** (South Africa) - Southern Africa
- **Cairo** (Egypt) - North Africa
- **Accra** (Ghana) - West Africa
- **Dakar** (Senegal) - West Africa

## 👤 Author

**Olga**

- Role: Technical Product Marketing Manager
- GitHub: [@SheillaO](https://github.com/SheillaO)
- Mission: Promoting African representation in technology and creating inclusive digital experiences

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- South African flag colors for the beautiful, vibrant palette
- The JavaScript community for learning resources
- African developers and creators paving the way

## 🔗 Related Projects

- [She Hoops Africa](https://github.com/SheillaO/she-hoops-africa) - Basketball scoreboard promoting African women in sports
- [Recipe Calculator](https://github.com/SheillaO/Recipe-Ingredient-Calculator) - Ingredient scaling tool

---

**#KwetuBlackjack #AfricanTech #RepresentationMatters**
