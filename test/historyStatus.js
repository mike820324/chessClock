import expect from "expect";

import { historyStatus } from "../app/reducers/historyStatus";
import { ADD_HISTORY } from "../app/constants/actionType";

describe("reducers/historyStatus", () => {
    it("initail value", () => {
        const expectedValue = {
            player1: [],
            player2: []
        };

        expect(
            historyStatus(undefined, {}).toJS()
        ).toEqual(expectedValue);
    });

    it("add history", () => {
        const player1ExpectedValue = {
            player1: [2],
            player2: []
        };

        expect(
            historyStatus(undefined, {
                type: ADD_HISTORY,
                player: "player1",
                time: 2
            }).toJS()
        ).toEqual(player1ExpectedValue);

        const player2ExpectedValue = {
            player1: [],
            player2: [2]
        };

        expect(
            historyStatus(undefined, {
                type: ADD_HISTORY,
                player: "player2",
                time: 2
            }).toJS()
        ).toEqual(player2ExpectedValue);
    });
});
