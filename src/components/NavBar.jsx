import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInModal from './SignInModal';

function NavBar() {
  const [user, setUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignIn = (email) => {
    setUser({ email });
  };

  const handleSignOut = () => {
    setUser(null);
  };
  return (
    <nav style={{ backgroundColor: 'white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderBottom: '1px solid #f3f4f6', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', transition: 'opacity 0.3s' }}>
            <span style={{ fontSize: '1.5rem' }}>🐾</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Paw Adoption
            </span>
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link 
              to="/" 
              style={{ color: '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#2563eb'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              Home
            </Link>
            <Link 
              to="/adopt" 
              style={{ color: '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#2563eb'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              Adopt
            </Link>
            <Link 
              to="/give-up-pet" 
              style={{ color: '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#2563eb'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              Surrender
            </Link>
            <Link 
              to="/contact" 
              style={{ color: '#374151', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#2563eb'}
              onMouseLeave={(e) => e.target.style.color = '#374151'}
            >
              Contact
            </Link>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '0.875rem', color: '#374151' }}>Welcome, {user.email.split('@')[0]}</span>
                <button 
                  onClick={handleSignOut}
                  className="btn-secondary" 
                  style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowSignIn(true)}
                className="btn-primary" 
                style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
      
      <SignInModal 
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSignIn={handleSignIn}
      />
    </nav>
  );
}

export default NavBar;