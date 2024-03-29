// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

//assigning the returned data to players array
const players = data.getPlayers();

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

 // Your code

console.log("Task 1");
console.log("------");

function outputPlayerInfo() {
    //loops through the array and prints player info
    players.forEach((player, index) => {
    console.log(`PLAYER ${index + 1}`);
    console.log(`NAME: ${player.name}`);
    console.log(`LASTNAME: ${player.lastname}`);
    console.log(`POSITION: ${player.position}`);
    console.log(``);
    });
}

outputPlayerInfo();

console.log(``);
console.log(``);

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code

console.log("Task 2");
console.log("------");

function logPlayerNameArrByLenDesc() {
    //creates new array of player names
    const playerNames = players.map(player => player.name);

    //sorts the array by name length desc
    const sortedByNames = playerNames.sort((a, b) => b.length - a.length);

    console.log(sortedByNames);
}

logPlayerNameArrByLenDesc();

console.log(``);
console.log(``);

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, each of them has a 0.11 scoringChance, the total number of goals will be 1.1 average 
 * Output example -> Goals per match: 2.19
 */

// Your code

console.log("Task 3");
console.log("------");

function calculateAverageGoals(team) {
    let avgScore = 0; 
    //loops through the player array and sums the scoringChance
    team.forEach(player => {
        avgScore += parseInt(player.scoringChance);
    });

    //divides avgScore by 100 to get average goals per game
    avgScore /= 100;

    console.log(`Goals per match: ${avgScore}`);
}

calculateAverageGoals(players);

console.log(``);
console.log(``);

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code

console.log("Task 4");
console.log("------");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function findPlayerPosition() {

    //accepts user input (player name)
    readline.question("Enter the player's name: ", name => {

        //checks if the player with entered name exists in the array
        const player = players.find(player => player.name.toLowerCase() === name.toLowerCase());

        //if player exists - outputs the name and position, else - informs user player doesn't exist
        if(player) {
            console.log(`${player.name}'s position: ${player.position}`);
        } else {
            console.log(`Player ${name} doesn't exist.`);
        }

        readline.close();
    });
}

findPlayerPosition();

console.log(``);
console.log(``);

/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance. 
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code

console.log("Task 5");
console.log("------");

const team1 = [];
const team2 = [];

function randomiseTeams() {
    players.forEach(player => {
        //randomises a number (0 or 1)
        let randomZeroOrOne = Math.round(Math.random());

        //checks if either of the teams if full
        if(team1.length == Math.floor(players.length / 2)) {
            team2.push(player);
        } else if(team2.length == Math.floor(players.length / 2)) {
            team1.push(player);
        } else {
            //assigns player to a team based on the randomised number
            if(randomZeroOrOne == 0) {
                team1.push(player);
            } else {
                team2.push(player);
            }
        }
    });
}

function outputNamesOfWholeTeam(team) {
    team.forEach(player => {
        console.log(player.name);
    });
}

randomiseTeams();

outputNamesOfWholeTeam(team1);
calculateAverageGoals(team1);

console.log('');

outputNamesOfWholeTeam(team2);
calculateAverageGoals(team2);
