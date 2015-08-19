import expect from "expect";
import { Map } from "immutable";
import { clockStatus } from "../app/reducers/clockStatus";
import { TIME_TICK, RESET_CLOCK } from "../app/constants/actionType";

describe("reducers/clockStatus", () => {
    it("initial value", () => {
        const expectedValue = {
            game: 0,
            player: 0
        };
        expect(
            clockStatus(undefined, {}).toJS()
        ).toEqual(expectedValue);
    });

    it("time tick action should increase the value", () => {
        const expectedValue = {
            game: 1,
            player: 1
        };
        expect(
            clockStatus(undefined, {type: TIME_TICK}).toJS()
        ).toEqual(expectedValue);
    });

    it("reset time action should reset the value", () => {
        const initialValue = Map({
            game: 10,
            player: 10
        });

        const gameExpectedValue = {
            game: 0,
            player: 10
        };

        const playerExpectedValue = {
            game: 10,
            player: 0
        };

        expect(
            clockStatus(initialValue, {
                type: RESET_CLOCK,
                timeType: "game"
            }).toJS()
        ).toEqual(gameExpectedValue);

        expect(
            clockStatus(initialValue, {
                type: RESET_CLOCK,
                timeType: "player"
            }).toJS()
        ).toEqual(playerExpectedValue);
    });
});
