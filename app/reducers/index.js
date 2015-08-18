import { combineReducers } from "redux";
import { gameStatus }from "./gameStatus";
import { historyStatus } from "./historyStatus";
import { timerStatus } from "./timerStatus";
import { clockStatus } from "./clockStatus";


const chessClockApp = combineReducers({
    gameStatus,
    historyStatus,
    timerStatus,
    clockStatus
});

export default chessClockApp;

