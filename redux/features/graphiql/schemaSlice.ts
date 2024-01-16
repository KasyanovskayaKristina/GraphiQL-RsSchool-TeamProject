import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { schemaApi } from '@/redux/services/schemaApi';

export interface InitState {
  schema: string | null;
  isOpen: boolean;
  isLoading: boolean;
  hasError: boolean;
  isEndpointEdited: boolean;
}

const initialState: InitState = {
  schema: null,
  isOpen: false,
  isLoading: false,
  hasError: false,
  isEndpointEdited: true,
};

const schemaSlice = createSlice({
  name: 'graphiql',
  initialState,
  reducers: {
    setSchema(state, action: PayloadAction<string | null>) {
      state.schema = action.payload;
    },
    toggleOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    toggleIsEndpointEdited(state, action: PayloadAction<boolean>) {
      state.isEndpointEdited = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(schemaApi.endpoints.getSchema.matchPending, (state) => {
        state.schema = null;
        state.isLoading = true;
        state.isEndpointEdited = false;
        state.isOpen = false;
      })
      .addMatcher(
        schemaApi.endpoints.getSchema.matchFulfilled,
        (state, action: PayloadAction<string>) => {
          state.schema = action.payload;
          state.isLoading = false;
          state.hasError = false;
        }
      )
      .addMatcher(schemaApi.endpoints.getSchema.matchRejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
        state.isEndpointEdited = true;
      });
  },
});

export default schemaSlice;
