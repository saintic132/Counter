import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './CounterButton.module.css'

type CounterButtonPropsType = {
    disable: boolean
} & DefaultButtonPropsType

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function CounterButton(props: CounterButtonPropsType) {

    return (
        <div >
            <button
                className={s.counterButton}
                disabled={props.disable}

                {...props}
            />
        </div>
    )
}

export default CounterButton