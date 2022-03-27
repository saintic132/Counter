import React, {useState} from 'react';
import s from './App.module.css'
import CounterButton from "./CounterButton/CounterButton";
import CounterDisplay from "./CounterDisplay/CounterDisplay";

function App() {

    let [countNumber, setCountNumber] = useState<number>(0);
    let [disableButton, setDisableButton] = useState<boolean>(true);
    let maxCountNumber = 5

    let maxCountActivated = maxCountNumber === countNumber

    const increaseCountNumber = () => {
        if (countNumber < maxCountNumber) {
            setCountNumber(countNumber + 1)
            setDisableButton(false)
        }
    }

    const resetCountNumber = () => {
        setCountNumber(0)
        setDisableButton(true)
    }

    return (
        <div className={s.app}>
            <div className={s.body}>
                <div>

                    <CounterDisplay
                        countNumber={countNumber}
                        maxCountActivated={maxCountActivated}
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
    );
}

export default App;
