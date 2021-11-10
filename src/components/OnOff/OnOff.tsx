import React, {useState} from "react";

type OnOffPropsType = {
    on: boolean;
    onChange: (on: boolean) => void;
}

const OnOff: React.FC<OnOffPropsType> = (props) => {
    console.log('on' + props.on);

    const onStyle = {
        marginTop: "5px",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    };

    const offStyle = {
        marginTop: "5px",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    };

    const indicatorStyle = {
        marginTop: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default OnOff;