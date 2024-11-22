'use client';
import { ACTION_TYPE, setCount } from '@/redusers/counterReducer';
import React, { useReducer, useState } from 'react';

const buttonStyle = 'px-4 py-2 bg-blue-500 text-white rounded';

const ReducerPage = () => {
    // const [count, setCount] = useState(0)

    // const [현재상태, 파견함수] = useReducer(상태변경함수, 초기값)
    const [count, dispatch] = useReducer(setCount, {
        counter: 0,
        name: 'counter',
    });

    // const count = {sounter: 0, name: 'counter'}

    return (
        <div className='flex justify-center gap-4 py-5 text-4xl'>
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPE.DECREMENT });
                }}
            >
                -
            </button>
            <strong>
                {count.name} : {count.counter}
            </strong>
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPE.INCREMENT });
                }}
            >
                +
            </button>

            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPE.RESET });
                }}
            >
                reset
            </button>
        </div>
    );
};

export default ReducerPage;
