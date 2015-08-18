import React, { Component, PropTypes } from "react";

import Player from "./player";

class Panel extends Component {
    render() {
        const { player1, player2 } = this.props;
        const containerStyle = {
            position: "relative"
        };

        const titleStyle = {
            textAlign: "center"
        };

        const player1Style = {
            position: "absolute",
            left: "0px"
        };
        const player2Style = {
            position: "absolute",
            right: "0px"
        };


        return (
            <div style={containerStyle}>
                <h1 style={titleStyle}> History </h1>
                <Player style={player1Style}
                    playerId="player1"
                    history={player1}
                />

                <Player style={player2Style}
                    playerId="player2"
                    history={player2}
                />
            </div>
        );
    }
}

Panel.displayName = "Panel";
Panel.propTypes = {
    player1: PropTypes.array.isRequired,
    player2: PropTypes.array.isRequired
};

export default Panel;
