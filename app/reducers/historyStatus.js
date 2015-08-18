import { ADD_HISTORY } from "../constants/actionType";
import immutable from "immutable";

const historyinitialState = immutable.fromJS(
    {
        player1: [],
        player2: []
    }
);

export function historyStatus(state = historyinitialState, action) {
    if(action.type === ADD_HISTORY) {
        return state.set(
            action.player,
            state.get(action.player).push(action.time)
        );
    }
    else {
        return state;
    }
}
