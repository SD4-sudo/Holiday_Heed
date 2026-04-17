'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    travelers: '',
    message: ''
  });
  
  // New state for field-specific validation errors
  const [errors, setErrors] = useState({
    fullName: '',
    mobile: '',
    email: '',
    travelers: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [globalError, setGlobalError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear the specific error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { fullName: '', mobile: '', email: '', travelers: '' };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile No. is required';
      isValid = false;
    } else if (formData.mobile.length < 10) {
      newErrors.mobile = 'Enter a valid 10-digit number';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!formData.travelers) {
      newErrors.travelers = 'Required';
      isValid = false;
    } else if (parseInt(formData.travelers) < 1) {
      newErrors.travelers = 'Must be at least 1';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError('');
    
    // Run React validation before submitting
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          travelers: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setGlobalError(data.message || 'Failed to send email. Please try again.');
      }
    } catch (error: any) {
      setGlobalError(error.message || 'Network error. Please check your connection.');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${compact ? 'p-6' : 'p-10'} bg-white shadow-2xl border border-gray-300`}>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-lg">Hi <span className="inline-block animate-wave origin-bottom-right">👋</span></span>
        <span className="font-black text-on-surface text-sm lg:text-base">, Get Perfect Kashmir Itinerary.</span>
      </div>

      {globalError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm font-bold">
          {globalError}
        </div>
      )}

      <form className="space-y-4 lg:space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              Full Name<span className="text-red-500">*</span>:
            </label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-medium text-xs lg:text-sm ${
                errors.fullName 
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10' 
                  : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
              }`}
              placeholder="Enter your name"
            />
            {errors.fullName && <p className="text-red-500 text-[10px] font-bold mt-1.5">{errors.fullName}</p>}
          </div>
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              Mobile No.<span className="text-red-500">*</span>:
            </label>
            <input 
              type="tel" 
              name="mobile"
              value={formData.mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                setFormData(prev => ({ ...prev, mobile: value }));
                if (errors.mobile) setErrors(prev => ({ ...prev, mobile: '' }));
              }}
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-medium text-xs lg:text-sm ${
                errors.mobile 
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10' 
                  : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
              }`}
              placeholder="Enter mobile number"
            />
            {errors.mobile && <p className="text-red-500 text-[10px] font-bold mt-1.5">{errors.mobile}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              Email<span className="text-red-500">*</span>:
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-medium text-xs lg:text-sm ${
                errors.email 
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10' 
                  : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
              }`}
              placeholder="Enter email address"
            />
            {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1.5">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              No. Of Travelers<span className="text-red-500">*</span>:
            </label>
            <input 
              type="number" 
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-medium text-xs lg:text-sm ${
                errors.travelers 
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10' 
                  : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
              }`}
              placeholder="Number of people"
            />
            {errors.travelers && <p className="text-red-500 text-[10px] font-bold mt-1.5">{errors.travelers}</p>}
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
            Message <span className="text-gray-400 font-medium">(optional)</span>
          </label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-xs lg:text-sm min-h-[100px] lg:min-h-[120px] resize-none"
            placeholder="Write your message (max 200 characters)"
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={loading || submitted}
          className={`w-full py-4 font-black rounded-xl shadow-lg transition-all active:scale-[0.98] uppercase tracking-widest text-xs lg:text-sm cursor-pointer ${
            submitted 
              ? 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/20' 
              : 'bg-primary hover:bg-primary/90 disabled:opacity-70 text-white shadow-primary/20'
          }`}
        >
          {submitted ? '✓ Thank you! We\'ll contact you soon.' : loading ? 'Sending...' : 'Get Free Quote'}
        </button>
      </form>
    </div>
  );
}