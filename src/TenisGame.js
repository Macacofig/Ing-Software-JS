
class TenisGame {
    constructor() 
    {
        this.scorePlayer1 = "Love";
        this.scorePlayer2 = "Love";
    }

    showScore() {
        return `${this.scorePlayer1}-${this.scorePlayer2}`;
    }
}

export {TenisGame};