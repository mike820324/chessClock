import GameLog from "./domain/GameLog";
import restler from "restler";

import { START_GAME, END_GAME, PAUSE_GAME } from "./constants/actionType";
import { START_TIMER, STOP_TIMER } from "./constants/actionType";
import { TIME_TICK, RESET_CLOCK } from "./constants/actionType";
import { SWITCH_PLAYER, ADD_HISTORY } from "./constants/actionType";
import { DISPLAY_GAME_LOG, CLOSE_GAME_LOG } from "./constants/actionType";

import gameLogClient from "./service/gameLogClient";

// switch the user
export function switchPlayer() {
    return {
        type: SWITCH_PLAYER
    };
}

// add new history to the current user
export function addHistory(player, time) {
    return {
        type: ADD_HISTORY,
        player,
        time
    };
}

//==== clock related actions
// - timeTick
// - resetTime
export function timeTick() {
    return {
        type: TIME_TICK
    };
}

export function resetClock(timeType) {
    return {
        type: RESET_CLOCK,
        timeType
    };
}


//==== TIMER Related actions
// - startTimer
// - stopTimer
export function startTimer() {
    return dispatch => {
        const timer = setInterval(() => {
            dispatch(timeTick());
        }, 1000);

        dispatch({
            type: START_TIMER,
            timer
        });
    };
}

export function stopTimer() {
    return {
        type: STOP_TIMER
    };
}

// game status related actions
// startGame
// endGame
// pauseGame

export function startGame() {
    return dispatch => {
        dispatch(startTimer());
        dispatch({
            type: START_GAME
        });
    };
}

export function endGame() {
    return dispatch => {
        dispatch(stopTimer());
        dispatch(resetClock("player"));
        dispatch(resetClock("game"));
        dispatch({
            type: END_GAME
        });
    };
}

export function pauseGame() {
    return dispatch => {
        dispatch(stopTimer());
        dispatch({
            type: PAUSE_GAME
        });
    };
}

export function receiveGameLog(gameLogs) {
    return {
        type: DISPLAY_GAME_LOG,
        gameLogs: gameLogs
    };
}
export function displayGameLog() {
    return function(dispatch) {
        gameLogClient.getGameLog().then(function(result) {
            dispatch(receiveGameLog(result));
        });
    };
}

export function closeGameLog() {
    return {
        type: CLOSE_GAME_LOG
    };
}
