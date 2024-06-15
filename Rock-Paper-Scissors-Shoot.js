//Create a game of 'Rock, Paper, Scissors' that runs until one player has three wins
//Take your existing RPS from the previous assignment and add functionality

// Define the hands array
const hands = ['rock', 'paper', 'scissors'];

// Define a function to get a random hand from the hands array
function getHand() {
    return hands[Math.floor(Math.random() * hands.length)];
}

// Define Player class
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    
    increaseScore() {
        this.score++;
    }
    
    resetScore() {
        this.score = 0;
    }
    
    getHand() {
        return getHand();
    }
}

// Define function to play a round
function playRound(player1, player2) {
    // Get hands from each player
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    // Determine the winner
    let winner = null;
    if (hand1 === hand2) {
        console.log(`Both players chose ${hand1}. It's a tie!`);
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')
    ) {
        winner = player1;
        winner.increaseScore();
        console.log(`${player1.name} wins with ${hand1} against ${hand2}`);
    } else {
        winner = player2;
        winner.increaseScore();
        console.log(`${player2.name} wins with ${hand2} against ${hand1}`);
    }

    return winner;
}

// Define function to play a game until one player wins 'playUntil' rounds
function playGame(player1, player2, playUntil = 3) {
    player1.resetScore();
    player2.resetScore();
    
    while (player1.score < playUntil && player2.score < playUntil) {
        playRound(player1, player2);
    }
    
    if (player1.score >= playUntil) {
        return player1;
    } else {
        return player2;
    }
}

// Define function to play a tournament between four players
function playTournament(player1, player2, player3, player4, playUntil = 3) {
    // First round
    const winner1 = playGame(player1, player2, playUntil);
    const winner2 = playGame(player3, player4, playUntil);
    
    // Final round
    const tournamentWinner = playGame(winner1, winner2, playUntil);
    
    return tournamentWinner;
}

// Example usage:
const player1 = new Player("Alice");
const player2 = new Player("Bob");
const player3 = new Player("Charlie");
const player4 = new Player("David");

const tournamentWinner = playTournament(player1, player2, player3, player4);

console.log(`${tournamentWinner.name} is the world champion!`);
