import React from 'react';
import { Viewer, Entity } from 'resium';
import { Cartesian3, Color } from 'cesium';

const GlobeViewer = () => {
  return (
    <Viewer full>
      <Entity
        name="Local de Interesse"
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        point={{ pixelSize: 10, color: Color.RED }}
      />
    </Viewer>
  );
};    

export default GlobeViewer;
