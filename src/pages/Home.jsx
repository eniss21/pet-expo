import { TypeAnimation } from 'react-type-animation';
import About from '../ui/About';
import Contact from '../ui/Contact';
import Tabel from '../ui/Tabel';

function Home() {
  return (
    <div>
      <div className="  flex min-h-screen flex-col items-center justify-start ">
        <div className="mt-40 text-6xl font-bold text-emerald-900 ">
          <TypeAnimation
            sequence={[
              'Discover the Pawsibilities',
              1050,
              'Uniting Pets and People',
              1000,
            ]}
          />
        </div>
        <Tabel />
      </div>
      <About />
      <Contact />
    </div>
  );
}

export default Home;
