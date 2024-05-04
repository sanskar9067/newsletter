import React, { useEffect, useState } from 'react'

export default function News() {

    const [news, setNews] = useState();

    const fetchNews = async () => {
        try {
            const api = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=094a4894ab104804ba60b7ad67c19153";
            const res = await fetch(api);
            const response = await res.json();
            setNews(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <div>
            <div class="container my-24 mx-auto md:px-6">
                <section class="mb-32 text-center md:text-left">
                    <h2 class="mb-12 text-center text-3xl font-bold">Posts</h2>

                    {
                        news && (
                            <>
                                <div class="mb-6 flex flex-wrap">
                                    <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                                        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <img src={news.articles[1].urlToImage} class="w-full" alt="Louvre" />
                                            <a href={news.articles[1].url} target='_blank'>
                                                <div
                                                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                                        <h5 class="mb-3 text-lg font-bold">{news.articles[1].title}</h5>
                                        <div
                                            class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                                            {news.articles[1].author}
                                        </div>
                                        <p class="text-neutral-500 dark:text-neutral-300">
                                            {news.articles[1].description}
                                        </p>
                                    </div>
                                </div>

                                <div class="mb-6 flex flex-wrap">
                                    <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                                        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <img src={news.articles[2].urlToImage} class="w-full" alt="Louvre" />
                                            <a href={news.articles[2].url} target='_blank'>
                                                <div
                                                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                                        <h5 class="mb-3 text-lg font-bold">{news.articles[2].title}</h5>
                                        <div
                                            class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                                            {news.articles[2].author}
                                        </div>
                                        <p class="text-neutral-500 dark:text-neutral-300">
                                            {news.articles[2].description}
                                        </p>
                                    </div>
                                </div>

                                <div class="mb-6 flex flex-wrap">
                                    <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                                        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <img src={news.articles[3].urlToImage} class="w-full" alt="Louvre" />
                                            <a href={news.articles[3].url} target='_blank'>
                                                <div
                                                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                                        <h5 class="mb-3 text-lg font-bold">{news.articles[3].title}</h5>
                                        <div
                                            class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                                            {news.articles[3].author}
                                        </div>
                                        <p class="text-neutral-500 dark:text-neutral-300">
                                            {news.articles[3].description}
                                        </p>
                                    </div>
                                </div>

                                <div class="mb-6 flex flex-wrap">
                                    <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                                        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <img src={news.articles[4].urlToImage} class="w-full" alt="Louvre" />
                                            <a href={news.articles[4].url} target='_blank'>
                                                <div
                                                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                                        <h5 class="mb-3 text-lg font-bold">{news.articles[4].title}</h5>
                                        <div
                                            class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                                            {news.articles[4].author}
                                        </div>
                                        <p class="text-neutral-500 dark:text-neutral-300">
                                            {news.articles[4].description}
                                        </p>
                                    </div>
                                </div>

                                <div class="mb-6 flex flex-wrap">
                                    <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                                        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                            data-te-ripple-init data-te-ripple-color="light">
                                            <img src={news.articles[5].urlToImage} class="w-full" alt="Louvre" />
                                            <a href={news.articles[5].url} target='_blank'>
                                                <div
                                                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                                        <h5 class="mb-3 text-lg font-bold">{news.articles[5].title}</h5>
                                        <div
                                            class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                                            {news.articles[5].author}
                                        </div>
                                        <p class="text-neutral-500 dark:text-neutral-300">
                                            {news.articles[5].description}
                                        </p>
                                    </div>
                                </div>

                            </>

                        )
                    }


                </section>
            </div>
        </div>
    )
}
