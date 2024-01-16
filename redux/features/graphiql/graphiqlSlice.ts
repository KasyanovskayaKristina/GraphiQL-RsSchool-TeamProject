import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { graphqlApi } from '@/redux/services/graphqlApi';
import { schemaApi } from '@/redux/services/schemaApi';
import { EditorTabMode } from '@/app/types/types';

export interface InitState {
  endpoint: string;
  query: string;
  variables: string;
  headers: string;
  data: string;
  isLoading: boolean;
  hasError: boolean;
  isQueryPayloadTabOpen: boolean;
  activeQueryPayloadTab: EditorTabMode;
}

const initialState: InitState = {
  endpoint: '',
  query: '',
  variables: '',
  headers: '',
  data: '',
  isLoading: false,
  hasError: false,
  isQueryPayloadTabOpen: false,
  activeQueryPayloadTab: EditorTabMode.Variables,
};

const graphiqlSlice = createSlice({
  name: 'graphiql',
  initialState,
  reducers: {
    setEndpoint(state, action: PayloadAction<string>) {
      state.endpoint = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },
    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
    setActiveQueryPayloadTab(state, action: PayloadAction<EditorTabMode>) {
      state.activeQueryPayloadTab = action.payload;
    },
    toggleOpenQueryPayloadTab(state, action: PayloadAction<boolean>) {
      state.isQueryPayloadTabOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(graphqlApi.endpoints.getData.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        graphqlApi.endpoints.getData.matchFulfilled,
        (state, action: PayloadAction<string>) => {
          state.data = action.payload;
          state.isLoading = false;
          state.hasError = false;
        }
      )
      .addMatcher(graphqlApi.endpoints.getData.matchRejected, (state) => {
        state.data = '';
        state.hasError = true;
        state.isLoading = false;
      })
      .addMatcher(schemaApi.endpoints.getSchema.matchPending, (state) => {
        state.data = '';
        state.hasError = false;
      });
  },
});

export default graphiqlSlice;
