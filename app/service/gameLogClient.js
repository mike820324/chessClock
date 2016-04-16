import restler from "restler";
import GameLog from "../domain/GameLog";
import config from "../config";

const baseUrl = config.rest.url;

function getGameLog() {
    return new Promise(function(resolve, reject) {
        restler.get(baseUrl + "/history/all").on("complete", function(result) {
            if (result instanceof Error) {
                reject(result);
            } else {
                var gameLogs = result.map(e => new GameLog(e.gameDate, e.playerWhite, e.playerBlack, e.winner));
                resolve(gameLogs);
            }
        });
    });
}

export default {
    getGameLog: getGameLog
};
