export default async function fetchImages() {
  const response = await fetch('https://unsplash.it/list');
  const images = await response.json();

  return images;
}
