import React, { useState } from 'react';
import AdoptionModal from './AdoptionModal';

function PetCard({ pet }) {
  const [showAdoption, setShowAdoption] = useState(false);
  const { name, breed, age, image, description, type } = pet || {};
  
  return (
    <div className="card" style={{ cursor: 'pointer', maxWidth: '320px', width: '100%' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          src={image || '/api/placeholder/300/250'} 
          alt={name}
          style={{ width: '100%', height: '200px', objectFit: 'cover', transition: 'transform 0.3s' }}
        />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
          <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(4px)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
            {type === 'dog' ? '🐶' : type === 'cat' ? '🐱' : '🐹'} {breed}
          </span>
        </div>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <button style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(4px)', padding: '0.5rem', borderRadius: '9999px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}>
            <svg style={{ width: '1.25rem', height: '1.25rem', color: '#6b7280' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>{name || 'Buddy'}</h3>
          <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '0.25rem 0.5rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500' }}>
            {age || '2'} years
          </span>
        </div>
        
        <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.875rem', lineHeight: '1.4' }}>
          {description || 'A loving and playful companion looking for a forever home.'}
        </p>
        
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button 
            onClick={() => setShowAdoption(true)}
            className="btn-primary" 
            style={{ flex: 1, padding: '0.5rem', fontSize: '0.875rem' }}
          >
            Adopt Me
          </button>
          <button style={{ padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', backgroundColor: 'transparent', cursor: 'pointer', transition: 'background-color 0.3s' }}>
            <svg style={{ width: '1.25rem', height: '1.25rem', color: '#6b7280' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>
      
      <AdoptionModal 
        pet={pet}
        isOpen={showAdoption}
        onClose={() => setShowAdoption(false)}
      />
    </div>
  );
}

export default PetCard;