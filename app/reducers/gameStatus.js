import { Map } from "immutable";
import { START_GAME, END_GAME, PAUSE_GAME } from "../constants/actionType";
import { SWITCH_PLAYER } from "../constants/actionType";

import { GAME_START, GAME_END, GAME_PAUSE } from "../constants/gameStatusType";

const gameInitialState = Map(
    {
        status: GAME_END,
        currentPlayer: "player1",
        globalTimer: null
    }
);

export function gameStatus(state = gameInitialState, action) {
    if(action.type === START_GAME) {
        if(state.get("status") === GAME_START) {
            return state;
        } else {
            return state.set("status", GAME_START);
        }
    }

    else if(action.type === END_GAME) {
        if(state.get("status") === GAME_END) {
            return state;
        } else {
            return state.set("status", GAME_END);
        }
    }

    else if(action.type === PAUSE_GAME) {
        if(state.get("status") === GAME_PAUSE) {
            return state;
        } else {
            return state.set("status", GAME_PAUSE);
        }
    }

    else if(action.type === SWITCH_PLAYER) {
        if(state.get("currentPlayer") === "player1") {
            return state.set("currentPlayer", "player2");
        }

        else {
            return state.set("currentPlayer", "player1");
        }
    }

    else {
        return state;
    }
}
