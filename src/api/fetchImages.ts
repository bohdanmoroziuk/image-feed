import { Item } from 'src/types';

export default async function fetchImages(): Promise<Item[]> {
  const response = await fetch('https://unsplash.it/list');
  const images = await response.json();

  return images;
}
