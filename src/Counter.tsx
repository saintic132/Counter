import React, {useState} from 'react';
import s from './Counter.module.css'
import CounterButton from "./CounterButton/CounterButton";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import SetCounter from "./SetCounter/SetCounter";

function Counter() {


    let [countNumber, setCountNumber] = useState<number>(0);
    let [maxCountValue, setMaxCountValue] = useState<number>(5);
    let [localStartValue, setLocalStartValue] = useState<number>(0);
    let [valueIsEntering, setValueIsEntering] = useState<boolean>(false);
    let [displayIncorrectValue, setDisplayIncorrectValue] = useState<boolean>(false);
    let [disableResetButton, setDisableResetButton] = useState<boolean>(true);

    let maxCountActivated = maxCountValue === countNumber

    const increaseCountNumber = () => {
        if (countNumber < maxCountValue) {
            setCountNumber(countNumber + 1)
            setDisableResetButton(false)
        }
    }

    const resetCountNumber = () => {
        setCountNumber(localStartValue)
        setDisableResetButton(true)
    }


    const setCountMaxValue = (number: number) => {
        setMaxCountValue(number)
    }
    const setCountValue = (number: number) => {
        setCountNumber(number)
    }
    const changeEnterValueMode = (status: boolean) => {
        setValueIsEntering(status)
    }
    const setIncorrectStatus = (status: boolean) => {
        setDisplayIncorrectValue(status)
    }


    return (

        <div className={s.app}>
            <div className={s.counterSettings}>
                <div className={s.setCounter}>
                    <SetCounter
                        setCountMaxValue={setCountMaxValue}
                        setCountValue={setCountValue}
                        changeEnterValueMode={changeEnterValueMode}
                        setIncorrectStatus={setIncorrectStatus}
                        setLocalStartValue={setLocalStartValue}
                        setDisableResetButton={setDisableResetButton}
                        resetCountNumber={resetCountNumber}
                    />
                </div>
            </div>
            <div className={s.displayCounter}>
                <div className={s.bodyCounter}>

                    <CounterDisplay
                        countNumber={countNumber}
                        maxCountActivated={maxCountActivated}
                        valueIsEntering={valueIsEntering}
                        displayIncorrectValue={displayIncorrectValue}
                    />


                    <div className={s.button}>
                        <CounterButton
                            onClick={increaseCountNumber}
                            disable={maxCountActivated}
                        >
                            inc
                        </CounterButton>

                        <CounterButton
                            onClick={resetCountNumber}
                            disable={disableResetButton}
                        >
                            reset
                        </CounterButton>
                    </div>


                </div>
            </div>
        </div>

    );
}

export default Counter;
