import React, {useEffect, useState} from "react";
import {ClockPointer} from "./ClockPointer";

type PropsType = {

}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('Tick');
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    const get2DigitsString = (num: number) => num < 10 ? "0" + num : num;

    return <div>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
        {/*<ClockPointer />*/}
    </div>
}