import React from "react";
import Container from "../base/Container"
import CSIcon from "./Base"
import "./KillFeedItem.css";

class KillFeedItem extends Container {
    render() {
        let icons = [];
        let playerType = this.props.killer;
        let player2Text = this.props.player2 || "";
        if (this.props.weapon) {
            icons.push(<CSIcon icon={this.props.weapon}/>);
            if (this.props.headshot) {
                icons.push(<CSIcon icon="clown"/>);
            }
            if (this.props.wallbang) {
                icons.push(<CSIcon icon="clown"/>);
            }
        } else if (this.props.bombPlanted){
            icons.push(<CSIcon icon="bomb" />);
            playerType = "t";
            player2Text = `Site ${this.props.site}`;
        } else if (this.props.bombDefused){
            icons.push(<CSIcon icon="defuse" />);
            icons.push(<CSIcon icon="bomb" />);
            playerType = "ct";
            player2Text = `Site ${this.props.site}`;
        }
        let killerClasses = `cs-killfeed-item-${playerType} cs-killfeed-item-killer`;
        let killedClasses = `cs-killfeed-item-${this.props.killed} cs-killfeed-item-killed`;

        return (
            <div>
                <div className="cs-killfeed-item">
                    <span className={killerClasses}>{this.props.player1} </span>
                    <span className="cs-killfeed-item-icons">
                        {icons}
                    </span>
                    <span className={killedClasses}> {player2Text} </span>
                </div>
            </div>
        )
    }
}

export default KillFeedItem;