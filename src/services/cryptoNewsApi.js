import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeadres =
{
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '394334c6a5mshf41a9a7a42290dbp1a5126jsnaf94a6d526ab'
}

const baseUrl = `https://bing-news-search1.p.rapidapi.com`;

const createRequest = (url) => ({url, headers: cryptoNewsHeadres});

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
            // query: (newsCategory, count) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=4`)
        })
    })
})

export const  { useGetCryptoNewsQuery } = cryptoNewsApi;
