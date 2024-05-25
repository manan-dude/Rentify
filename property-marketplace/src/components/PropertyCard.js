import React, { useState } from 'react';

function PropertyCard({ property }) {
  const [showSellerDetails, setShowSellerDetails] = useState(false);

  const handleInterestedClick = () => {
    setShowSellerDetails(true); // Show seller details when button is clicked
  };

  return (
    <div className="property-card">
      <h3>{property.title}</h3>
      <p>Description: {property.description}</p>
      <p>Price: ${property.price}</p>
      <p>Property Type: {property.propertyType}</p>
      <p>Location: {property.location.address}, {property.location.city}, {property.location.state}, {property.location.zipCode}</p>
      <p>Area: {property.area} sqft</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Parking Spaces: {property.parkingSpaces}</p>
      <p>Year Built: {property.yearBuilt}</p>
      <p>Furnishing Status: {property.furnishingStatus}</p>
      <p>Condition: {property.condition}</p>
      <p>Amenities: {property.amenities.join(', ')}</p>
      <p>Nearby Facilities:</p>
      <ul>
        <li>Hospitals: {property.nearbyFacilities.hospitals.join(', ')}</li>
        <li>Colleges: {property.nearbyFacilities.colleges.join(', ')}</li>
        <li>Schools: {property.nearbyFacilities.schools.join(', ')}</li>
        <li>Shopping Malls: {property.nearbyFacilities.shoppingMalls.join(', ')}</li>
        <li>Public Transport: {property.nearbyFacilities.publicTransport.join(', ')}</li>
      </ul>
      <button onClick={handleInterestedClick}>I'm Interested</button>
      
      {/* Seller Details */}
      {showSellerDetails && (
        <div className="seller-details">
          <h4>Seller Details</h4>
          {/* Display seller information here */}
        </div>
      )}
    </div>
  );
}

export default PropertyCard;
