import { useNavigate, useRouteError } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <div className=" flex  min-h-screen items-center justify-center rounded-xl text-lg font-extrabold uppercase text-emerald-800 underline">
        <h1>Something went wrong 😢</h1>
        <p>{error.data}</p>

        <button onClick={() => navigate(-1)}>&larr; Go back</button>
      </div>
    </>
  );
}

export default Error;
