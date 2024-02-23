// GlobeViewer.js
import React, { useState } from 'react';
import { Viewer, Entity } from 'resium';
import { Cartesian3, Color, Ion, buildModuleUrl } from 'cesium';
import InputForm from './InputForm';
import '../styles/GlobeViewer.css';

buildModuleUrl.setBaseUrl('/');
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MmFjZTE5OS00NmQ3LTQ1NDctYWQyMy04MzM0MDIwZDU0MWQiLCJpZCI6MTk3NDUzLCJpYXQiOjE3MDg3MDQ4NTd9.aRZXB2zE3zwVJn8C4cNQTwkvy8keyVMkpyTHqLa-0P8'

const GlobeViewer = () => {
  const [trajectoryPoints, setTrajectoryPoints] = useState([]);

  const simulateTrajectory = ({ latitude, longitude, altitude }) => {
    const baseAltitude = parseFloat(altitude);
    const points = [];
    for (let i = 0; i <= 10; i++) {
      const pointAltitude = baseAltitude + i * 10000; // Aumenta 10.000 metros a cada ponto
      points.push(Cartesian3.fromDegrees(parseFloat(longitude), parseFloat(latitude), pointAltitude));
    }
    setTrajectoryPoints(points);
  };

  return (
    <div>
      <InputForm onSubmit={simulateTrajectory} />
      <Viewer full>
        {trajectoryPoints.length > 0 && (
          <Entity
            name="Trajetória Simulada"
            polyline={{
              positions: trajectoryPoints,
              width: 5,
              material: Color.RED,
            }}
          />
        )}
      </Viewer>
    </div>
  );
};

export default GlobeViewer;
