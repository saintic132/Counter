export type CounterReducersType =
    increaseCountNumberACType
    | resetCountNumberACType
    | setCountNumberACType
    | setMaxCountValueACType
    | setStartCountValueACType
    | setCounterValueDisplayACType
    | setErrorWithInvalidDateACType
    | setValidDateACType

type increaseCountNumberACType = ReturnType<typeof increaseCountNumberAC>
type resetCountNumberACType = ReturnType<typeof resetCountNumberAC>
type setCountNumberACType = ReturnType<typeof setCountNumberAC>
type setMaxCountValueACType = ReturnType<typeof setMaxCountValueAC>
type setStartCountValueACType = ReturnType<typeof setStartCountValueAC>
type setCounterValueDisplayACType = ReturnType<typeof setCounterValueDisplayAC>
type setErrorWithInvalidDateACType = ReturnType<typeof setErrorWithInvalidDateAC>
type setValidDateACType = ReturnType<typeof setValidDateAC>


export type initialCounterStateType = {
    countNumber: number
    maxCountValue: number
    localStartValue: number
    valueIsEntering: boolean
    displayIncorrectValue: boolean
    disableResetButton: boolean
    disableIncreaseButton: boolean
    maxCountValueForSet: number
    startCountValueForSet: number
    disableSetButton: boolean
}

let initialCounterState: initialCounterStateType = {
    countNumber: 0,
    maxCountValue: 5,
    localStartValue: 0,
    valueIsEntering: false,
    displayIncorrectValue: false,
    disableResetButton: true,
    disableIncreaseButton: false,
    maxCountValueForSet: 7,
    startCountValueForSet: 0,
    disableSetButton: false
}

const counterReducer = (state: initialCounterStateType = initialCounterState, action: CounterReducersType): initialCounterStateType => {
    switch (action.type) {
        case 'INCREASE-COUNT-NUMBER':
            return {
                ...state,
                countNumber: state.countNumber + 1,
                disableResetButton: false
            }
        case 'RESET-COUNT-NUMBER':
            return {
                ...state,
                countNumber: state.localStartValue,
                disableResetButton: true,
            }
        case 'SET-COUNT-NUMBER': {
            return {
                ...state,
                countNumber: action.number
            }
        }
        case 'INCREASE-TO-SET-MAX-COUNT-VALUE': {
            return {
                ...state,
                maxCountValueForSet: action.number,
            }
        }
        case 'INCREASE-TO-SET-START-COUNT-VALUE': {
            return {
                ...state,
                startCountValueForSet: action.number
            }
        }
        case 'SET-ERROR-WITH-INVALID-DATE': {
            return {
                ...state,
                disableSetButton: true,
                displayIncorrectValue: true,
                disableResetButton: true,
                disableIncreaseButton: true
            }
        }
        case 'SET-VALID-DATE': {
            return {
                ...state,
                disableSetButton: false,
                displayIncorrectValue: false,
                valueIsEntering: true,
                disableResetButton: true,
                disableIncreaseButton: true
            }
        }
        case 'SET-COUNTER-VALUE-DISPLAY': {
            return {
                ...state,
                countNumber: state.startCountValueForSet,
                maxCountValue: state.maxCountValueForSet,
                localStartValue: state.startCountValueForSet,
                disableResetButton: true,
                disableIncreaseButton: false,
                valueIsEntering: false
            }
        }
        default:
            return state
    }
}

export const increaseCountNumberAC = () => ({type: 'INCREASE-COUNT-NUMBER'} as const)
export const resetCountNumberAC = () => ({type: 'RESET-COUNT-NUMBER'} as const)

export const setMaxCountValueAC = (number: number) => ({type: 'INCREASE-TO-SET-MAX-COUNT-VALUE', number} as const)
export const setStartCountValueAC = (number: number) => ({type: 'INCREASE-TO-SET-START-COUNT-VALUE', number} as const)
export const setCountNumberAC = (number: number) => ({type: 'SET-COUNT-NUMBER', number} as const)

export const setErrorWithInvalidDateAC = () => ({type: 'SET-ERROR-WITH-INVALID-DATE'} as const)
export const setValidDateAC = () => ({type: 'SET-VALID-DATE'} as const)

export const setCounterValueDisplayAC = () => ({type: 'SET-COUNTER-VALUE-DISPLAY'} as const)


export default counterReducer