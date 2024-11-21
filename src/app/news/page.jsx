'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    'https://content.guardianapis.com/search?api-key=cb5c8f1d-41e3-4481-b13e-7b075cf3e537&show-fields=thumbnail,headline,byline,bodyText'
                );
                // const data = await res.json();

                // 전체 카테고리
                const results = response.data.response.results;

                console.log(results);
                setNews(results);

                // 카테고리 추출
                const categorySet = [
                    ...new Set(
                        results.map((item) => {
                            return item.sectionId;
                        })
                    ),
                ];
                setCategories(categorySet);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNews();
    }, []);

    // 카테고리 선택시 뉴스 필터링
    const filteredNews =
        selectedCategory === ''
            ? news
            : news.filter((item) => {
                  return item.sectionId === selectedCategory;
              });

    return (
        <div>
            <h2>뉴스</h2>
            {/* 카테고리 */}
            <div className='flex gap-4 px-5'>
                <button
                    onClick={() => {
                        setSelectedCategory('');
                    }}
                >
                    전체
                </button>
                {/* [카테고리명, 카테고리명] */}
                {categories.map((item) => (
                    <button
                        key={item}
                        onClick={() => {
                            setSelectedCategory(item);
                        }}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* 뉴스 리스트 */}

            <ul className='divide-y px-5'>
                {filteredNews.map((item) => (
                    <li key={item.id}>
                        <Link href={item.webUrl} className='py-3 flex gap-4'>
                            <Image
                                src={item.fields.thumbnail}
                                alt={item.webTitle}
                                width={300}
                                height={200}
                                className='object-cover rounded w-1/3'
                            />
                            <div className='flex-1 flex flex-col justify-between'>
                                <strong>{item.webTitle}</strong>
                                <p className='text-gray-500 text-sm mt-3'>{item.webPublicationDate}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsPage;
