import React from "react";

function SearchBar({ setSearchQuery }) {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full max-w-[767px]">
      <div className="flex items-center p-2   rounded shadow-md ">
        <input
          type="search"
          placeholder="Search..."
          className="flex-grow p-2 text-gray-700 border bg-transparent focus:outline-none"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default SearchBar;
