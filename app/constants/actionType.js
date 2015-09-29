const START_GAME = "START_GAME";
const END_GAME = "END_GAME";
const PAUSE_GAME = "PAUSE_GAME";

const ADD_PLAYER = "ADD_PLAYER";
const REMOVE_PLAYER = "REMOVE_PLAYER";
const MODIFY_PLAYER = "MODIFY_PLAYER";
const SWITCH_PLAYER = "SWITCH_PLAYER";

const ADD_HISTORY = "ADD_HISTORY";
const REMOVE_HISTORY = "REMOVE_HISTORY";

const START_TIMER = "START_TIMER";
const STOP_TIMER = "STOP_TIMER";

const ADD_CLOCK = "ADD_CLOCK";
const REMOVE_CLOCK = "REMOVE_CLOCK";
const RESET_CLOCK = "RESET_CLOCK";
const TIME_TICK = "TIME_TICK";

const DISPLAY_GAME_LOG = "DISPLAY_GAME_LOG";
const CLOSE_GAME_LOG = "CLOSE_GAME_LOG";

export {
    // action related to game status
    START_GAME,
    END_GAME,
    PAUSE_GAME,
    // action related to players
    ADD_PLAYER,
    REMOVE_PLAYER,
    MODIFY_PLAYER,
    SWITCH_PLAYER,
    // action related to history
    ADD_HISTORY,
    REMOVE_HISTORY,
    // action related to clock
    ADD_CLOCK,
    REMOVE_CLOCK,
    RESET_CLOCK,
    TIME_TICK,
    // action related to timer
    START_TIMER,
    STOP_TIMER,
    // action related to game log
    DISPLAY_GAME_LOG,
    CLOSE_GAME_LOG
};
