import React from "react";
import "./KillFeedTitle.css";

class KillFeedTitle extends React.Component {
    render() {
        return (
            <h3 className="cs-killfeed-title">{this.props.title}</h3>
        )
    }
}

export default KillFeedTitle;