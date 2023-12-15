import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query";

export const firestoreApi = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: [],
  endpoints: () => ({}),
});
