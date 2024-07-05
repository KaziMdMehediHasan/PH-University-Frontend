import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('authorization', `${token}`);
        }
        return headers;
    }
});


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    endpoints: () => ({}),
    //~ we've declared the endpoint in a different file to keep it clean here
    // endpoints: (builder) => ({
    //     login: builder.mutation({
    //         query: (userInfo) => ({
    //             url: '/auth/login',
    //             method: 'POST',
    //             body: userInfo
    //         })
    //     })
    // })

});