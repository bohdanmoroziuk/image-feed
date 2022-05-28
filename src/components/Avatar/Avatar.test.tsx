import { render } from '@testing-library/react-native';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders successfully', () => {
    const { toJSON } = render(<Avatar color="teal" initials="FL" size={35} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
