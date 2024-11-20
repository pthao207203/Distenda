import React, { useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';


function Navigation() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className="flex relative flex-wrap gap-2.5 items-center px-16 w-full leading-none text-white bg-white/10 max-sm:px-5 max-md:max-w-full">
      <Navbar.Brand className=" text-white flex gap-3 items-center p-3 my-auto text-6xl uppercase font-squada whitespace-nowrap">
        <h1 className="my-auto max-md:text-4xl">Distenda</h1>
      </Navbar.Brand>
      <Navbar.Toggle type="button" toggle-data aria-controls="basic-navbar-nav" >
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="flex flex-1 text-white justify-end gap-8 items-center text-xl font-semibold text-center max-md:text-lg max-md:max-w-full">
        <Nav.Item>
        <Nav.Link
          href="#about"
          className={`flex text-white gap-3 justify-center items-center self-stretch px-3 py-3.5 my-auto ${
            activeLink === 'about' ? 'text-black bg-[#CFF500]' : ''
          }`}
          onClick={() => handleLinkClick('about')}
        >
          Về chúng tôi
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link
          href="#login"
          className={`flex gap-3 justify-center items-center self-stretch px-3 py-3.5 my-auto ${
            activeLink === 'login' ? 'text-black bg-[#CFF500]' : ''
          }`}
          onClick={() => handleLinkClick('login')}
        >
          Đăng nhập
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link
          href="#signup"
          className={`flex gap-3 justify-center items-center self-stretch px-3 py-3.5 my-auto ${
            activeLink === 'signup' ? 'text-black bg-[#CFF500]' : ''
          }`}
          onClick={() => handleLinkClick('signup')}
        >
          Đăng ký
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link
          href="#help"
          className={`flex gap-3 justify-center items-center self-stretch px-3 py-3.5 my-auto ${
            activeLink === 'help' ? 'text-black bg-[#CFF500]' : ''
          }`}
          onClick={() => handleLinkClick('help')}
        >
          Trợ giúp
        </Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;