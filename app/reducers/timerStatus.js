import { START_TIMER, STOP_TIMER } from "../constants/actionType";

const timerInitialState = null;

export function timerStatus(state = timerInitialState, action) {
    if(action.type === START_TIMER) {
        return action.timer;
    }
    else if(action.type === STOP_TIMER) {
        clearInterval(state);
        return null;
    } else {
        return state;
    }
}
