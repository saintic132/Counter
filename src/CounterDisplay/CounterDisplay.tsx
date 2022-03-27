import React from "react";
import s from "./CounterDisplay.module.css";

type CounterDisplayPropsType = {
    countNumber: number
    maxCountActivated: boolean
}

function CounterDisplay (props:CounterDisplayPropsType) {
    return (
        <div className={s.showTable}>
            <p className={props.maxCountActivated ? s.outputNumberRed : s.outputNumberDefault}>
                {props.countNumber}
            </p>
        </div>
    )
}

export default CounterDisplay