let highGame = 0;
let gamesPlayed = 0;

const play = () => {
    let game = 0;
    let die = roll();
    if(die == 1){
        gamesPlayed++;
        return game;
    }
    while(die != 1){
        game += die;
        die = roll();
        console.log(`die roll: ${die}`);
    }
    console.log(`game score: ${game}`);
    document.getElementById("score").innerText = game;
    setHighScore(game);
    gamesPlayed++;
    document.getElementById("played").innerText = gamesPlayed;
    return game;
}

const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const setHighScore = (game) =>{
    if(game > highGame){
        highGame = game;
        document.getElementById("highScore").innerText = highGame;
    }    
}

const breakRecord = () => {
    while(highGame < 150){
        play();
        // document.getElementById("score").innerText = game;
        // document.getElementById("played").innerText = gamesPlayed;
        // document.getElementById("highScore").innerText = highGame;
    }
}