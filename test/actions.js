import expect from "expect";
import { switchPlayer, addHistory } from "../app/actions";
import { timeTick, resetClock } from "../app/actions";
import { SWITCH_PLAYER, ADD_HISTORY } from "../app/constants/actionType";
import { TIME_TICK, RESET_CLOCK } from "../app/constants/actionType";

describe("actions", () => {
    it("switch player action", () => {
        const expectValue = {
            type: SWITCH_PLAYER
        };
        expect(switchPlayer()).toEqual(expectValue);
    });

    it("add history action", () => {
        const expectValue = {
            type: ADD_HISTORY,
            player: "player1",
            time: 2
        };

        expect(addHistory("player1", 2)).toEqual(expectValue);
    });

    it("time tick action", () => {
        const expectValue = {
            type: TIME_TICK
        };

        expect(timeTick()).toEqual(expectValue);
    });

    it("reset clock action", () => {
        const expectValue = {
            type: RESET_CLOCK,
            timeType: "game"
        };

        expect(resetClock("game")).toEqual(expectValue);
    });
});
