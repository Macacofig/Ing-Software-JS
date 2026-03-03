
class TenisGame {
    constructor() 
    {
        this.scorePlayer1 = "Love";
        this.scorePlayer2 = "Love";
    }

    showScore() {
        if(this.scorePlayer1 === "Deuce" && this.scorePlayer2 === "Deuce") {
            return "Deuce";
        }
        if(this.scorePlayer1 === "Game For Player 1") {
            return "Game For Player 1";
        }
        if(this.scorePlayer2 === "Game For Player 2") {
            return "Game For Player 2";
        }
        return `${this.scorePlayer1}-${this.scorePlayer2}`;
    }

    point(player) {

        if (player === "Player 1") {
            if(this.scorePlayer2 === "40" && this.scorePlayer1 === "30") {
                this.scorePlayer1 = "Deuce";
                this.scorePlayer2 = "Deuce";
            }
            else
            {
                if(this.scorePlayer1 === "40" && this.scorePlayer2 !== "40") {
                this.scorePlayer1 = "Game For Player 1";
                } 
                else {
                    this.scorePlayer1 = this.nextScore(this.scorePlayer1);
                }
            }
        }
        if (player === "Player 2") {
            if(this.scorePlayer1 === "40" && this.scorePlayer2 === "30") {
                this.scorePlayer1 = "Deuce";
                this.scorePlayer2 = "Deuce";
            }
            else
            {
                if(this.scorePlayer2 === "40" && this.scorePlayer1 !== "40") {
                this.scorePlayer2 = "Game For Player 2";
                } 
                else {
                    this.scorePlayer2 = this.nextScore(this.scorePlayer2);
                }
            }
            
        }
    }
    
    nextScore(ActualScore) {
        const scores = ["Love", "15", "30", "40"];
        const currentIndex = scores.indexOf(ActualScore);
        return scores[currentIndex + 1];
    }
}

export {TenisGame};