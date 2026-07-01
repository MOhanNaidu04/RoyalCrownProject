import apiClient from './apiClient';
import { API_ENDPOINTS } from '@/constants/apiEndpoints';
import { APP_CONFIG } from '@/constants/config';

/**
 * Authentication service handling login, logout and active session details
 */
export const authService = {
  login: async (email, password) => {
    // Live Fetch integration:
    // const response = await apiClient(API_ENDPOINTS.AUTH.LOGIN, {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password })
    // });
    // localStorage.setItem(APP_CONFIG.LOCAL_STORAGE_TOKEN_KEY, response.token);
    // return response.user;

    // Simulator
    await new Promise((resolve) => setTimeout(resolve, 600));
    if (email && password) {
      const mockUser = { 
        id: 'u-99', 
        name: 'Alexander Crown', 
        email: email, 
        role: 'Premium Client' 
      };
      localStorage.setItem(APP_CONFIG.LOCAL_STORAGE_TOKEN_KEY, 'mock-jwt-token-val');
      return mockUser;
    }
    throw new Error('Verification failure: invalid credentials');
  },

  logout: async () => {
    // Live Fetch integration:
    // await apiClient(API_ENDPOINTS.AUTH.LOGOUT, { method: 'POST' });
    localStorage.removeItem(APP_CONFIG.LOCAL_STORAGE_TOKEN_KEY);
    return true;
  },

  getCurrentUser: async () => {
    const token = localStorage.getItem(APP_CONFIG.LOCAL_STORAGE_TOKEN_KEY);
    if (!token) return null;

    // Live Fetch integration:
    // return apiClient(API_ENDPOINTS.AUTH.ME);

    return { 
      id: 'u-99', 
      name: 'Alexander Crown', 
      email: 'admin@royalcrown.com', 
      role: 'Premium Client' 
    };
  }
};

export default authService;
