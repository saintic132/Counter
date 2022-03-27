import React from "react";
import s from "./CounterDisplay.module.css";

type CounterDisplayPropsType = {
    countNumber: number
    maxCountActivated: boolean
    valueIsEntering: boolean
    displayIncorrectValue: boolean
}

function CounterDisplay(props: CounterDisplayPropsType) {
    return (
        <div className={s.showTable}>
            {
                props.displayIncorrectValue
                    ? <span className={s.badValue}>Incorrect value!</span>
                    : <div>
                        {
                        !props.valueIsEntering &&
                        <span
                            className={props.maxCountActivated ? s.outputNumberRed : s.outputNumberDefault}>
                    {props.countNumber}
                </span>
                    }
                        {
                            props.valueIsEntering
                            &&
                            <span className={s.valueInProcess}>
                    enter values and press 'set'
                </span>
                        }
                    </div>
            }


        </div>
    )
}

export default CounterDisplay