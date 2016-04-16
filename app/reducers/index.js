import { combineReducers } from "redux";
import { gameStatus }from "./gameStatus";
import { historyStatus } from "./historyStatus";
import { timerStatus } from "./timerStatus";
import { clockStatus } from "./clockStatus";
import { gameLogStatus } from "./gameLogStatus";

//
//{
//  gameStatus: {
//      status: string
//  }
//  clockStatus: {
//      length: number of clock
//      clocks: {
//          game: number,
//          player: number
//      }
//  }
//  playerStatus: {
//      current: string,
//      playersName: array of string,
//      playersHistory: array of number
//  }
//  historyStatus: {
//      player1: List,
//      player2: List
//  }
//}
//

const chessClockApp = combineReducers({
    gameStatus,
    historyStatus,
    timerStatus,
    clockStatus,
    gameLogStatus
});

export default chessClockApp;

