import React, { Component } from "react";
import { connect } from "react-redux";

import { startGame, endGame, switchPlayer, resetTime, addHistory } from "../actions";
import HistoryPanel from "./HistoryPanel";
import TimeView from "./TimeCounter/TimeView";

import { GAME_START, GAME_END, GAME_PAUSE } from "../constants/gameStatusType";

class App extends Component {
    logTime() {
        const { dispatch, gameStatus, clockStatus } = this.props;
        dispatch(addHistory(gameStatus.currentPlayer, clockStatus.player));
        dispatch(switchPlayer());
        dispatch(resetTime("player"));
    }

    onClickHandler() {
        const { dispatch, gameStatus } = this.props;
        if(gameStatus.gameStart === GAME_START) {
            dispatch(endGame());
        } else {
            dispatch(startGame());
        }
    }

    showGameStatus() {
        const { gameStatus } = this.props;
        if(gameStatus.gameStart === GAME_START) {
            return "start";
        } else if(gameStatus.gameStart === GAME_END) {
            return "end";
        } else if(gameStatus.gameStart === GAME_PAUSE) {
            return "paused";
        }
    }

    render() {
        const { gameStatus, historyStatus, clockStatus } = this.props;
        const style = {
            textAlign: "center"
        };

        return (
            <div>
                <h1 style={style}> Chess Clock </h1>
                <h1>
                    {gameStatus.currentPlayer}
                </h1>

                <button onClick={this.onClickHandler.bind(this)}>
                    {this.showGameStatus()}
                </button>
                <button onClick={this.logTime.bind(this)}>
                    log time
                </button>
                <hr/>
                <TimeView timeType="Game Time"
                    time={clockStatus.game}
                />

                <TimeView timeType="Player Time"
                    time={clockStatus.player}
                />
                <hr/>
                <HistoryPanel
                    player1={historyStatus.player1}
                    player2={historyStatus.player2}
                />
            </div>
        );
    }
}
App.displayName = "App";
App.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    gameStatus: React.PropTypes.object.isRequired,
    historyStatus: React.PropTypes.object.isRequired,
    clockStatus: React.PropTypes.object.isRequired
};

function select(state){
    return {
        gameStatus: state.gameStatus.toJS(),
        historyStatus: state.historyStatus.toJS(),
        clockStatus: state.clockStatus.toJS()
    };
}

export default connect(select)(App);
