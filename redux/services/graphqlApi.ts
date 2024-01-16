import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { isJson } from '@/utils/utils';
import { toast } from 'react-toastify';

interface RequestData {
  endpoint: string;
  query: string;
  variables: string;
  headers: string;
}

type Error = {
  data: {
    errors: [{ message: string }];
  };
};

export const graphqlApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (build) => ({
    getData: build.mutation({
      query: ({ endpoint, query, variables, headers }: RequestData) => ({
        url: endpoint,
        method: 'POST',
        headers: Object.assign(isJson(headers) ? JSON.parse(headers) : {}, {
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          query,
          variables: isJson(variables) ? JSON.parse(variables) : {},
        }),
      }),
      transformResponse: (response) => {
        toast.success('Data received!');
        return JSON.stringify(response, null, 2);
      },
      transformErrorResponse: (error: FetchBaseQueryError & Error) => {
        error.data.errors.forEach((error) => toast.error(error.message));
      },
    }),
  }),
});

export const { useGetDataMutation } = graphqlApi;
