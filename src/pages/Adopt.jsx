import React, { useState, useEffect } from 'react';
import PetCard from '../components/PetCard';
import { petAPI } from '../services/api';

function Adopt() {
  const [selectedType, setSelectedType] = useState('all');
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await petAPI.getAll();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPets();
  }, []);
  
  const filteredPets = selectedType === 'all' ? pets : pets.filter(pet => pet.type === selectedType);
  
  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '1.125rem', color: '#6b7280' }}>Loading pets...</div>
      </div>
    );
  }
  
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '2rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            Find Your Perfect
            <span style={{ display: 'block', background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Companion
            </span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto' }}>
            Browse our available pets and find your new best friend today.
          </p>
        </div>
        
        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <button 
            onClick={() => setSelectedType('all')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: '500',
              transition: 'all 0.3s',
              border: 'none',
              cursor: 'pointer',
              ...(selectedType === 'all' 
                ? { backgroundColor: '#2563eb', color: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }
                : { backgroundColor: 'white', color: '#374151', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' })
            }}
          >
            All Pets
          </button>
          <button 
            onClick={() => setSelectedType('dog')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: '500',
              transition: 'all 0.3s',
              border: 'none',
              cursor: 'pointer',
              ...(selectedType === 'dog' 
                ? { backgroundColor: '#2563eb', color: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }
                : { backgroundColor: 'white', color: '#374151', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' })
            }}
          >
            <span>🐶</span>
            <span>Dogs</span>
          </button>
          <button 
            onClick={() => setSelectedType('cat')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: '500',
              transition: 'all 0.3s',
              border: 'none',
              cursor: 'pointer',
              ...(selectedType === 'cat' 
                ? { backgroundColor: '#2563eb', color: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }
                : { backgroundColor: 'white', color: '#374151', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' })
            }}
          >
            <span>🐱</span>
            <span>Cats</span>
          </button>
        </div>
        
        {/* Pet Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', justifyItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          {filteredPets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
        
        {filteredPets.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🐾</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>No pets found</h3>
            <p style={{ color: '#6b7280' }}>Try adjusting your filters or check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Adopt;