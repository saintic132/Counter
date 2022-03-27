import React, {useState} from 'react';
import s from './App.module.css'
import Button from "./Button/Button";
import CountNumber from "./CountNumber/CountNumber";

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

                    <CountNumber
                        countNumber={countNumber}
                        maxCountActivated={maxCountActivated}
                    />

                </div>
                <div className={s.button}>

                    <Button
                        onClick={increaseCountNumber}
                        disable={maxCountActivated}
                    >
                        inc
                    </Button>

                    <Button
                        onClick={resetCountNumber}
                        disable={disableButton}
                    >
                        reset
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default App;
