const API_BASE_URL = 'http://localhost:3001';

// Generic API functions
const api = {
  get: async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  },
  
  post: async (endpoint, data) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  }
};

// Pet-related API functions
export const petAPI = {
  getAll: () => api.get('/pets'),
  getById: (id) => api.get(`/pets/${id}`)
};

// Application-related API functions
export const applicationAPI = {
  create: (application) => api.post('/applications', { 
    ...application, 
    status: 'pending',
    submittedAt: new Date().toISOString()
  })
};

// Surrender-related API functions
export const surrenderAPI = {
  create: (surrender) => api.post('/surrenders', { 
    ...surrender, 
    status: 'pending',
    submittedAt: new Date().toISOString()
  })
};

// Contact-related API functions
export const contactAPI = {
  create: (contact) => api.post('/contacts', { 
    ...contact, 
    status: 'new',
    submittedAt: new Date().toISOString()
  })
};