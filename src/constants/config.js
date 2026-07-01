/**
 * Global Application Configurations
 */
export const APP_CONFIG = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.royalcrownsecurity.com',
  API_TIMEOUT_MS: 10000,
  LOCAL_STORAGE_TOKEN_KEY: 'rcss_auth_token',
  APP_NAME: 'Royal Crown Security Services',
};

export default APP_CONFIG;
