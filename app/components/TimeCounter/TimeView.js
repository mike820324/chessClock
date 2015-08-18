import React, { Component, PropTypes } from "react";

import { calculateTime } from "../../helper/calculateTime";

class TimeView extends Component {
    calculateTime(time) {
        const { hour, minute, sec } = calculateTime(time);
        return `${hour}:${minute}:${sec}`;
    }

    render() {
        const { time, timeType } = this.props;
        const showString = `${timeType} : ${this.calculateTime(time)}`;
        const style = {
            textAlign: "center"
        };

        return (
            <div>
                <h1 style={style}>{ showString }</h1>
            </div>
        );
    }
}

TimeView.displayName = "TimeView";
TimeView.propTypes = {
    timeType: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired
};

export default TimeView;
