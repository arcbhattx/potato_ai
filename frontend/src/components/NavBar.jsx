import React from 'react';

function NavBar() {
  const navbarElements = ['Home', 'About', 'Settings'];

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-bold">Potato Classification</h1>
        <ul className="flex space-x-6">

          {navbarElements.map((item, index) => (
            <li key={index} className="hover:text-gray-400 cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
