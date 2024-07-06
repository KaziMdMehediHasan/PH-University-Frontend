import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../Features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: 'include', //sending the cookies to the server
    prepareHeaders: (headers, { getState }) => { //sending authorization token for accessing all other routes
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('authorization', `${token}`);
        }
        return headers;
    }
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result?.error?.status);
    if (result?.error?.status === 401) {
        //* send refresh token
        console.log('sending refresh token');
        // getting the credentials from the cookie
        const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
            method: 'POST',
            credentials: 'include',
        })
        const data = await res.json();
        console.log('from baseApi:', data);
        // checking whether the refresh token is valid
        if (data?.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user;
            api.dispatch(
                setUser({
                    user,
                    token: data.data.accessToken
                })
            );
            result = await baseQuery(args, api, extraOptions);
        } else {
            // if not the user will be logged out from the webpage
            api.dispatch(logout());
        }
    }
    return result;

}

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    // baseQuery: baseQuery,
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