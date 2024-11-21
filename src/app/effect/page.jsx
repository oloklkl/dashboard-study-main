'use client';

import React, { useEffect, useState } from 'react';

const EffectPage = () => {
    const [color, setColor] = useState('lightblue');

    // 마운트시에만 실행
    useEffect(() => {
        console.log('마운트시에만 실행');
        // body에 배경색 추가
        document.body.style.backgroundColor = 'lightblue';

        // 언마운트시에만 실행
        return () => {
            // body에 배경색 제거
            document.body.style.backgroundColor = '';
        };
    }, []);
    // 업데이트시에만 실행
    useEffect(() => {
        console.log('업데이트시에만 실행');
        // body에 배경색 추가
        document.body.style.backgroundColor = color;
    }, [color]);

    const [count, setCount] = useState(0);

    // 마운트시에만 실행
    useEffect(() => {
        console.log('2 - 마운트시에만 실행');
    }, []);

    // 마운트시와 업데이트시에 실행
    useEffect(() => {
        console.log('2 - 마운트시와 업데이트시에 실행');
    });

    // 업데이트 시(특정 상태값이 변경될 때)만 실행
    useEffect(() => {
        console.log('2 - 업데이트 시');

        return () => {
            console.log('2 - 언마운트시에만 실행');
        };
    }, [count]);

    const [timer, setTimer] = useState(0);
    const [isShow, setIsShow] = useState(true);

    // 마운트시 실행
    useEffect(() => {
        let interval;

        // setInterval을 사용하여 1초마다 timer 상태값을 변경
        if (isShow) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
            setTimer(0);
        };
    }, [isShow]);

    return (
        <>
            <div>
                {/* 삼항연산자 */}
                {/* isShow ? 참 : 거짓 */}
                {isShow ? (
                    <>
                        <strong>{timer}초</strong>
                        <button
                            onClick={() => {
                                setIsShow(false);
                            }}
                        >
                            타이머 숨기기
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => {
                            setIsShow(true);
                        }}
                    >
                        타이머 보이기
                    </button>
                )}
            </div>
            <div>
                <p>Count: {count}</p>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    증가
                </button>
            </div>
            <div>
                <h1>EffectPage</h1>
                <button
                    onClick={() => {
                        setColor('yellow');
                    }}
                    className='bg-pink-200 p-3'
                >
                    색상변경
                </button>
            </div>
        </>
    );
};

export default EffectPage;
