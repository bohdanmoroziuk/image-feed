import { render } from '@testing-library/react-native';

import App from './App';

describe('App', () => {
  it('renders successfully', () => {
    const { toJSON } = render(<App />);

    expect(toJSON()).toMatchSnapshot();
  });
});
