import { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getAnimal, searchAnimal } from '../../apiPets';
import Card from '../ui/Card';
import SearchBar from '../ui/SearchBar';

function Category() {
  // Kthen type qe kemi ne link qe do te perdoret per komponenet me posht
  const { type } = useParams();
  // funksion i react-router  ben load data ne moment qe shkojm tek link-u perkates
  const initialAnimals = useLoaderData();
  // animals do te mbaj data qe do te behet render si card
  const [animals, setAnimals] = useState(initialAnimals);
  const [searched, setSearched] = useState(false);

  //  ne initial render dhe sa here te kemi ndryshim te initialAnimals ose type , animal.map(...)do te bej afishimin e 6 cards kryesore
  useEffect(() => {
    setAnimals(initialAnimals);
  }, [initialAnimals, type]);

  // Do te perdori lloji osse emrin per te ber nje request dhe barazon animals me data-n e kthyer per ta afishuar ne ekran
  const handleSearch = async (type, name) => {
    const searchedAnimals = await searchAnimal(type, name);
    setAnimals(searchedAnimals);
    setSearched(true);
  };

  // kthen ne gjedjen fillestare state-t
  const handleBack = () => {
    setSearched(false);
    setAnimals(initialAnimals);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <SearchBar type={type} onSearch={handleSearch} />

      {animals.length === 0 ? (
        <div className="flex h-96 items-center justify-center rounded-xl bg-emerald-400/20 text-lg font-extrabold uppercase text-emerald-800 underline">
          <h1>We found nothing for you! Search something else 🐈</h1>
        </div>
      ) : (
        <>
          {/* type i aksesuar me siper nga useParams do e bej komponentin e riperdorshem */}
          {!(type === 'dogs' || type === 'cats' || type === 'birds') ? null : (
            <div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {animals.map((animal) => (
                  <Card animal={animal} type={type} key={animal.id} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
      <div className="mt-10 flex justify-end ">
        {searched && (
          <button
            onClick={handleBack}
            className=" text-lg font-extrabold uppercase text-emerald-800 underline hover:text-emerald-600"
          >
            ←Back to our top 6
          </button>
        )}
      </div>
    </div>
  );
}

export async function loader(type) {
  const animals = await getAnimal(type);
  return animals;
}

export default Category;
