import React, { useState } from 'react';

function FilterBar({ filterProperties }) {
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleFilterChange = () => {
    // Call filterProperties function with selected filter criteria
    filterProperties(propertyType, priceRange);
  };

  return (
    <div className="filter-bar">
      <h2>Filters</h2>
      <div className="filter-options">
        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
          <option value="">Select Property Type</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          {/* Add more property types as needed */}
        </select>
        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="">Select Price Range</option>
          <option value="0-500">0 - 500</option>
          <option value="501-1000">501 - 1000</option>
          <option value="1001-1500">1001 - 1500</option>
          {/* Add more price ranges as needed */}
        </select>
        <button onClick={handleFilterChange}>Apply Filters</button>
      </div>
    </div>
  );
}

export default FilterBar;
