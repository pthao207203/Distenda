import React, { useState } from 'react';
import { Link } from "react-router-dom";



export default function Header() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <></>
  );
}
