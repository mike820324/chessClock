import { START_GAME, END_GAME, PAUSE_GAME } from "./constants/actionType";
import { START_TIMER, STOP_TIMER } from "./constants/actionType";
import { TIME_TICK, RESET_TIME } from "./constants/actionType";
import { SWITCH_PLAYER, ADD_HISTORY } from "./constants/actionType";

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

export function resetTime(timeType) {
    return {
        type: RESET_TIME,
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
        dispatch(resetTime("player"));
        dispatch(resetTime("game"));
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
