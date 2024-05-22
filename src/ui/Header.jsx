import { Link } from 'react-router-dom';

function Header() {
  return (
    <header
      className="sticky top-0 z-40  flex items-center justify-between border-b border-stone-200 bg-emerald-700
  px-4 py-5 uppercase text-lime-100  sm:px-6"
    >
      <Link to="/" className="text-2xl font-extrabold tracking-widest">
        PET EXPO
      </Link>
      <div className=" flex justify-end space-x-4 text-base font-semibold ">
        <Link
          to="/category/dogs"
          className="rounded-full bg-emerald-600 px-7 py-1  "
        >
          🐶 Dogs
        </Link>
        <Link
          to="/category/cats"
          className="rounded-full bg-emerald-600 px-7 py-1"
        >
          🐱 Cats
        </Link>
        <Link
          to="/category/birds"
          className="rounded-full bg-emerald-600 px-7 py-1"
        >
          🐥 Birds
        </Link>
      </div>
    </header>
  );
}

export default Header;
