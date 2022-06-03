import { render } from '@testing-library/react-native';

import { CommentListItem } from './CommentListItem';

describe('CommentListItem', () => {
  it('renders successfully', () => {
    const { toJSON, getByText } = render(
      <CommentListItem
        item={{
          id: '1',
          text: 'Awesome'
        }}
      />
    );

    expect(toJSON()).toMatchSnapshot();
    expect(getByText('Awesome')).toBeDefined();
  });
});
