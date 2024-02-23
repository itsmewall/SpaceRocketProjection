// Componente InputForm.js

import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    altitude: '',
    velocity: '', // Exemplo de parâmetro adicional
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="latitude"
        type="number"
        placeholder="Latitude"
        value={formData.latitude}
        onChange={handleChange}
      />
      <input
        name="longitude"
        type="number"
        placeholder="Longitude"
        value={formData.longitude}
        onChange={handleChange}
      />
      <input
        name="altitude"
        type="number"
        placeholder="Altitude"
        value={formData.altitude}
        onChange={handleChange}
      />
      <input
        name="velocity"
        type="number"
        placeholder="Velocity"
        value={formData.velocity}
        onChange={handleChange}
      />
      <button type="submit">Simular Trajetória</button>
    </form>
  );
};

export default InputForm;
