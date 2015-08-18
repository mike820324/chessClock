import { Map } from "immutable";
import { TIME_TICK, RESET_TIME } from "../constants/actionType";

const clockInitailState = Map(
    {
        game: 0,
        player: 0
    }
);

export function clockStatus(state = clockInitailState, action) {
    if(action.type === TIME_TICK) {
        const temp1 = state.set("game", state.get("game") + 1);
        return temp1.set("player", state.get("player") + 1);
    }
    else if(action.type === RESET_TIME) {
        if(action.timeType === "player") {
            return state.set("player", 0);
        }

        else if(action.timeType === "game") {
            return state.set("game", 0);
        }
        return state;
    }

    else {
        return state;
    }
}
