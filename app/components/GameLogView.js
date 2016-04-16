import React, { Component, PropTypes } from "react";

class GameLogView extends Component {
    render() {
        const { gameLog } = this.props;
        return (
            <tr>
                <td>{gameLog.gameDate}</td>
                <td>{gameLog.playerBlack}</td>
                <td>{gameLog.playerWhite}</td>
                <td>{gameLog.winner}</td>
            </tr>
        );
    }
}

GameLogView.displayName = "GameLogView";
GameLogView.propType = {
    gameLog: PropTypes.object.isRequired
};

export default GameLogView;
