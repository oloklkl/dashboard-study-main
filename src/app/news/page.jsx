'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NewsPage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    'https://content.guardianapis.com/search?api-key=cb5c8f1d-41e3-4481-b13e-7b075cf3e537&show-fields=thumbnail,headline,byline,bodyText'
                );
                // const data = await res.json();
                console.log(response.data);
                setNews(response.data.response.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div>
            <h2>뉴스</h2>
            <ul className='divide-y px-5'>
                {news.map((item) => (
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
