import React from "react";
import s from "./SetCounterButton.module.css";
import {mapDispatchToSetCounterButtonType} from "./SetCounterButtonContainer";

type SetCounterButtonPropsType = {
    disableSetButton: boolean
} & mapDispatchToSetCounterButtonType

function SetCounterButton(props: SetCounterButtonPropsType) {

    const counterValueDisplay = () => {
        props.setCounterValueDisplay()
    }

    return (
        <div className={s.setValue}>
            <button
                className={s.setButton}
                onClick={counterValueDisplay}
                disabled={props.disableSetButton}
            >
                set value
            </button>
        </div>
    )
}

export default SetCounterButton