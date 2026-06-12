'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  packageData?: {
    title: string;
    destination: string;
    duration: string;
    price: string;
    rating: number;
  } | null;
}

export default function BookingDialog({ isOpen, onClose }: BookingDialogProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    travelers: '',
    message: ''
  });

  // State for field-specific validation errors
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
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          travelers: '',
          message: ''
        });
        onClose();
        router.push('/thank-you');
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80]"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-2 sm:p-3 my-8 sm:my-12"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm p-3 sm:p-5 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-on-surface-variant/40 hover:text-on-surface transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center gap-1 sm:gap-2 mb-4 sm:mb-6 justify-center pt-6 sm:pt-8">
                <span className="text-xs sm:text-lg font-black text-on-surface text-center">Enquire Now To Get Best Price.</span>
              </div>

              {globalError && (
                <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm font-bold text-center">
                  {globalError}
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="block text-xs font-black text-on-surface mb-2 ml-1">
                    Full Name<span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-medium text-sm ${
                      errors.fullName 
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10' 
                        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.fullName && <p className="text-red-500 text-[10px] font-bold mt-1.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-black text-on-surface mb-2 ml-1">
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
                    maxLength={10}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-medium text-sm ${
                      errors.mobile 
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10' 
                        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
                    }`}
                    placeholder="Enter mobile number (10 digits)"
                  />
                  {errors.mobile && <p className="text-red-500 text-[10px] font-bold mt-1.5">{errors.mobile}</p>}
                </div>

                <div>
                  <label className="block text-xs font-black text-on-surface mb-2 ml-1">
                    Email<span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-medium text-sm ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10' 
                        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
                    }`}
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-black text-on-surface mb-2 ml-1">
                    No. Of Travelers<span className="text-red-500">*</span>:
                  </label>
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-medium text-sm ${
                      errors.travelers 
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10' 
                        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
                    }`}
                    placeholder="Number of people"
                  />
                  {errors.travelers && <p className="text-red-500 text-[10px] font-bold mt-1.5">{errors.travelers}</p>}
                </div>

                <div>
                  <label className="block text-xs font-black text-on-surface-variant mb-2 ml-1">
                    Message <span className="text-on-surface-variant/40 font-medium">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-sm min-h-[100px] resize-none"
                    placeholder="Write your message (max 200 characters)"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading || submitted}
                  className={`w-full py-4 sm:py-5 font-black rounded-lg shadow-lg transition-all active:scale-[0.98] uppercase tracking-widest text-xs mt-3 cursor-pointer ${
                    submitted 
                      ? 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/20' 
                      : 'bg-primary hover:bg-primary/90 disabled:opacity-70 text-white shadow-primary/20'
                  }`}
                >
                  {submitted ? '✓ Thank you! We\'ll contact you soon.' : loading ? 'Sending...' : 'Get Free Quote'}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}