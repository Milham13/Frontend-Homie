import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <h2 className="text-xl font-semibold">Admin Dashboard</h2>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </header>
  );
};

export default Header;