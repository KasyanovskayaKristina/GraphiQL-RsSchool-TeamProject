import {
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {
  getIntrospectionQuery,
  IntrospectionQuery,
  printSchema,
  buildClientSchema,
} from 'graphql';
import { toast } from 'react-toastify';

interface ResponseMeta {
  response: {
    status: number;
  };
}

export const schemaApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (build) => ({
    getSchema: build.mutation({
      query: (endpoint: string) => ({
        url: endpoint,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: getIntrospectionQuery() }),
      }),
      transformResponse: (response: Record<'data', IntrospectionQuery>) => {
        toast.success('GraphQL introspection done!');
        const { data: schema } = response;
        return printSchema(buildClientSchema(schema));
      },
      transformErrorResponse: (
        _,
        meta: (FetchBaseQueryMeta & ResponseMeta) | undefined
      ) => {
        if (meta) {
          if (meta.response) {
            toast.error('Error: Unauthorized GraphQL endpoint!');
          } else {
            toast.error('Error: Invalid GraphQL endpoint!');
          }
        }
      },
    }),
  }),
});

export const { useGetSchemaMutation } = schemaApi;
