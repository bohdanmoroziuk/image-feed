import { render } from '@testing-library/react-native';

import { CardList } from './CardList';

const mockedItems = [
  { id: '0', author: "Bob Ross" },
  { id: '1', author: "Chuck Norris" },
];

describe('CardList', () => {
  it('renders successfully', () => {
    const { toJSON } = render(
      <CardList
        items={mockedItems}
        comments={{}}
        onPressComments={() => {}}
      />
    );

    expect(toJSON()).toMatchSnapshot()
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <CardList
        items={mockedItems}
        comments={{}}
        onPressComments={() => {}}
      />
    );

    expect(getByText(mockedItems[0].author)).toBeDefined();
    expect(getByText(mockedItems[1].author)).toBeDefined();
  });
});