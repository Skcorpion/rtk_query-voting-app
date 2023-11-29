import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pollApi = createApi({
  reducerPath: "pollApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://" }),
  endpoints: (builder) => ({
    getPoll: builder.query<any, void>({
      query: () => `poll`,
    }),
  }),
});

export const { useGetPollQuery } = pollApi;
