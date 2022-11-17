import { useState } from 'react';
import { NavLink } from 'react-router-dom' ;
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import logo  from '../assets/logo.png';
import { links } from '../assets/constants';


const NavLinks = () => (
  <div className='mt-10 '>
    {links.map((item) => (
      <NavLink 
      className="nv"
      key={item.name}
      to={item.to}
      >
        <item.icon />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  return(
    <div className='nav'>
        <img src={logo} alt="logo" className='navimg' />
        <NavLinks/>
    </div>
  
  );
};

export default Sidebar;
