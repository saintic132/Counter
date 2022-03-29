export type CounterReducersType =
    increaseCountNumberACType
    | resetCountNumberACType
    | setCountNumberACType
    | setMaxCountValueACType
    | setStartCountValueACType
    | setDisableSetButtonACType
    | setDisplayIncorrectValueACType
    | setDisplayEnterValueACType
    | setDisableResetButtonACType
    | setDisableIncreaseButtonACType
    | setCounterValueDisplayACType

type increaseCountNumberACType = ReturnType<typeof increaseCountNumberAC>
type resetCountNumberACType = ReturnType<typeof resetCountNumberAC>
type setCountNumberACType = ReturnType<typeof setCountNumberAC>
type setMaxCountValueACType = ReturnType<typeof setMaxCountValueAC>
type setStartCountValueACType = ReturnType<typeof setStartCountValueAC>
type setDisableSetButtonACType = ReturnType<typeof setDisableSetButtonAC>
type setDisplayIncorrectValueACType = ReturnType<typeof setDisplayIncorrectValueAC>
type setDisplayEnterValueACType = ReturnType<typeof setDisplayEnterValueAC>
type setDisableResetButtonACType = ReturnType<typeof setDisableResetButtonAC>
type setDisableIncreaseButtonACType = ReturnType<typeof setDisableIncreaseButtonAC>
type setCounterValueDisplayACType = ReturnType<typeof setCounterValueDisplayAC>


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
            if (state.countNumber < state.maxCountValue)
                return {
                    ...state,
                    countNumber: state.countNumber + 1,
                    disableResetButton: false
                }
            return state
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
        case 'SET-DISABLE-SET-BUTTON': {
            return {
                ...state,
                disableSetButton: action.status
            }
        }
        case 'SET-DISPLAY-INCORRECT-VALUE': {
            return {
                ...state,
                displayIncorrectValue: action.status
            }
        }
        case 'SET-DISPLAY-ENTER-VALUE': {
            return {
                ...state,
                valueIsEntering: action.status
            }
        }
        case 'SET-DISABLE-RESET-BUTTON': {
            return {
                ...state,
                disableResetButton: action.status
            }
        }
        case 'SET-DISABLE-INCREASE-BUTTON': {
            return {
                ...state,
                disableIncreaseButton: action.status
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
export const setDisableSetButtonAC = (status: boolean) => ({type: 'SET-DISABLE-SET-BUTTON', status} as const)
export const setDisplayIncorrectValueAC = (status: boolean) => ({type: 'SET-DISPLAY-INCORRECT-VALUE', status} as const)
export const setDisplayEnterValueAC = (status: boolean) => ({type: 'SET-DISPLAY-ENTER-VALUE', status} as const)
export const setDisableResetButtonAC = (status: boolean) => ({type: 'SET-DISABLE-RESET-BUTTON', status} as const)
export const setDisableIncreaseButtonAC = (status: boolean) => ({type: 'SET-DISABLE-INCREASE-BUTTON', status} as const)
export const setCounterValueDisplayAC = () => ({type: 'SET-COUNTER-VALUE-DISPLAY'} as const)


export const setCountNumberAC = (number: number) => ({type: 'SET-COUNT-NUMBER', number} as const)

export default counterReducer