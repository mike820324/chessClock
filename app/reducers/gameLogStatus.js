import immutable from "immutable";
import { DISPLAY_GAME_LOG, CLOSE_GAME_LOG } from "../constants/actionType";
import GameLog from "../domain/GameLog";

const gameLogInitialState = immutable.fromJS(
    {
        displayGameLog: false,
        gameLogs: []
    }
);

export function gameLogStatus(state = gameLogInitialState, action) {
    if (action.type === DISPLAY_GAME_LOG) {
        return state.set("displayGameLog", true)
            .set("gameLogs", action.gameLogs);
    }
    if (action.type === CLOSE_GAME_LOG) {
        return state.set("displayGameLog", false);
    }
    return state;
}
