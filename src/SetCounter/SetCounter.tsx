import React from "react";
import s from './SetCounter.module.css'
import {mapDispatchToPropsType} from "./SetCounterContainer";
import SetCounterButtonContainer from "./SetCounterButton/SetCounterButtonContainer";

type SetCounterPropsType = {
    maxCountValueForSet: number
    startCountValueForSet: number
    disableSetButton: boolean
} & mapDispatchToPropsType

function SetCounter(props: SetCounterPropsType) {

    const increaseMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) === props.startCountValueForSet || props.startCountValueForSet <= 0) {
            props.setErrorWithInvalidDate()
        }
        if (Number(e.currentTarget.value) > props.startCountValueForSet && Number(e.currentTarget.value) > 0 && props.startCountValueForSet >= 0) {
            props.setValidDate()
        }
        props.setMaxCountValue(Number(e.currentTarget.value))
    }
    const increaseStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= props.maxCountValueForSet) {
            props.setErrorWithInvalidDate()
        }
        if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) < props.maxCountValueForSet) {
            props.setValidDate()
        }
        props.setStartCountValue(Number(e.currentTarget.value))
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

            <SetCounterButtonContainer />

        </div>
    )
}

export default SetCounter