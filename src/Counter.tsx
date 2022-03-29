import React from 'react';
import s from './Counter.module.css'
import CounterDisplayContainer from "./CounterDisplay/CounterDisplayContainer";
import SetCounterContainer from "./SetCounter/SetCounterContainer";

function Counter() {


    return (

        <div className={s.app}>
            <div className={s.counterSettings}>
                <div className={s.setCounter}>

                    <SetCounterContainer/>

                </div>
            </div>
            <div className={s.displayCounter}>
                <div className={s.bodyCounter}>

                    <CounterDisplayContainer/>

                </div>
            </div>
        </div>

    );
}

export default Counter;
