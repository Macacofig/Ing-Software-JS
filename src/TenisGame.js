
class TenisGame {
    constructor() 
    {
        this.scorePlayer1 = "Love";
        this.scorePlayer2 = "Love";
    }

    showScore() {
        return `${this.scorePlayer1}-${this.scorePlayer2}`;
    }

    point(player) {
        if (player === "Player 1") {
            this.scorePlayer1 = this.nextScore(this.scorePlayer1);
        }
    }
    
    nextScore(ActualScore) {
        const scores = ["Love", "15", "30", "40"];
        const currentIndex = scores.indexOf(ActualScore);
        return scores[currentIndex + 1];
    }
}

export {TenisGame};