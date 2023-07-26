import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {arrayCounter, ArrayCounterType, chengeCounterEndValueAC, onClickSetValueAC} from "./redax/counter-reducer";
import {DisplayCounter} from "./components/Counter/DIsplayCounter/DisplayCounter";
import {HashRouter, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ArrayStoreType} from "./redax/store";
import {chengeCounterStartValueAC, increseCounterAC, resetCounterAC} from "./redax/counter-reducer";

function App() {

    const dispatch = useDispatch()
    const array = useSelector<ArrayStoreType,ArrayCounterType>(state => state.arrayCounter)

    const onChangeValueStart = (value: string) => {
        dispatch(chengeCounterStartValueAC(value))
    }
    const onChangeValueEnd = (value: string) => {
        dispatch(chengeCounterEndValueAC(value))
    }
    const onClickIncreseValue = () => {
        const action = increseCounterAC()
        dispatch(action)
    }
    const onClickResetValue = () => {
        dispatch(resetCounterAC())
    }
    const onClickSetValue = () => {
        dispatch(onClickSetValueAC())
    }
    return (
        <HashRouter>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={
                        <Counter start={array.counterInputArray.counterInputStart.value} end={array.counterInputArray.counterInputEnd.value} arrayCounter={arrayCounter.counterInputArray}
                                 onClick={onClickSetValue}
                                 onChangeValueStart={onChangeValueStart} onChangeValueEnd={onChangeValueEnd}
                                 errorCollorStart={arrayCounter.errorCollorStart}
                                 errorCollorEnd={arrayCounter.errorCollorEnd}/>
                    }/>
                    <Route path='/input' element={
                        <Counter start={array.counterInputArray.counterInputStart.value} end={array.counterInputArray.counterInputEnd.value} arrayCounter={arrayCounter.counterInputArray}
                                 onClick={onClickSetValue}
                                 onChangeValueStart={onChangeValueStart} onChangeValueEnd={onChangeValueEnd}
                                 errorCollorStart={arrayCounter.errorCollorStart}
                                 errorCollorEnd={arrayCounter.errorCollorEnd}/>
                    }/>
                    <Route path='/counter' element={
                        <DisplayCounter arrayCounter={array.counter} state={array.counterInputArray.counterInputStart.value}
                                        onClickIncreseValue={onClickIncreseValue} onClickResetValue={onClickResetValue}
                                        collorAlarm={array.collorAlarm} onClickSetValue={onClickResetValue}/>
                    }/>
                </Routes>
            </div>
        </HashRouter>

    );
}

export default App;
