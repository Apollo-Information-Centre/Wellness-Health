import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const WellnessCenterMap = () => {
  const centers = [
    { location: [28.6139, 77.2090], name: 'New Delhi, India' },
    { location: [25.276987, 55.296249], name: 'Dubai, UAE' },
    { location: [37.7749, -122.4194], name: 'San Francisco, USA' },
    { location: [41.0082, 28.9784], name: 'Istanbul, Turkey' },
  ];

  useEffect(() => {
    // Fixing Leaflet marker icon issues by providing the correct paths
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
    
    return () => {
      // Cleanup Leaflet map instance
      if (window.L) {
        window.L.DomEvent.off(window.L.DomEvent, 'click');
      }
    };
  }, []);

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f8f8f8' }}>
      <h2 style={{ textAlign: 'center', color: '#0b486b', fontFamily: 'Merriweather, serif' }}>
        Our Wellness Centers
      </h2>
      <MapContainer
        center={[28.6139, 77.2090]} // Default center
        zoom={5}
        style={{ height: '500px', width: '100%', borderRadius: '10px', marginTop: '1rem' }}
        whenCreated={map => map.on('moveend', () => { console.log('Map is ready'); })}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {centers.map((center, idx) => (
          <Marker key={idx} position={center.location}>
            <Popup>
              <b>{center.name}</b>
              <br />
              Visit us for an unforgettable wellness experience.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WellnessCenterMap;
