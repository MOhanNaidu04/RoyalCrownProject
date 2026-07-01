import apiClient from './apiClient';
import { API_ENDPOINTS } from '@/constants/apiEndpoints';

/**
 * Domain-specific security operations service client
 */
export const securityService = {
  submitQuoteRequest: async (quoteDetails) => {
    return apiClient(API_ENDPOINTS.QUOTES.SUBMIT, {
      method: 'POST',
      body: JSON.stringify(quoteDetails)
    });
  },

  getServicesList: async () => {
    return apiClient(API_ENDPOINTS.SERVICES.LIST);
  }
};

export default securityService;
