import { useState } from 'react';
import Modal from './Modal';
// Karta eshte ndertuar duke perdorur templat ne tailwind nga https://daisyui.com
function Card({ animal, type }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <div className="card bg-emerald-800 text-lime-100 shadow-lg shadow-slate-500 transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:shadow-slate-800 ">
          <figure>
            <img src={animal.image} alt={type} />
          </figure>
          <div className="card-body max-w-md px-3 pt-3">
            <h2 className="text-left text-lg font-bold uppercase tracking-tight">
              {animal.name}
            </h2>
            <p className="text-right text-base italic ">
              {type === 'birds' ? animal.place_of_found : animal.origin}
            </p>
          </div>
        </div>
      </div>
      {isOpen ? (
        <Modal data={animal} type={type} setIsOpen={setIsOpen} />
      ) : null}
    </>
  );
}

export default Card;
