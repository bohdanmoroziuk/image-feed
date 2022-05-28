import { render, fireEvent } from '@testing-library/react-native';

import { AuthorRow } from './AuthorRow';

describe('AuthorRow', () => {
  it('renders successfully', () => {
    const { toJSON } = render(
      <AuthorRow
        fullName="First Last"
        linkText="Comments"
        onPressLinkText={() => {}}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <AuthorRow
        fullName="First Last"
        linkText="Comments"
        onPressLinkText={() => {}}
      />
    );

    expect(getByText('FL')).toBeDefined();
    expect(getByText('Comments')).toBeDefined();
  });

  it('calls the onPressLinkText handler when the link text is pressed', () => {
    const mockOnPressLinkText = jest.fn();

    const { getByText } = render(
      <AuthorRow
        fullName="First Last"
        linkText="Comments"
        onPressLinkText={mockOnPressLinkText}
      />
    );

    fireEvent.press(getByText('Comments'));

    expect(mockOnPressLinkText).toHaveBeenCalled();
  })
});
