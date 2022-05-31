import { render, waitFor } from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { Feed } from './Feed';

const handlers = [
  rest.get('https://unsplash.it/list', (_request, response, context) => {
    return response(
      context.status(200),
      context.json([
        { id: '0', author: "Bob Ross" },
        { id: '1', author: "Chuck Norris" },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Feed', () => {
  it('renders a list of cards', async () => {
    const { getByTestId } = render(<Feed />);

    expect(getByTestId('loader')).toBeDefined();

    await waitFor(() => {
      expect(getByTestId('feed')).toBeDefined();
    });
  });

  it('renders an error message', async () => {
    server.use(
      rest.get('https://unsplash.it/list', (_request, response, context) => {
        return response(context.status(500))
      }),
    );

    const { getByTestId } = render(<Feed />);

    await waitFor(() => {
      expect(getByTestId('error')).toBeDefined();
    });
  });
});
