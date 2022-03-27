import React, {useState} from 'react';
import s from './App.module.css'

function App() {

    let [countNumber, setCountNumber] = useState<number>(0);
    let maxCountNumber = 5


    const increaseCountNumber = () => {
        if (countNumber < maxCountNumber) {
            setCountNumber(countNumber + 1)
        }
    }

    const resetCountNumber = () => {
        setCountNumber(0)
    }

    return (
        <div className={s.app}>
            <div className={s.body}>
                <div className={s.showTable}>
                    <p className={countNumber === maxCountNumber ? s.outputNumberRed : s.outputNumberDefault}>
                        {countNumber}
                    </p>
                </div>
                <div className={s.button}>
                    <div className={s.button__increase}>
                        <button
                            onClick={increaseCountNumber}
                            disabled={countNumber === maxCountNumber}
                        >
                            inc
                        </button>
                    </div>
                    <div className={s.button__reset}>
                        <button
                            onClick={resetCountNumber}
                            disabled={countNumber !== maxCountNumber}
                        >
                            reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
