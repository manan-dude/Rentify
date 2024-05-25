import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import FilterBar from './FilterBar';

import './PropertyList.css'

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties(); // Fetch all properties initially
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/properties");
      setProperties(response.data.data);
      console.log(properties)
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const filterProperties = async (propertyType, priceRange) => {
    // Filter properties based on selected criteria
    try {
      const response = await axios.get("http://localhost:5000/api/properties", {
        params: {
          propertyType,
          priceRange
        }
      });
      setProperties(response.data.data);
    } catch (error) {
      console.error("Error filtering properties:", error);
    }
  };

  return (
    <div>
     {/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /> */}
<main>
  {properties.length > 0 ? ( // Check if properties array is not empty
    <div class="card">
      <img src="https://i.pinimg.com/564x/77/20/0b/77200bca67b1407e9c1279f2a4afeb32.jpg" alt="" />
      <div class="card-content">
        <h2>{properties[0].title}</h2>
        <p>
          {properties[0].description}
          <br />
          {properties[0].location.address}, 
          {properties[0].location.city}, 
          {properties[0].location.state}, 
          {properties[0].location.zipCode}
        </p>
        <a href="#" class="button">
          I'm Interested 
          <span class="material-symbols-outlined">
            <b>→</b>
          </span>
        </a>
      </div>
    </div>
  ) : (
    <p>No properties found</p> // Display a message if properties array is empty
  )}
</main>

    </div>
  );
}

export default PropertyList;
