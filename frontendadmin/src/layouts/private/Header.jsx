import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <header className="flex items-center justify-between px-10 w-full text-6xl uppercase whitespace-nowrap bg-indigo-50 text-blue-950 max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <div className="flex items-center">
          <img loading="lazy" src="./logo1.svg" alt="Logo"
            className="object-contain w-[200px] h-auto max-md:w-[150px]"
          />
        </div>
        <div className="flex items-center">
          <img loading="lazy" src="./profile.svg" alt="Profile"
            className="object-contain w-[75px] h-auto"
          />
        </div>
      </header>
    </>
  );
}
