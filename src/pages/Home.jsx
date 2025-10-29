import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
              Find Your New
              <span style={{ display: 'block', background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Best Friend
              </span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}>
              Connect with loving pets in need of forever homes. Every adoption saves a life.
            </p>
            
            {/* Search Bar */}
            <div style={{ maxWidth: '32rem', margin: '0 auto 2rem' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search by name, breed, or age"
                  style={{ width: '100%', padding: '1rem 1.5rem 1rem 3rem', fontSize: '1.125rem', border: '2px solid #e5e7eb', borderRadius: '1rem', outline: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <svg style={{ position: 'absolute', left: '1rem', top: '1rem', width: '1.5rem', height: '1.5rem', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Category Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: 'white', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb', cursor: 'pointer', transition: 'all 0.3s' }}>
                <span style={{ fontSize: '1.5rem' }}>🐶</span>
                <span style={{ fontWeight: '500', color: '#374151' }}>Dogs</span>
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: 'white', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb', cursor: 'pointer', transition: 'all 0.3s' }}>
                <span style={{ fontSize: '1.5rem' }}>🐱</span>
                <span style={{ fontWeight: '500', color: '#374151' }}>Cats</span>
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: 'white', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb', cursor: 'pointer', transition: 'all 0.3s' }}>
                <span style={{ fontSize: '1.5rem' }}>🐹</span>
                <span style={{ fontWeight: '500', color: '#374151' }}>Other</span>
              </button>
            </div>
            
            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
              <Link to="/adopt" className="btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', textDecoration: 'none', display: 'inline-block' }}>
                Start Adopting →
              </Link>
              <Link to="/give-up-pet" className="btn-secondary" style={{ fontSize: '1.125rem', padding: '1rem 2rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', textDecoration: 'none', display: 'inline-block' }}>
                Surrender a Pet
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div style={{ backgroundColor: 'white', padding: '4rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>500+</div>
              <div style={{ color: '#6b7280' }}>Pets Adopted</div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#9333ea', marginBottom: '0.5rem' }}>50+</div>
              <div style={{ color: '#6b7280' }}>Available Pets</div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#059669', marginBottom: '0.5rem' }}>100%</div>
              <div style={{ color: '#6b7280' }}>Love Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;