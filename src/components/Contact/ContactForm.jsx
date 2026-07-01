import React, { useState } from 'react';
import { Button } from '@/components';

/**
 * Validated contact form with WCAG role="alert" + aria-live on error messages
 */
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.length < 3) {
      newErrors.name = 'Full name must be at least 3 characters.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/[-+() ]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits).';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }
  };

  if (isSubmitted) {
    return (
      <div className="rcss-contact-success" role="status" aria-live="polite">
        <div className="rcss-contact-success__icon" aria-hidden="true">✓</div>
        <h3 className="rcss-contact-success__title">Message Transmitted</h3>
        <p className="rcss-contact-success__desc">
          Thank you. Your inquiry has been logged in our dispatch desk. An advisor will contact you within 2 business hours.
        </p>
        <Button variant="primary" onClick={() => setIsSubmitted(false)}>
          Submit Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      className="rcss-contact-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Security services enquiry form"
    >
      <div className="rcss-form-row">
        <div className="rcss-form-group">
          <label htmlFor="contact-name" className="rcss-form-label">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`rcss-form-input ${errors.name ? 'rcss-form-input--error' : ''}`}
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && (
            <span
              id="contact-name-error"
              className="rcss-form-error"
              role="alert"
              aria-live="polite"
            >
              {errors.name}
            </span>
          )}
        </div>

        <div className="rcss-form-group">
          <label htmlFor="contact-email" className="rcss-form-label">
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@sovereign.com"
            className={`rcss-form-input ${errors.email ? 'rcss-form-input--error' : ''}`}
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && (
            <span
              id="contact-email-error"
              className="rcss-form-error"
              role="alert"
              aria-live="polite"
            >
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="rcss-form-row">
        <div className="rcss-form-group">
          <label htmlFor="contact-phone" className="rcss-form-label">
            Phone Number <span aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="555-019-2834"
            className={`rcss-form-input ${errors.phone ? 'rcss-form-input--error' : ''}`}
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
          />
          {errors.phone && (
            <span
              id="contact-phone-error"
              className="rcss-form-error"
              role="alert"
              aria-live="polite"
            >
              {errors.phone}
            </span>
          )}
        </div>

        <div className="rcss-form-group">
          <label htmlFor="contact-subject" className="rcss-form-label">Service Required</label>
          <select
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="rcss-form-select"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Armed Guarding">Armed Guarding &amp; Tactical</option>
            <option value="Facility Management">Facility Management</option>
            <option value="CCTV Systems">CCTV Surveillance &amp; Alarms</option>
            <option value="Risk Assessment">Risk Assessment Sweep</option>
          </select>
        </div>
      </div>

      <div className="rcss-form-group">
        <label htmlFor="contact-message" className="rcss-form-label">
          Message Details <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your security requirements in detail..."
          className={`rcss-form-textarea ${errors.message ? 'rcss-form-input--error' : ''}`}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <span
            id="contact-message-error"
            className="rcss-form-error"
            role="alert"
            aria-live="polite"
          >
            {errors.message}
          </span>
        )}
      </div>

      <Button type="submit" variant="primary" style={{ width: '100%' }}>
        Transmit Secure Message
      </Button>
    </form>
  );
}

export default ContactForm;
