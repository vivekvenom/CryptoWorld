import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Crypto API Headers
const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'd065127decmshe209cff6696853ap179c48jsnf4a91bad99de',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

// Base URL
const baseUrl = "https://coinranking1.p.rapidapi.com";

// Make API Request
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// Crypto API Redux Logic
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // get cryptocurrencies
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    // get crypto details
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    // get crypto history
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

// Export Crypto API
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
