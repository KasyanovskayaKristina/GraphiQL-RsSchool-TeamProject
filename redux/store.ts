import { configureStore } from '@reduxjs/toolkit';
import graphiqlSlice from './features/graphiql/graphiqlSlice';
import schemaSlice from './features/graphiql/schemaSlice';
import { schemaApi } from './services/schemaApi';

export const makeStore = () => {
  return configureStore({
    reducer: {
      graphiql: graphiqlSlice.reducer,
      schema: schemaSlice.reducer,
      [schemaApi.reducerPath]: schemaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(schemaApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
