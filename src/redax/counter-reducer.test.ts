import {
    arrayReducer,
    chengeCounterStartValueAC,
    increseCounterAC,
    onClickSetValueAC,
    resetCounterAC
} from "./counter-reducer";
import {ArrayCounterType} from "./counter-reducer";

test('counter increse value',()=> {
    const array:ArrayCounterType = {
        counter: {
            counterButtomIncrese: {title: 'Increse',disable: false},
            counterButtomReset:{title:'Reset',disable:false},
            counterButtomSet:{title:'Set',disable:false},
        },
        counterInputArray: {
            counterInputStart: {value:0},
            counterInputStartValue: {value: 0},
            counterInputEnd: {value: 5},
            counterInputButtonSet: {title: 'Set', disable: false}
        },
        localStorege () {
            console.log('rt')
            /*startString : JSON.stringify(this.counterInputArray.counterInputStart.value),
            endString : JSON.stringify(this.counterInputArray.counterInputEnd.value),
            localStorage.setItem('start', this.startString),
            localStorage.setItem('end', this.endString)*/
        },
        collorAlarm: false,
        errorCollorStart: false,
        errorCollorEnd:false
    }
    const action = increseCounterAC()

    const endArray = arrayReducer(array,action)

    expect(endArray.counterInputArray.counterInputStart.value).toBe(1)
})
test('counter reset value',()=> {
    const array:ArrayCounterType = {
        counter: {
            counterButtomIncrese: {title: 'Increse',disable: false},
            counterButtomReset:{title:'Reset',disable:false},
            counterButtomSet:{title:'Set',disable:false},
        },
        counterInputArray: {
            counterInputStart: {value:0},
            counterInputStartValue: {value: 0},
            counterInputEnd: {value: 5},
            counterInputButtonSet: {title: 'Set', disable: false}
        },
        localStorege () {
            console.log('rt')
            /*startString : JSON.stringify(this.counterInputArray.counterInputStart.value),
            endString : JSON.stringify(this.counterInputArray.counterInputEnd.value),
            localStorage.setItem('start', this.startString),
            localStorage.setItem('end', this.endString)*/
        },
        collorAlarm: false,
        errorCollorStart: false,
        errorCollorEnd:false
    }
    const action = resetCounterAC()

    const endArray = arrayReducer(array,action)

    expect(endArray.counterInputArray.counterInputStart.value).toBe(0)
    expect(endArray.collorAlarm).toBeFalsy()
    expect(endArray.counter.counterButtomIncrese.disable).toBeFalsy()
})
test('counter change value start',()=> {
    const array:ArrayCounterType = {
        counter: {
            counterButtomIncrese: {title: 'Increse',disable: false},
            counterButtomReset:{title:'Reset',disable:false},
            counterButtomSet:{title:'Set',disable:false},
        },
        counterInputArray: {
            counterInputStart: {value:0},
            counterInputStartValue: {value: 0},
            counterInputEnd: {value: 5},
            counterInputButtonSet: {title: 'Set', disable: false}
        },
        localStorege () {
            console.log('rt')
            /*startString : JSON.stringify(this.counterInputArray.counterInputStart.value),
            endString : JSON.stringify(this.counterInputArray.counterInputEnd.value),
            localStorage.setItem('start', this.startString),
            localStorage.setItem('end', this.endString)*/
        },
        collorAlarm: false,
        errorCollorStart: false,
        errorCollorEnd:false
    }
    const action = chengeCounterStartValueAC('0')

    const endArray = arrayReducer(array,action)

    expect(endArray.counterInputArray.counterInputStart.value).toBe(0)
})
test('counter change value end',()=> {
    const array:ArrayCounterType = {
        counter: {
            counterButtomIncrese: {title: 'Increse',disable: false},
            counterButtomReset:{title:'Reset',disable:false},
            counterButtomSet:{title:'Set',disable:false},
        },
        counterInputArray: {
            counterInputStart: {value:0},
            counterInputStartValue: {value: 0},
            counterInputEnd: {value: 5},
            counterInputButtonSet: {title: 'Set', disable: false}
        },
        localStorege () {
            console.log('rt')
            /*startString : JSON.stringify(this.counterInputArray.counterInputStart.value),
            endString : JSON.stringify(this.counterInputArray.counterInputEnd.value),
            localStorage.setItem('start', this.startString),
            localStorage.setItem('end', this.endString)*/
        },
        collorAlarm: false,
        errorCollorStart: false,
        errorCollorEnd:false
    }
    const action = chengeCounterStartValueAC('5')

    const endArray = arrayReducer(array,action)

    expect(endArray.counterInputArray.counterInputEnd.value).toBe(5)
})
test('counter on click set value',()=> {
    const array:ArrayCounterType = {
        counter: {
            counterButtomIncrese: {title: 'Increse',disable: false},
            counterButtomReset:{title:'Reset',disable:false},
            counterButtomSet:{title:'Set',disable:false},
        },
        counterInputArray: {
            counterInputStart: {value:0},
            counterInputStartValue: {value: 0},
            counterInputEnd: {value: 5},
            counterInputButtonSet: {title: 'Set', disable: false}
        },
        localStorege () {
            console.log('rt')
            /*startString : JSON.stringify(this.counterInputArray.counterInputStart.value),
            endString : JSON.stringify(this.counterInputArray.counterInputEnd.value),
            localStorage.setItem('start', this.startString),
            localStorage.setItem('end', this.endString)*/
        },
        collorAlarm: false,
        errorCollorStart: false,
        errorCollorEnd:false
    }
    const action = onClickSetValueAC()

    const endArray = arrayReducer(array,action)

    expect(endArray.counterInputArray.counterInputStart.value).toBe(0)
    expect(endArray.counterInputArray.counterInputEnd.value).toBe(5)
})