'use client';

import React, { useState } from 'react';

const InterestCaptureForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    twitter: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const twitterHandle = formData.twitter.startsWith('@') ? formData.twitter.slice(1) : formData.twitter;
      const response = await fetch('/api/submit-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, twitter: twitterHandle }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      setFormData({ email: '', twitter: '' });
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    }
  };

  return (
    <div className="border-2 border-black bg-[#f4e4bc] p-8 mt-12">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold font-serif mb-2">
          JOIN THE DRAMA EARLY
        </h3>
        <p className="mb-6 font-serif">
          Get access to more indie drama stories and exclusive gossip. 
          Launching next month with full features!
        </p>
        
        {status === 'success' ? (
          <div className="bg-green-50 border-2 border-green-500 p-4 text-green-700 font-serif">
            Thank you for your interest! Hang in there.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-serif mb-1">Electronic Mail</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.name@gmail.com" 
                  className="w-full p-2 border-2 border-black bg-white placeholder-gray-500
                           focus:ring-2 focus:ring-black focus:outline-none"
                  required
                />
              </div>
              <div className="text-left">
                <label htmlFor="twitter" className="block text-sm font-serif mb-1">Twitter/X Handle</label>
                <input 
                  type="text" 
                  id="twitter"
                  value={formData.twitter}
                  onChange={(e) => setFormData(prev => ({ ...prev, twitter: e.target.value }))}
                  placeholder="@yourusername" 
                  className="w-full p-2 border-2 border-black bg-white placeholder-gray-500
                           focus:ring-2 focus:ring-black focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit"
              disabled={status === 'loading'}
              className={`bg-black text-white font-serif py-2 px-8
                       hover:bg-gray-800 transition-colors duration-200
                       border-2 border-black ${status === 'loading' ? 'opacity-50' : ''}`}
            >
              {status === 'loading' ? 'SUBMITTING...' : 'GET EARLY ACCESS'}
            </button>

            {status === 'error' && (
              <p className="text-red-600 font-serif mt-2">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}

        <p className="mt-4 text-sm font-serif text-gray-600">
          * We promise to send you the juiciest indie drama straight to your inbox and also grab your free spot in our subscriber spotlight. <br />Your moment to shine awaits!
        </p>
      </div>
    </div>
  );
};

export default InterestCaptureForm;