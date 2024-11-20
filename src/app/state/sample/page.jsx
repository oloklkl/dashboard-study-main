'use client';

import classNames from 'classnames';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const SamplePage = () => {
    const [name, setName] = useState('겨울');

    const [num, setNum] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    const [text, setText] = useState('');

    const sortArr = [{ value: '메뉴1' }, { value: '메뉴2' }, { value: '메뉴3' }];

    const [tab, setTab] = useState(0);

    return (
        <div>
            <div>
                {/* tab */}
                <div>
                    {sortArr.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setTab(index);
                            }}
                            className={classNames(tab === index ? 'bg-violet-300' : '')}
                        >
                            {item.value}
                        </button>
                    ))}
                </div>
                {/* tab-cont */}
                <div>
                    {tab === 0 && <div>메뉴1 컨텐츠</div>}
                    {tab === 1 && <div>메뉴2 컨텐츠</div>}
                    {tab === 2 && <div>메뉴3 컨텐츠</div>}
                </div>
            </div>
            <input
                type='text'
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                className='bg-blue-200 mx-auto block'
            />{' '}
            <p>{text}</p>
            <hr />
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className='relative z-10'
            >
                {isOpen ? <IoClose /> : <FaBars />}
            </button>
            <div
                className={`fixed top-0 w-full h-full bg-pink-100 transition-all duration-300 z-0 ${
                    isOpen ? 'left-0' : 'left-full'
                }`}
            >
                전체메뉴
            </div>
            <div
                className={classNames(
                    'fixed top-0 w-full h-full bg-pink-100 transition-all duration-300 z-0',
                    isOpen ? 'left-0' : 'left-full'
                )}
            >
                전체메뉴
            </div>
            <div>{num}</div>
            <button
                onClick={() => {
                    setNum(num + 1);
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    setNum(num - 1);
                }}
            >
                -
            </button>
            <h2>useState를 이용해 겨울 - 가을</h2>
            <strong>{name}</strong>
            <button
                onClick={() => {
                    setName(name === '겨울' ? '가을' : '겨울');
                }}
            >
                이름 변경
            </button>
        </div>
    );
};

export default SamplePage;
