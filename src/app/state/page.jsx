'use client';

import { GiMushroomHouse } from 'react-icons/gi';
import { BsHouseHeart } from 'react-icons/bs';
import { PiTreeEvergreen } from 'react-icons/pi';
import { GiGooeyMolecule } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Font Awesome CSS
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
config.autoAddCss = false;

const StatePage = () => {
    // const [상태이름, 상태변경함수] = useState(초기값)

    const [name, setName] = useState('김겨울');

    const changeName = () => {
        setName(name === '김겨울' ? '김가을' : '김겨울');
    };

    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number + 1);
    };
    const decrease = () => {
        setNumber(number - 1);
    };

    const [isOpen, setIsOpen] = useState(false);

    const sortArr = [
        { value: '컬처 아이콘', icon: <GiGooeyMolecule /> },
        { value: '한적한 시골', icon: <PiTreeEvergreen /> },
        { value: '최고의 전망', icon: <BsHouseHeart /> },
        { value: '한옥', icon: <GiMushroomHouse /> },
    ];

    const [selected, setSelected] = useState(0);

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className='py-20 flex flex-col items-center gap-10'>
            <div>
                <input
                    type='text'
                    placeholder='안녕하세요.'
                    value={text}
                    onChange={handleChange}
                    className='bg-pink-200'
                />
                <p>{text}</p>
            </div>

            <div>
                <div className='flex gap-3 justify-center'>
                    {sortArr.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelected(index);
                            }}
                            className={`py-2 flex items-center flex-col ${selected === index ? 'bg-primary-30' : ''}`}
                        >
                            {item.icon}
                            {item.value}
                        </button>
                    ))}
                </div>
                {/* tab content */}

                {sortArr.map((item, index) => (
                    <div key={index} className={`w-full p-5 min-h-40 ${selected === index ? 'block' : 'hidden'}`}>
                        {item.value} 내용
                    </div>
                ))}
            </div>
            <hr />

            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                {isOpen ? <IoCloseSharp /> : <FaBars />}
            </button>

            <FontAwesomeIcon icon={faCoffee} size='2x' />

            <button onClick={decrease}>감소</button>
            <strong>{number}</strong>
            <button onClick={increase}>증가</button>

            <hr />
            <h2>useState</h2>

            <strong className='block'>{name}</strong>
            <button onClick={changeName} className='p-1 bg-purple-100'>
                이름 변경
            </button>
        </div>
    );
};

export default StatePage;
