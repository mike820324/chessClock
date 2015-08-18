import React, { Component, PropTypes } from "react";
import { calculateTime } from "../../helper/calculateTime";

class TimeHistory extends Component {
    showTime(time) {
        const {sec, minute, hour} = calculateTime(time);
        return `${hour}:${minute}:${sec}`;
    }
    render() {
        const { history } = this.props;
        return (
            <ol>
                { history.map(time => <li> {this.showTime(time)} </li> ) }
            </ol>
        );
    }
}

TimeHistory.displayName = "TimeHistory";
TimeHistory.propTypes = {
    history: PropTypes.array.isRequired
};

export default TimeHistory;
