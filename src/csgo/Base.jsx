import React from "react";
import "./Base.css"
import "../assets/fonts/csgo_icons.ttf";

let invert = require("lodash/invert");

class CSIcon extends React.Component {
    getVal = val => {
        let icons = {
            0: "clown",
            1: "usp",
            2: "berettas",
            3: "five-seven",
            4: "glock",
            7: "ak47",
            8: "aug",
            9: "scout",
            10: "famas",
            11: "g3-sg1",
            13: "galil-ar",
            14: "m4a1",
            16: "m4a1-s",
            17: "mac-10",
            19: "pistol-1",
            24: "ump-45",
            25: "xm1014",
            26: "mag-7",
            27: "mp7",
            28: "negev",
            29: "sawed-off",
            30: "tec-9",
            31: "pistol-2",
            32: "pistol-3",
            33: "mp7",
            34: "mp9",
            35: "nova",
            36: "p90",
            38: "sg-553",
            39: "g3sg1",
            40: "sniper-1",
            42: "knife",
            43: "flashbang",
            44: "grenade",
            45: "smoke",
            46: "molotov",
            47: "decoy",
            48: "incindiary",
            49: "bomb",
            59: "knife2",
            60: "m249",
            61: "usp-s",
            63: "cz75-auto",
            64: "r8",
            100: "shield",
            101: "shield-partial",
            102: "defuse",
            500: "knife3",
            505: "knife4",
            506: "knife5",
            507: "knife6",
            508: "knife7",
            509: "knife8",
            512: "knife9",
            514: "knife10",
            515: "butterfly",
            516: "daggers"
        };
        if (Number.isInteger(val)) {
            return icons[val] || "";
        } else {
            return invert(icons)[val] || "";
        }
    }
    getWeapon = val => {
        let iconValue = (Number.isInteger(val) ? val : this.getVal(val));
        return String.fromCharCode(0xe000 + parseInt(iconValue));
    }
    render() {
        return (
            <span>
                {/*}
                (
                <span>{this.getVal(this.props.icon)} / </span>
                {*/}
                <i className="csgo-icon">{this.getWeapon(this.props.icon)}</i>
            </span>
        )
    }
}

export default CSIcon;