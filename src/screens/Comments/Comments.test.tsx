import { render } from '@testing-library/react-native';

import { Comments } from './Comments';

describe('Comments', () => {
  it('renders successfully', () => {
    const { toJSON } = render(
      <Comments
        comments={[{ id: '1', text: 'Comment' }]}
        onClose={() => {}}
        onSubmitComment={() => {}}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});