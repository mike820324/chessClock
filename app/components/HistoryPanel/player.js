import React, { Component, PropTypes } from "react";
import TimeHistory from "./TimeHistory";

class Player extends Component {
    render() {
        const { playerId, history, style } = this.props;

        return (
            <div style={style}>
                <h1> {playerId} </h1>
                <TimeHistory history={history}/>
            </div>
        );
    }
}

Player.displayName = "Player";
Player.propTypes = {
    style: PropTypes.object.isRequired,
    playerId: PropTypes.string.isRequired,
    history: PropTypes.array.isRequired
};

export default Player;
