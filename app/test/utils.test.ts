import { isJson, formatQuery } from '@/utils/utils';

describe('test utils', () => {
  it('isJson should return true', async () => {
    const validJSON = JSON.stringify({
      name: 'Oleg',
    });

    expect(isJson(validJSON)).toBeTruthy();
  });

  it('isJson should return false', async () => {
    const invalidJSON = 'This is not JSON';

    expect(isJson(invalidJSON)).toBeFalsy();
  });

  it('formatQuery should format query', async () => {
    const query = `query {
  characters(page:
  
  2, filter:
  
  { 
  name: "rick" 

}) {
    info {
  
      count
    }
    results {
      name}
  }
  location(id: 
1) {
    id
  }
  episodesByIds(ids:
[1, 2]) {
    id
  }
}`;
    const format = `query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`;

    expect(formatQuery(query)).toBe(format);
  });
});
