import React from 'react';
import {AlertTypes} from "../App";


interface CounterProps {
    counter: number
    maxCount: number
    incrementCount: () => void
    resetCount: () => void
    isError: boolean
    alert: AlertTypes
}


const Counter = ({counter, maxCount, incrementCount, resetCount, alert, isError}: CounterProps) => {


    return (
        <div>
            <div className="">
                {
                    isError ? alert : <div className="">{counter}</div>
                }
                <button disabled={counter >= maxCount} onClick={incrementCount}>+</button>
                <button disabled={counter < maxCount} onClick={resetCount}>-</button>
            </div>
        </div>
    );
};

export default Counter;