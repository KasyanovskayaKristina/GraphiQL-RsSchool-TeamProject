import graphiqlSlice, {
  InitState,
} from '@/redux/features/graphiql/graphiqlSlice';
import { EditorTabMode } from '../types/types';

const previousState: InitState = {
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

describe('test graphiqlSlice', () => {
  it('should handle adding an endpoint', () => {
    expect(
      graphiqlSlice.reducer(
        previousState,
        graphiqlSlice.actions.setEndpoint('https://rickandmortyapi.com/graphql')
      )
    ).toEqual({
      ...previousState,
      endpoint: 'https://rickandmortyapi.com/graphql',
    });
  });

  it('should handle adding an query', () => {
    expect(
      graphiqlSlice.reducer(
        previousState,
        graphiqlSlice.actions.setQuery('query')
      )
    ).toEqual({
      ...previousState,
      query: 'query',
    });
  });

  it('should handle adding an variables', () => {
    expect(
      graphiqlSlice.reducer(
        previousState,
        graphiqlSlice.actions.setVariables('variables')
      )
    ).toEqual({
      ...previousState,
      variables: 'variables',
    });
  });

  it('should handle adding an headers', () => {
    expect(
      graphiqlSlice.reducer(
        previousState,
        graphiqlSlice.actions.setHeaders('headers')
      )
    ).toEqual({
      ...previousState,
      headers: 'headers',
    });
  });

  it('should handle installation of active tab', () => {
    expect(
      graphiqlSlice.reducer(
        previousState,
        graphiqlSlice.actions.setActiveQueryPayloadTab(EditorTabMode.Headers)
      )
    ).toEqual({
      ...previousState,
      activeQueryPayloadTab: EditorTabMode.Headers,
    });
  });

  it('should handle installing an open tab', () => {
    expect(
      graphiqlSlice.reducer(
        previousState,
        graphiqlSlice.actions.toggleOpenQueryPayloadTab(true)
      )
    ).toEqual({
      ...previousState,
      isQueryPayloadTabOpen: true,
    });
  });
});
