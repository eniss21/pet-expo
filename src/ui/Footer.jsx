import {
  EarthIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/',
    icon: <LinkedinIcon />,
  },
  {
    name: 'X',
    link: 'https://x.com/',
    icon: <TwitterIcon />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/',
    icon: <FacebookIcon />,
  },
];

const Footer = () => {
  return (
    <footer className="relative  mt-14 bg-emerald-700 text-lime-100">
      <div className="flex flex-col items-center px-4 py-12">
        <div>
          <Link to="/" className="mb-4 flex items-center justify-center gap-5 ">
            <span className="text-3xl font-extrabold uppercase tracking-widest">
              Pet Expo
            </span>
          </Link>
          <p className="max-w-xl text-center text-lg font-medium ">
            Best Pet Expo EVER
          </p>
          <p className="">Copyright © 2024 - All right reserved</p>
        </div>

        <div className="mt-8">
          <ul className="flex items-center gap-6">
            {socialLinks.map(({ name, icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  title={name}
                  className=" hover:text-emerald-500"
                  target="_blank"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
