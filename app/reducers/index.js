import { combineReducers } from "redux";
import { gameStatus }from "./gameStatus";
import { historyStatus } from "./historyStatus";
import { timerStatus } from "./timerStatus";
import { clockStatus } from "./clockStatus";

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

const chessClockApp = combineReducers({
    gameStatus,
    historyStatus,
    timerStatus,
    clockStatus
});

export default chessClockApp;

