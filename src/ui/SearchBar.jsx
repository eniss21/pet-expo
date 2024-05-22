import { useState } from 'react';

function SearchBar({ type, onSearch }) {
  const [name, setName] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSearch = () => {
    onSearch(type, name);
    setName('');
  };

  return (
    <>
      <div className=" mb-5 mt-10 text-center font-sans text-2xl italic text-emerald-800">
        <h1>Search up your favourite {type}, or explore our top 6</h1>
      </div>

      <div className=" mb-8 flex w-full items-center justify-center">
        <div className="relative w-full">
          <input
            value={name}
            type="text"
            className="input w-full"
            placeholder="Search by name or title"
            onChange={handleName}
          />
          <button
            onClick={handleSearch}
            className="absolute right-1 top-1/2 -translate-y-1/2 transform rounded-full bg-emerald-800 px-5 py-2 font-bold uppercase text-lime-100 hover:bg-emerald-600"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
