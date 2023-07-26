export const arrayCounter: ArrayCounterType = {
    counter: {
        counterButtomIncrese: {title: 'Increse', disable: false},
        counterButtomReset: {title: 'Reset', disable: false},
        counterButtomSet: {title: 'Set', disable: false},
    },
    counterInputArray: {
        counterInputStart: {value: 0},
        counterInputStartValue: {value: 0},
        counterInputEnd: {value: 5},
        counterInputButtonSet: {title: 'Set', disable: false}
    },
    localStorege() {
        const startString = JSON.stringify(this.counterInputArray.counterInputStart.value)
        const endString = JSON.stringify(this.counterInputArray.counterInputEnd.value)
        localStorage.setItem('start', startString)
        localStorage.setItem('end', endString)
    },
    collorAlarm: false,
    errorCollorStart: false,
    errorCollorEnd: false
}

export type ArrayCounterType = {
    counter: CounterButtomType,
    counterInputArray: CounterInpuArraytType
    localStorege: () => void
    collorAlarm: boolean
    errorCollorStart: boolean
    errorCollorEnd: boolean
}

export type CounterInpuArraytType = {
    counterInputStart: { value: number },
    counterInputStartValue: { value: number }
    counterInputEnd: { value: number },
    counterInputButtonSet: { title: string, disable: boolean }
}
export type CounterButtomType = {
    counterButtomIncrese: { title: string, disable: boolean }
    counterButtomReset: { title: string, disable: boolean }
    counterButtomSet: { title: string, disable: boolean }
}

type ActionType = IncreseActionType | ResetActionType | ChangeValueStartType | ChangeValueEndType | OnClickSetValueype

type IncreseActionType = {
    type: "INCRES-COUNT"
}
type ResetActionType = {
    type: "RESET-COUNT"
}
type ChangeValueStartType = {
    type: "CHANGE-VALUE-START"
    value: string
}
type ChangeValueEndType = {
    type: "CHANGE-VALUE-END"
    value: string
}
type OnClickSetValueype = {
    type: "ON-CLICK-SET-VALUE"
}
const start = localStorage.getItem('start')
const end = localStorage.getItem('end')

 if (end !== null) {
     arrayCounter.counterInputArray.counterInputEnd.value = +end
 }
 if (start !== null) {
     arrayCounter.counterInputArray.counterInputStartValue.value = +start
     arrayCounter.counterInputArray.counterInputStart.value = +start
 }

export const arrayReducer = (state: ArrayCounterType = arrayCounter, action: ActionType): ArrayCounterType => {
    switch (action.type) {
        case "INCRES-COUNT" : {
            const newState = {...state}
            if (newState.counterInputArray.counterInputStart.value ===
                newState.counterInputArray.counterInputEnd.value - 1) {
                newState.counter.counterButtomIncrese.disable = true
                newState.collorAlarm = true
            }
            newState.counterInputArray.counterInputStart.value++
            return newState
        }
        case "RESET-COUNT": {
            const newState = {...state}
            newState.counterInputArray.counterInputStart.value = newState.counterInputArray.counterInputStartValue.value
            newState.collorAlarm = false
            newState.counter.counterButtomIncrese.disable = false
            return newState
        }
        case "CHANGE-VALUE-START": {
            const newState = {...state}
            let valueNum = +action.value
            newState.counterInputArray.counterInputStart.value = valueNum
            valueNum >= newState.counterInputArray.counterInputEnd.value ||
            valueNum < 0 ? arrayCounter.counterInputArray.counterInputButtonSet.disable = true :
                arrayCounter.counterInputArray.counterInputButtonSet.disable = false

            valueNum < 0 ? arrayCounter.errorCollorStart = true : arrayCounter.errorCollorStart = false
            return newState
        }
        case "CHANGE-VALUE-END": {
            const newState = {...state}
            let valueNum = +action.value
            newState.counterInputArray.counterInputEnd.value = valueNum

            valueNum <= newState.counterInputArray.counterInputStart.value ||
            valueNum < 0 || newState.counterInputArray.counterInputStart.value < 0 ?
                arrayCounter.counterInputArray.counterInputButtonSet.disable = true :
                arrayCounter.counterInputArray.counterInputButtonSet.disable = false

            valueNum < 0 ? arrayCounter.errorCollorEnd = true : arrayCounter.errorCollorEnd = false
            return newState
        }
        case "ON-CLICK-SET-VALUE": {
            const newState = {...state}
            newState.counterInputArray.counterInputStartValue.value = newState.counterInputArray.counterInputStart.value
            newState.localStorege()
            return newState
        }
        default:
            return state
    }
}

export const increseCounterAC = (): IncreseActionType => {
    return {type: "INCRES-COUNT"}
}
export const resetCounterAC = (): ResetActionType => {
    return {type: "RESET-COUNT"}
}
export const chengeCounterStartValueAC = (value: string): ChangeValueStartType => {
    return {type: "CHANGE-VALUE-START", value}
}
export const chengeCounterEndValueAC = (value: string): ChangeValueEndType => {
    return {type: "CHANGE-VALUE-END", value}
}
export const onClickSetValueAC = (): OnClickSetValueype => {
    return {type: "ON-CLICK-SET-VALUE"}
}

