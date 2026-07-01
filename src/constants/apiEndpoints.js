/**
 * Backend API Endpoints Mapping
 */
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    LOGOUT: '/api/v1/auth/logout',
    REFRESH: '/api/v1/auth/refresh',
    ME: '/api/v1/auth/me',
  },
  SERVICES: {
    LIST: '/api/v1/services',
    DETAILS: (id) => `/api/v1/services/${id}`,
  },
  QUOTES: {
    SUBMIT: '/api/v1/quotes/submit',
  },
};

export default API_ENDPOINTS;
