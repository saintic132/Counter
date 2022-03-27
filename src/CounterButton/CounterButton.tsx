import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './CounterButton.module.css'

type CounterButtonPropsType = {
    disable: boolean
} & DefaultButtonPropsType

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function CounterButton(props: CounterButtonPropsType) {


    return (
            <button
                className={s.default}
                disabled={props.disable}
                {...props}
            />
    )
}

export default CounterButton