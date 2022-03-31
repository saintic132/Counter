import React from 'react'
import s from './CounterButton.module.css'
import {mapDispatchToPropsType} from "./CounterButtonContainer";

type CounterButtonPropsType = {
    countNumber: number
    maxCountValue: number
    disableResetButton: boolean
    disableIncreaseButton: boolean
} & mapDispatchToPropsType

function CounterButton(props: CounterButtonPropsType) {

    const incCountButton = () => {
        if (props.countNumber < props.maxCountValue) {
            props.increaseCountNumber()
        }
    }

    return (
        <div className={s.button}>
            <button
                className={s.counterButton}
                disabled={props.countNumber === props.maxCountValue || props.disableIncreaseButton}
                onClick={incCountButton}
            >
                inc
            </button>

            <button
                className={s.counterButton}
                disabled={props.disableResetButton}
                onClick={props.resetCountNumber}
            >
                reset
            </button>
        </div>
    )
}

export default CounterButton