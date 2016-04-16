class GameLog {
    constructor(gameDate, playerBlack, playerWhite, winner) {
        this.gameDate = gameDate;
        this.playerBlack = playerBlack;
        this.playerWhite = playerWhite;
        this.winner = winner;
    }

    toString() {
        return "(" + this.gameDate + "," + this.playerBlack + "," + this.playerWhite + "," + this.winner + ")";
    }
}

export default GameLog;
