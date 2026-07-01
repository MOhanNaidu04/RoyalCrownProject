/**
 * Standard utility validations (e.g. email, password length check)
 */

export const isValidEmail = (email) => {
  if (!email) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const isValidPassword = (password) => {
  // Simple validation: Password must be at least 8 characters
  return typeof password === 'string' && password.trim().length >= 8;
};
