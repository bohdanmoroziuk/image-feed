import { render, fireEvent } from '@testing-library/react-native';

import { CommentInput } from './CommentInput';

const mockOnSubmit = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe('CommentInput', () => {
  it('renders successfully', () => {
    const { toJSON } = render(
      <CommentInput
        placeholder="Leave a comment"
        onSubmit={mockOnSubmit}
      />
    );

    expect(toJSON()).toMatchSnapshot()
  });

  it('calls the onSubmit handler', async () => {
    const { getByPlaceholderText } = render(
      <CommentInput
        placeholder="Leave a comment"
        onSubmit={mockOnSubmit}
      />
    );

    const input = getByPlaceholderText('Leave a comment');

    fireEvent.changeText(input, 'My very useful comment');

    fireEvent(input, 'submitEditing');

    expect(mockOnSubmit).toHaveBeenCalledWith('My very useful comment');
  });

  it('does not call the onSubmit handler when the text is empty', async () => {
    const { getByPlaceholderText } = render(
      <CommentInput
        placeholder="Leave a comment"
        onSubmit={mockOnSubmit}
      />
    );

    const input = getByPlaceholderText('Leave a comment');

    fireEvent(input, 'submitEditing');

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});