import React, {useState} from 'react';
import s from './App.module.css'
import CounterButton from "./CounterButton/CounterButton";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import SetCounter from "./SetCounter/SetCounter";

function App() {

    let [countNumber, setCountNumber] = useState<number>(0);
    let [maxCountValue, setMaxCountValue] = useState<number>(5);
    let [valueIsEntering, setValueIsEntering] = useState<boolean>(false);
    let [displayIncorrectValue, setDisplayIncorrectValue] = useState<boolean>(false);
    let [disableButton, setDisableButton] = useState<boolean>(true);

    let maxCountActivated = maxCountValue === countNumber

    const increaseCountNumber = () => {
        if (countNumber < maxCountValue) {
            setCountNumber(countNumber + 1)
            setDisableButton(false)
        }
    }

    const resetCountNumber = () => {
        setCountNumber(0)
        setDisableButton(true)
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
                    />
                </div>
            </div>
            <div className={s.displayCounter}>
                <div className={s.bodyCounter}>
                    <div>

                        <CounterDisplay
                            countNumber={countNumber}
                            maxCountActivated={maxCountActivated}
                            valueIsEntering={valueIsEntering}
                            displayIncorrectValue={displayIncorrectValue}
                        />

                    </div>
                    <div className={s.button}>

                        <CounterButton
                            onClick={increaseCountNumber}
                            disable={maxCountActivated}
                        >
                            inc
                        </CounterButton>

                        <CounterButton
                            onClick={resetCountNumber}
                            disable={disableButton}
                        >
                            reset
                        </CounterButton>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default App;
