// Name : Om Makwana
// Student ID : 101414422



import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false,
  });

  
  const [submittedData, setSubmittedData] = useState(null);

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    setSubmittedData(formData); // Stores submitted data for display
  };

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
        <input type="text" name="address" placeholder="1234 Main St" value={formData.address} onChange={handleChange} />
        <input type="text" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
        <select name="province" value={formData.province} onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="Alberta">Alberta</option>
          <option value="British Columbia">British Columbia</option>
          <option value="Manitoba">Manitoba</option>
          <option value="New Brunswick">New Brunswick</option>
          <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
          <option value="Nova Scotia">Nova Scotia</option>
          <option value="Ontario">Ontario</option>
          <option value="Prince Edward Island">Prince Edward Island</option>
          <option value="Quebec">Quebec</option>
          <option value="Saskatchewan">Saskatchewan</option>
          
        </select>
        <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />
        <label>
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
          Agree Terms & Condition?
        </label>
        <button type="submit">Submit</button>
      </form>

      
      {submittedData && (
        <div className="submitted-info">
          <h2>Submitted Data</h2>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
