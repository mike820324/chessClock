import { Map } from "immutable";
import { START_GAME, END_GAME, PAUSE_GAME } from "../constants/actionType";
import { SWITCH_PLAYER } from "../constants/actionType";

import { GAME_START, GAME_END, GAME_PAUSE } from "../constants/gameStatusType";

//
//{
//  gameStatus: {
//      status: string 
//  }
//  clockStatus: {
//      gameTime: number,
//      playerTime: number
//  }
//  playerStatus: {
//      current: string,
//  }
//  historyStatus: {
//      player1: List,
//      player2: List
//  }
//}
//


const gameInitialState = Map(
    {
        gameStart: GAME_END,
        gameTime: 0,
        currentPlayer: "player1",
        playerTime: 0,
        globalTimer: null
    }
);

export function gameStatus(state = gameInitialState, action) {
    if(action.type === START_GAME) {
        if(state.get("gameStart") === GAME_START) {
            return state;
        } else {
            return state.set("gameStart", GAME_START);
        }
    }

    else if(action.type === END_GAME) {
        if(state.get("gameStart") === GAME_END) {
            return state;
        } else {
            return state.set("gameStart", GAME_END);
        }
    }

    else if(action.type === PAUSE_GAME) {
        if(state.get("gameStart") === GAME_PAUSE) {
            return state;
        } else {
            return state.set("gameStart", GAME_PAUSE);
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
