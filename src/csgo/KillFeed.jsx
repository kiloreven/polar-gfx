import React from "react";
import KillFeedItem from "./KillFeedItem";
import KillFeedHeader from "./KillFeedHeader";
import "./KillFeed.css";

class KillFeed extends React.Component {
    render() {
        return (
            <div className="cs-killfeed" style={{"margin-top": this.props.yPos, "margin-left": this.props.xPos}}>
                <KillFeedHeader
                    timeLeft={this.props.timeLeft} scoreLeft={this.props.scoreLeft} scoreRight={this.props.scoreRight}
                    matchpointsLeft={this.props.matchpointsLeft} matchpointsRight={this.props.matchpointsRight}
                    playingTo={this.props.playingTo} teamLeft={this.props.teamLeft} teamRight={this.props.teamRight}
                    teamLeftType={this.props.teamLeftType} teamRightType={this.props.teamRightType}
                    matchName={this.props.matchName}
                />
                <KillFeedItem player1="SuperKILLAH [1337CLAN]" player2="Some poor sod" weapon="p90" headshot wallbang killer="ct" killed="t"/>
                <KillFeedItem player1="Bar" player2="Ba" weapon="ak47" killer="t" killed="ct" wallbang />
                <KillFeedItem player1="Bar" player2="foo" weapon="knife" killer="ct" killed="t"/>
                <KillFeedItem player1="Bar" site="A" bombPlanted />
                <KillFeedItem player1="Foo" site="A" bombDefused />
                {/*}
                {[...Array(600).keys()].map(function(n){
                    return [
                       <span>
                           <KillFeedItem player1="Bar" player2="Baz" weapon={n}/>
                        </span>
                    ]
                })}
           {*/}
            </div>
        )
    }
}

export default KillFeed;