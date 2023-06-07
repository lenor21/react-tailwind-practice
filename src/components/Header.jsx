import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Header = () => {
  const [menuButton, setMenuButton] = useState(false);

  const handleMenuButton = () => {
    setMenuButton(!menuButton);
  };

  useEffect(() => {
    console.log(menuButton);
  }, [menuButton]);

  return (
    <div className='h-16 w-full bg-[#333] shadow-md fixed top-0 left-0 z-50'>
      <nav className='flex h-full px-5 text-white justify-between items-center md:mx-10'>
        <h1>
          <a className='text-xl font-medium' href='#'>
            Authentication
          </a>
        </h1>

        {/* menu pc */}
        <ul className='md:flex hidden gap-x-7'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/register'>Register</NavLink>
          </li>
          <li>
            <NavLink
              className='bg-blue-800 w-full px-5 py-2 ml-5 rounded-md'
              to='#'
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* menu mobile */}
        <ul
          className={`${
            menuButton ? 'translate-x-0' : 'translate-x-full'
          } transition-all duration-300 grid text-[#fff] font-medium bg=[#333] backdrop-blur-sm backdrop-brightness-50 h-auto w-full absolute top-16 left-0 py-5`}
        >
          <li className='text-center py-3'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='text-center py-3'>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li className='text-center py-3'>
            <NavLink to='/register'>Register</NavLink>
          </li>
          <li className='text-center mt-8 py-3 px-3'>
            <NavLink
              className='bg-blue-800 w-full block py-3 rounded-md'
              to='#'
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className='md:hidden' onClick={handleMenuButton}>
          {menuButton ? (
            <FaTimes className='h-6 w-6' />
          ) : (
            <FaBars className='h-6 w-6' />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
