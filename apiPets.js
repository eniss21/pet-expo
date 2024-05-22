const API_URL = 'https://freetestapi.com/api/v1';

// initial loader-i qe perzgjedh 6 kafeshet e para
export async function getAnimal(type) {
  const animal = type.params.type;
  const response = await fetch(`${API_URL}/${animal}?limit=6 `);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
}

// requesti qe behet nga searchBari ne galeri
export async function searchAnimal(type, name) {
  const response = await fetch(`${API_URL}/${type}?search=${name}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
}
