import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixing Leaflet marker icon issues by providing the correct paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const WellnessCenters = () => {
  const mapRef = useRef(null); // Create a reference for the map

  const centers = [
    {
      location: [28.6139, 77.2090],
      name: 'New Delhi, India',
      image: '/assets/images/delhi-center.jpg',
      video: 'https://www.youtube.com/watch?v=XXXXXXX',
      services: 'Yoga, Spa, Ayurvedic Treatments, Nutrition Consultation',
      contact: '+91 123 456 7890',
    },
    {
      location: [25.276987, 55.296249],
      name: 'Dubai, UAE',
      image: '/assets/images/dubai-center.jpg',
      video: 'https://www.youtube.com/watch?v=XXXXXXX',
      services: 'Luxury Spa, Massage Therapy, Fitness Classes',
      contact: '+971 123 456 789',
    },
    {
      location: [37.7749, -122.4194],
      name: 'San Francisco, USA',
      image: '/assets/images/sf-center.jpg',
      video: 'https://www.youtube.com/watch?v=XXXXXXX',
      services: 'Detox Programs, Meditation, Wellness Retreats',
      contact: '+1 234 567 890',
    },
    {
      location: [41.0082, 28.9784],
      name: 'Istanbul, Turkey',
      image: '/assets/images/istanbul-center.jpg',
      video: 'https://www.youtube.com/watch?v=XXXXXXX',
      services: 'Massage Therapy, Holistic Healing, Fitness Programs',
      contact: '+90 123 456 789',
    },
  ];

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.leafletElement.invalidateSize(); // Adjust map size if it doesn't render correctly
    }
  }, []);

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f8f8f8' }}>
      <h2 style={{ textAlign: 'center', color: '#0b486b', fontFamily: 'Merriweather, serif' }}>
        Our Wellness Centers
      </h2>
      <p style={{ textAlign: 'center', color: '#555', fontFamily: 'Roboto, sans-serif' }}>
        Explore our luxurious wellness centers worldwide. Click on the markers for details.
      </p>
      <MapContainer
        ref={mapRef} // Use the ref to prevent reinitialization
        center={[28.6139, 77.2090]} // Default center (New Delhi)
        zoom={5}
        style={{ height: '500px', width: '100%', borderRadius: '10px', marginTop: '1rem' }}
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
              <img src={center.image} alt={center.name} style={{ width: '100%', borderRadius: '8px' }} />
              <br />
              <strong>Services:</strong> {center.services}
              <br />
              <strong>Contact:</strong> {center.contact}
              <br />
              <a href={center.video} target="_blank" rel="noopener noreferrer">
                Watch our Video
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WellnessCenters;
