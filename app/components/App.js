import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import { startGame, endGame, switchPlayer, resetClock, addHistory, displayGameLog, closeGameLog } from "../actions";
import { GAME_START, GAME_END, GAME_PAUSE } from "../constants/gameStatusType";

import HistoryPanel from "./HistoryPanel";
import TimeView from "./TimeCounter/TimeView";

class App extends Component {
    logTime() {
        const { dispatch, gameStatus, clockStatus } = this.props;
        if(gameStatus.status === GAME_START) {
            dispatch(addHistory(gameStatus.currentPlayer, clockStatus.player));
            dispatch(switchPlayer());
            dispatch(resetClock("player"));
        }
    }

    onClickHandler() {
        const { dispatch, gameStatus } = this.props;
        if(gameStatus.status === GAME_START) {
            dispatch(endGame());
        } else {
            dispatch(startGame());
        }
    }

    showGameStatus() {
        const { gameStatus } = this.props;
        if(gameStatus.status === GAME_START) {
            return "start";
        } else if(gameStatus.status === GAME_END) {
            return "end";
        } else if(gameStatus.status === GAME_PAUSE) {
            return "paused";
        }
    }

    onDisplayGameLog() {
        const { dispatch } = this.props;
        dispatch(displayGameLog());
    }

    onCloseGameLog() {
        const { dispatch } = this.props;
        dispatch(closeGameLog());
    }

    render() {
        const { gameStatus, historyStatus, clockStatus, gameLogStatus } = this.props;
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
                <button onClick={this.onDisplayGameLog.bind(this)}>
                    history
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
                <Modal isOpen={gameLogStatus.displayGameLog}>
                    Hello
                    <button onClick={this.onCloseGameLog.bind(this)}>Close</button>
                </Modal>
            </div>
        );
    }
}
App.displayName = "App";
App.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    gameStatus: React.PropTypes.object.isRequired,
    historyStatus: React.PropTypes.object.isRequired,
    clockStatus: React.PropTypes.object.isRequired,
    gameLogStatus: React.PropTypes.object.isRequired
};

function select(state){
    return {
        gameStatus: state.gameStatus.toJS(),
        historyStatus: state.historyStatus.toJS(),
        clockStatus: state.clockStatus.toJS(),
        gameLogStatus: state.gameLogStatus.toJS()
    };
}

export default connect(select)(App);
