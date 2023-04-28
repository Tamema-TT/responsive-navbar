import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const NavBar = () => {
  // Use state to keep track of whether the menu is displayed or not
  const [displayMenu, setDisplayMenu] = useState(false);

  // Toggles the menu
  const toggleNav = () => {
    // Invert the displayMenu state
    setDisplayMenu(!displayMenu);
  };

  // Handles clicks on menu items
  const handleMenuItemClick = () => {
    // Collapse the menu when a menu item is clicked
    setDisplayMenu(false);
  };

  return (
    <Navbar expand="lg" className="fixed-top" expanded={displayMenu}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} className="navbar-toggler" />
      <Navbar.Collapse id="basic-navbar-nav" onBlur={() => setDisplayMenu(false)} className="navbar-collapse">
        <Nav className="mx-auto navbar-nav" onSelect={() => setDisplayMenu(false)}>
          <Nav.Link href="#home" onClick={handleMenuItemClick} className="nav-link">Home</Nav.Link>
          <Nav.Link href="#about" onClick={handleMenuItemClick} className="nav-link">About</Nav.Link>
          <Nav.Link href="#services" onClick={handleMenuItemClick} className="nav-link">Services</Nav.Link>
          <Nav.Link href="#portfolio" onClick={handleMenuItemClick} className="nav-link">Portfolio</Nav.Link>
          <Nav.Link href="#contact" onClick={handleMenuItemClick} className="nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
