import { render, waitFor } from '@testing-library/react-native';

import { Card } from './Card';

describe('Card', () => {
  it('renders successfully', async () => {
    const { toJSON } = render(
      <Card 
        fullName="First Last"
        linkText="Comments"
        image={{ uri: 'https://unsplash.it/600/600' }}
        onPressLinkText={() => {
          console.log('Pressed link!');
        }}
      />
    );

    await waitFor(() => {
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
