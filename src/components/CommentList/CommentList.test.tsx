import { render } from '@testing-library/react-native';
import uuid from 'react-native-uuid';

import { Comment } from 'src/types';
import { CommentList } from './CommentList';

const mockComments: Comment[] = [
  {
    id: uuid.v4().toString(),
    text: 'Awesome',
  },
  {
    id: uuid.v4().toString(),
    text: 'Nothing special',
  },
];

describe('CommentList', () => {
  it('renders successfully', () => {
    const { toJSON } = render(
      <CommentList items={mockComments} />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <CommentList items={mockComments} />
    );

    expect(getByText(mockComments[0].text)).toBeDefined();
    expect(getByText(mockComments[1].text)).toBeDefined();
  });
});
