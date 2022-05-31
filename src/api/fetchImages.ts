import axios from 'axios';

import { Item } from 'src/types';

export default async function fetchImages(): Promise<Item[]> {
  const response = await axios.get('https://unsplash.it/list');

  return response.data;
}
