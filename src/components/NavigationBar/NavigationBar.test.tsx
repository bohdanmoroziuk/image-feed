import { render, fireEvent } from '@testing-library/react-native';

import { NavigationBar } from './NavigationBar';

afterEach(() => {
  jest.clearAllMocks();
});

const mockOnClose = jest.fn();

describe('NavigationBar', () => {
  it('renders successfully', () => {
    const { toJSON } = render(
      <NavigationBar
        title="Comments"
        closeButtonText="Close"
        onClose={mockOnClose}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('calls the onClose handler when the close button is pressed', () => {
    const { getByText } = render(
      <NavigationBar
        title="Comments"
        closeButtonText="Close"
        onClose={mockOnClose}
      />
    );

    fireEvent.press(getByText('Close'));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
