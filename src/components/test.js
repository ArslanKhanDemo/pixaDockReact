import React, { useState } from 'react';

const UpdateForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = "123"; // Replace with the actual user ID
    const url = `/api/users/${userId}`; // Replace with the actual API endpoint

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('User updated successfully:', data);
        // Handle success scenario
      })
      .catch(error => {
        console.error('Error updating user:', error);
        // Handle error scenario
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateForm;
