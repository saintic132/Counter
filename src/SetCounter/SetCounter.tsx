import React from "react";
import s from './SetCounter.module.css'
import {mapDispatchToPropsType} from "./SetCounterContainer";

type SetCounterPropsType = {
    maxCountValueForSet: number
    startCountValueForSet: number
    disableSetButton: boolean
} & mapDispatchToPropsType

function SetCounter(props: SetCounterPropsType) {

    const increaseMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) === props.startCountValueForSet || props.startCountValueForSet <= 0) {
            props.setDisableSetButton(true)
            props.setDisplayIncorrectValue(true)
            props.setDisableResetButton(true)
            props.setDisableIncreaseButton(true)
        }

        if (Number(e.currentTarget.value) > props.startCountValueForSet && Number(e.currentTarget.value) > 0 && props.startCountValueForSet >= 0) {
            props.setDisableSetButton(false)
            props.setDisplayIncorrectValue(false)
            props.setDisplayEnterValue(true)
            props.setDisableResetButton(true)
            props.setDisableIncreaseButton(true)
        }
        props.setMaxCountValue(Number(e.currentTarget.value))
    }
    const increaseStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= props.maxCountValueForSet) {
            props.setDisableSetButton(true)
            props.setDisplayIncorrectValue(true)
            props.setDisableResetButton(true)
            props.setDisableIncreaseButton(true)
        }
        if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) < props.maxCountValueForSet) {
            props.setDisableSetButton(false)
            props.setDisplayIncorrectValue(false)
            props.setDisplayEnterValue(true)
            props.setDisableResetButton(true)
            props.setDisableIncreaseButton(true)

        }
        props.setStartCountValue(Number(e.currentTarget.value))
    }

    const counterValueDisplay = () => {
        props.setCounterValueDisplay()
    }

    return (
        <div className={s.value}>
            <div className={s.insertValue}>
                <div className={s.value__max_value}>
                    <div className={s.value__title}>
                        max value:
                    </div>
                    <div>
                        <input
                            className={!props.disableSetButton ? s.input : s.inputError}
                            value={props.maxCountValueForSet}
                            onChange={increaseMaxValue}
                            type="number"
                        />
                    </div>
                </div>
                <div className={s.value__start_value}>
                    <div className={s.value__title}>
                        start value:
                    </div>
                    <div>
                        <input
                            className={!props.disableSetButton ? s.input : s.inputError}
                            value={props.startCountValueForSet}
                            onChange={increaseStartValue}
                            type="number"
                        />
                    </div>
                </div>
            </div>
            <div className={s.setValue}>
                <button
                    className={s.setButton}
                    onClick={counterValueDisplay}
                    disabled={props.disableSetButton}
                >
                    set value
                </button>
            </div>
        </div>
    )
}

export default SetCounter