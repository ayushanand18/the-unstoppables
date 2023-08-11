"use client";
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar: React.FC = () => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission behavior
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-9/12 px-1 sm:px-4 py-1.5 flex justify-between items-center shadow-md bg-white rounded-sm overflow-hidden">
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="text-sm flex-1 outline-none border-none placeholder-gray-500"
        type="text"
        placeholder="Search for products, brands and more"
      />
      <button type="submit" className="text-primary-blue">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Searchbar;
