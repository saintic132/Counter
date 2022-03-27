import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
    disable: boolean
} & DefaultButtonPropsType

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function Button(props: ButtonPropsType) {


    return (
            <button
                className={s.default}
                disabled={props.disable}
                {...props}
            />
    )
}

export default Button