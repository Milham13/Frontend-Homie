import React, { useState } from 'react';

const NavbarA = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the onSearch function passed as prop
  };

  return (
    <div className="bg-sky-200 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="../assets/LogoLPKU.png" alt="Logo" className="h-8" />
        <h1 className="ml-4 text-xl font-bold">Admin Panel</h1>
      </div>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search"
          className="border rounded-lg py-2 px-4"
        />
      </div>
    </div>
  );
};

export default NavbarA;