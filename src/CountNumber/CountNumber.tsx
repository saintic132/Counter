import React from "react";
import s from "./CountNumber.module.css";

type CountNumberProps = {
    countNumber: number
    maxCountActivated: boolean
}

function CountNumber(props:CountNumberProps) {
    return (
        <div className={s.showTable}>
            <p className={props.maxCountActivated ? s.outputNumberRed : s.outputNumberDefault}>
                {props.countNumber}
            </p>
        </div>
    )
}

export default CountNumber