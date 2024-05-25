import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './AddProperty.css'

// Styled components for layout
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  boer
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
`;

const AddPropertyPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    propertyType: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    parkingSpaces: '',
    yearBuilt: '',
    furnishingStatus: '',
    condition: '',
    amenities: '',
    nearbyFacilities: {
      hospitals: '',
      colleges: '',
      schools: '',
      shoppingMalls: '',
      publicTransport: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/properties', formData);
      console.log('Property added successfully:', response.data);
      // Clear form after submission (if needed)
      setFormData({
        title: '',
        description: '',
        price: '',
        propertyType: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        parkingSpaces: '',
        yearBuilt: '',
        furnishingStatus: '',
        condition: '',
        amenities: '',
        nearbyFacilities: {
          hospitals: '',
          colleges: '',
          schools: '',
          shoppingMalls: '',
          publicTransport: '',
        },
      });
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
  //   <FormContainer>
  //     <h1>Add New Property</h1>
  //     <Form onSubmit={handleSubmit}>
  //     <Label htmlFor="title">Title:</Label>
  // <Input
  //   type="text"
  //   id="title"
  //   name="title"
  //   value={formData.title}
  //   onChange={handleChange}
  //   required
  // />

  // <Label htmlFor="description">Description:</Label>
  // <TextArea
  //   id="description"
  //   name="description"
  //   value={formData.description}
  //   onChange={handleChange}
  //   rows={4}
  //   required
  // />

  // <Label htmlFor="price">Price:</Label>
  // <Input
  //   type="number"
  //   id="price"
  //   name="price"
  //   value={formData.price}
  //   onChange={handleChange}
  //   required
  // />

  // <Label htmlFor="propertyType">Property Type:</Label>
  // <Input
  //   type="text"
  //   id="propertyType"
  //   name="propertyType"
  //   value={formData.propertyType}
  //   onChange={handleChange}
  //   required
  // />

  // <Label htmlFor="area">Area (in sq ft):</Label>
  // <Input
  //   type="number"
  //   id="area"
  //   name="area"
  //   value={formData.area}
  //   onChange={handleChange}
  //   required
  // />

  // <Label htmlFor="bedrooms">Bedrooms:</Label>
  // <Input
  //   type="number"
  //   id="bedrooms"
  //   name="bedrooms"
  //   value={formData.bedrooms}
  //   onChange={handleChange}
  //   required
  // />

  // <Label htmlFor="bathrooms">Bathrooms:</Label>
  // <Input
  //   type="number"
  //   id="bathrooms"
  //   name="bathrooms"
  //   value={formData.bathrooms}
  //   onChange={handleChange}
  //   required
  // />

  // <Label htmlFor="parkingSpaces">Parking Spaces:</Label>
  // <Input
  //   type="number"
  //   id="parkingSpaces"
  //   name="parkingSpaces"
  //   value={formData.parkingSpaces}
  //   onChange={handleChange}
  // />

  // <Label htmlFor="yearBuilt">Year Built:</Label>
  // <Input
  //   type="number"
  //   id="yearBuilt"
  //   name="yearBuilt"
  //   value={formData.yearBuilt}
  //   onChange={handleChange}
  // />

  // <Label htmlFor="furnishingStatus">Furnishing Status:</Label>
  // <Input
  //   type="text"
  //   id="furnishingStatus"
  //   name="furnishingStatus"
  //   value={formData.furnishingStatus}
  //   onChange={handleChange}
  // />

  // <Label htmlFor="condition">Condition:</Label>
  // <Input
  //   type="text"
  //   id="condition"
  //   name="condition"
  //   value={formData.condition}
  //   onChange={handleChange}
  // />

  // <Label htmlFor="amenities">Amenities (comma-separated):</Label>
  // <Input
  //   type="text"
  //   id="amenities"
  //   name="amenities"
  //   value={formData.amenities}
  //   onChange={handleChange}
  // />

  // <Label htmlFor="hospitals">Nearby Hospitals:</Label>
  // <Input
  //   type="text"
  //   id="hospitals"
  //   name="hospitals"
  //   value={formData.nearbyFacilities.hospitals}
  //   onChange={(e) => handleChange({ target: { name: 'hospitals', value: e.target.value } })}
  // />

  // <Label htmlFor="colleges">Nearby Colleges:</Label>
  // <Input
  //   type="text"
  //   id="colleges"
  //   name="colleges"
  //   value={formData.nearbyFacilities.colleges}
  //   onChange={(e) => handleChange({ target: { name: 'colleges', value: e.target.value } })}
  // />

  // <Label htmlFor="schools">Nearby Schools:</Label>
  // <Input
  //   type="text"
  //   id="schools"
  //   name="schools"
  //   value={formData.nearbyFacilities.schools}
  //   onChange={(e) => handleChange({ target: { name: 'schools', value: e.target.value } })}
  // />

  // <Label htmlFor="shoppingMalls">Nearby Shopping Malls:</Label>
  // <Input
  //   type="text"
  //   id="shoppingMalls"
  //   name="shoppingMalls"
  //   value={formData.nearbyFacilities.shoppingMalls}
  //   onChange={(e) => handleChange({ target: { name: 'shoppingMalls', value: e.target.value } })}
  // />

  // <Label htmlFor="publicTransport">Public Transport Nearby:</Label>
  // <Input
  //   type="text"
  //   id="publicTransport"
  //   name="publicTransport"
  //   value={formData.nearbyFacilities.publicTransport}
  //   onChange={(e) => handleChange({ target: { name: 'publicTransport', value: e.target.value } })}
  // />

  //       <Button type="submit">Add Property</Button>
  //     </Form>
  //   </FormContainer>
  <div>
    <div class='signup-container'>
  <div class='left-container'>
    <h1>
      Add Property
    </h1>
    <div class='puppy'>
      <img src='https://cdn.dribbble.com/users/1781535/screenshots/15168159/media/f575904c65be3334bc166d8bee44a0e2.jpg?resize=400x0'>
    </img></div>
  </div>
  <div class='right-container'>
    <header>
      <h1>Rent your dream property today!</h1>
      <div class='set'>
        <div class='pets-name'>
          <label for='pets-name'>Title</label>
          <input id='pets-name' placeholder=" Title" type='text'></input>
          
        </div>
        <div class='pets-birthday'>
          <label for='pets-birthday'>Price</label>
          <input id='pets-birthday' placeholder='$Price' type='text'></input>
        </div>
      </div>
      <div class='set'>
        <div class='pets-breed'>
          <label for='pets-breed'>Description</label>
          <input id='pets-breed' placeholder="Description" type='text'></input>
        </div>
        <div class='pets-birthday'>
          <label for='pets-birthday'>Property Type</label>
          <input id='pets-birthday' placeholder='House,Condo, Studio' type='text'></input>
        </div>
      </div>
      <div class='set'>
        <div class='pets-gender'>
          <label for='pet-gender-female'>Parking</label>
          <div class='radio-container'>
            <input checked='' id='pet-gender-female' name='pet-gender' type='radio' value='female'></input>
            <label for='pet-gender-female'>Yes</label>
            <input id='pet-gender-male' name='pet-gender' type='radio' value='male'></input>
            <label for='pet-gender-male'>No</label>
          </div>
        </div>
        <div class='pets-spayed-neutered'>
          <label for='pet-spayed'>Bedrooms</label>
          <div class='radio-container'>
            <input checked='' id='pet-spayed' name='spayed-neutered' type='radio' value='spayed'></input>
            <label for='pet-spayed'>2 BHK</label>
            <input id='pet-neutered' name='spayed-neutered' type='radio' value='neutered'></input>
            <label for='pet-neutered'>3 BHK</label>
          </div>
        </div>
      </div>
      <div class='pets-weight'>
        <label for='pet-weight-0-25'>Condition</label>
        <div class='radio-container'>
          <input checked='' id='pet-weight-0-25' name='pet-weight' type='radio' value='0-25'></input>
          <label for='pet-weight-0-25'>Worst</label>
          <input id='pet-weight-25-50' name='pet-weight' type='radio' value='25-50'></input>
          <label for='pet-weight-25-50'>Good</label>
          <input id='pet-weight-50-100' name='pet-weight' type='radio' value='50-100'></input>
          <label for='pet-weight-50-100'>Better</label>
          <input id='pet-weight-100-plus' name='pet-weight' type='radio' value='100+'></input>
          <label for='pet-weight-100-plus'>Best</label>
        </div>
      </div>
    </header>
    <footer>
      <div class='set'>
        <button id='back'>Back</button>
        <button id='next'>Save</button>
      </div>
    </footer>
  </div>
</div>

  </div>
  );
};

export default AddPropertyPage;
