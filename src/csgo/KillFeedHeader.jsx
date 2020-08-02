import React from "react";
import KillFeedTitle from "./KillFeedTitle";
import "./KillFeedHeader.css";

class KillFeedHeader extends React.Component {
    getTitle = () => {
        return `${this.props.matchName}: ${this.props.teamLeft} vs. ${this.props.teamRight}`;
    }
    getProgressClasses = (team, right) => {
        let classes = [`cs-killfeed-team-${team}`];
        if (right){
            classes.push();
        }
        return classes.join(' ');
    }
    getTeamClass = team => {
        return `cs-killfeed-team-${team}`;
    }

    render() {
        return (
            <div className="cs-killfeed-header">
                <KillFeedTitle title={this.getTitle()} />
                <div className="cs-killfeed-content">
                    <p className="cs-killfeed-clock">{this.props.timeLeft}</p>
                    <div className="cs-killfeed-progress-container">
                        <p className={this.getTeamClass(this.props.teamLeftType) + " cs-killfeed-teamname"}>
                            {this.props.teamLeft}
                        </p>
                        <p className={this.getTeamClass(this.props.teamLeftType) + " cs-killfeed-score"}>
                            {this.props.scoreLeft}
                        </p>
                        <progress
                            className={this.getTeamClass(this.props.teamLeftType)}
                            value={this.props.scoreLeft} max={this.props.playingTo}
                        />
                    </div>
                    <div className="cs-killfeed-progress-container">
                        <p className={this.getTeamClass(this.props.teamRightType + " cs-killfeed-teamname")}>
                            {this.props.teamRight}
                        </p>
                        <p className={this.getTeamClass(this.props.teamRightType) + " cs-killfeed-score"}>
                            {this.props.scoreRight}
                        </p>
                        <progress
                            className={this.getTeamClass(this.props.teamRightType) + " cs-killfeed-progress-right"}
                            value={this.props.scoreRight} max={this.props.playingTo}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default KillFeedHeader;