"use client";

import { useState, useRef, useEffect } from 'react';

import { countries, findUsOptions } from './data';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    findUs: '',
    updates: 'No',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const statusRef = useRef(null);

  useEffect(() => {
    if (submitStatus?.type === 'error' && statusRef.current) {
      statusRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });

        // Reset form
        setFormData({
            name: '',
            phone: '',
            email: '',
            country: '',
            findUs: '',
            updates: 'No',
            message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.'
        });
      }
      // console.log('Form submitted:', formData);
      

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50/50 w-full py-16 px-8 font-main">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-5xl text-gray-700 font-light">We're happy to hear from you!</h2>
                <div className="w-24 h-1 bg-orange-500 mt-4 mx-auto"></div>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                
                {/* Row 1: Name */}
                <label htmlFor="name" className="text-gray-600 md:text-right self-center">Name</label>
                <div className="md:col-span-2">
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>

                {/* Row 2: Phone Number */}
                <label htmlFor="phone" className="text-gray-600 md:text-right self-center">Phone Number</label>
                <div className="md:col-span-2">
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>

                {/* Row 3: Email */}
                <label htmlFor="email" className="text-gray-600 md:text-right self-center">Email</label>
                <div className="md:col-span-2">
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>

                {/* Row 4: Country */}
                <label htmlFor="country" className="text-gray-600 md:text-right self-center">Current Country of Residence</label>
                <div className="md:col-span-2">
                    <select id="country" name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md bg-gray-100">
                        <option value="">Choose</option>
                        {countries.map((country) => (
                            <option key={country.code} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Row 5: How did you find us? */}
                <label htmlFor="findUs" className="text-gray-600 md:text-right self-center">How did you find us?</label>
                <div className="md:col-span-2">
                    <select id="findUs" name="findUs" value={formData.findUs} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md bg-gray-100">
                        <option value="">Choose</option>
                        {findUsOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Row 6: Updates */}
                <label className="text-gray-600 md:text-right self-center">Want to receive updates?</label>
                <div className="md:col-span-2 flex items-center gap-4">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="updates" value="Yes" checked={formData.updates === 'Yes'} onChange={handleChange} /> Yes
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="updates" value="No" checked={formData.updates === 'No'} onChange={handleChange} /> No
                    </label>
                </div>

                {/* Row 7: Message */}
                <label htmlFor="message" className="text-gray-600 md:text-right self-start pt-2">Drop us a line</label>
                <div className="md:col-span-2">
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows="5" className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                </div>

                {/* Row 8: Submit */}
                <div></div>
                <div className="md:col-span-2">
                    <button type="submit" disabled={isSubmitting} className="px-8 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white cursor-pointer transition-all ease-in-out duration-200 rounded-full">
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>

                {/* Status Message */}
                {submitStatus && (
                    <div ref={statusRef} className="md:col-start-2 md:col-span-2">
                        <div className={`p-4 rounded-lg ${
                            submitStatus.type === 'success' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                            {submitStatus.message}
                        </div>
                    </div>
                )}
            </form>
        </div>
    </div>
  );
};

export default ContactForm;