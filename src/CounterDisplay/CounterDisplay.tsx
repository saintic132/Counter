import React from "react";
import s from "./CounterDisplay.module.css";
import CounterButtonContainer from "../CounterButton/CounterButtonContainer";

type CounterDisplayPropsType = {
    countNumber: number
    maxCountValue: number
    valueIsEntering: boolean
    displayIncorrectValue: boolean
}

function CounterDisplay(props: CounterDisplayPropsType) {
    return (
        <>
            <div className={s.showTable}>
                {
                    props.displayIncorrectValue
                        ? <span className={s.badValue}>Incorrect value!</span>
                        : <div>
                            {
                                !props.valueIsEntering &&
                                <span
                                    className={props.countNumber === props.maxCountValue ? s.outputNumberRed : s.outputNumberDefault}>
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
            <div>
                <CounterButtonContainer/>
            </div>
        </>
    )
}

export default CounterDisplay