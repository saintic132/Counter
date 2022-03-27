import React, {useState} from "react";
import s from './SetCounter.module.css'

type SetCounterPropsType = {
    setCountMaxValue: (number: number) => void
    setCountValue: (number: number) => void
    changeEnterValueMode: (status: boolean) => void
    setIncorrectStatus: (status: boolean) => void
}

function SetCounter(props: SetCounterPropsType) {

    let [maxValue, setMaxValue] = useState<number>(5);
    let [startValue, setStartValue] = useState<number>(0);
    let [disableSetButton, setDisableSetButton] = useState<boolean>(false);


    const increaseMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) === startValue) {
            setDisableSetButton(true)
            props.setIncorrectStatus(true)
        }
        if (Number(e.currentTarget.value) > startValue) {
            setDisableSetButton(false)
            props.changeEnterValueMode(true)
            props.setIncorrectStatus(false)
        }
        setMaxValue(Number(e.currentTarget.value))
    }
    const increaseStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= maxValue) {
            setDisableSetButton(true)
            props.setIncorrectStatus(true)
        }

        if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) < maxValue) {
            setDisableSetButton(false)
            props.changeEnterValueMode(true)
            props.setIncorrectStatus(false)
        }
        setStartValue(Number(e.currentTarget.value))
    }

    const setCounterValueDisplay = () => {
        props.setCountMaxValue(maxValue)
        props.setCountValue(startValue)
        props.changeEnterValueMode(false)

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
                            className={!disableSetButton ? s.input : s.inputError}
                            value={maxValue}
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
                            className={!disableSetButton ? s.input : s.inputError}
                            value={startValue}
                            onChange={increaseStartValue}
                            type="number"
                        />
                    </div>
                </div>
            </div>
            <div className={s.setValue}>
                <button
                    className={s.setButton}
                    onClick={setCounterValueDisplay}
                    disabled={disableSetButton}
                >set value
                </button>
            </div>
        </div>
    )
}

export default SetCounter