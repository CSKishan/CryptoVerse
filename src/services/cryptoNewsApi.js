import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-rapidapi-key": "18ef22fe2bmsh9fa7c14eae44db8p17299ejsne7fba92825d3",
  "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
};

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers: cryptoNewsHeaders }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => `/coindesk`,
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
