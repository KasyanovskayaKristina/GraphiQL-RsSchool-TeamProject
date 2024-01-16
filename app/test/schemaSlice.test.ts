import schemaSlice, { InitState } from '@/redux/features/graphiql/schemaSlice';

const previousState: InitState = {
  schema: null,
  isOpen: false,
  isLoading: false,
  hasError: false,
  isEndpointEdited: true,
};

describe('test schemaSlice', () => {
  it('should handle adding an schema', () => {
    expect(
      schemaSlice.reducer(
        previousState,
        schemaSlice.actions.setSchema('schema')
      )
    ).toEqual({
      ...previousState,
      schema: 'schema',
    });
  });

  it('should handle toggle open documentation', () => {
    expect(
      schemaSlice.reducer(previousState, schemaSlice.actions.toggleOpen(true))
    ).toEqual({
      ...previousState,
      isOpen: true,
    });
  });

  it('should handle toggle Endpoint Edited', () => {
    expect(
      schemaSlice.reducer(
        previousState,
        schemaSlice.actions.toggleIsEndpointEdited(true)
      )
    ).toEqual({
      ...previousState,
      isEndpointEdited: true,
    });
  });
});
