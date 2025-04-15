'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import GlassPanels from '@/components/layout/GlassPanels';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function EditProfilePage() {
  const router = useRouter();
  
  // Mock user data - would be fetched from API in real app
  const [formData, setFormData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+91 98765 43210',
    avatar: '/api/placeholder/400/400',
    dateOfBirth: '1992-05-15',
    gender: 'female',
    bio: 'Fashion enthusiast with a love for sustainable clothing and minimalist styles.'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate back to profile page
      router.push('/profile');
    }, 1000);
  };
  
  // Handle cancel and return to profile
  const handleCancel = () => {
    router.push('/profile');
  };

  // Handle back button
  const handleBack = () => {
    router.push('/profile');
  };
  
  return (
    <>
      <GlassPanels />
      
      <Header />
      
      <Container className="pb-20 pt-2">
        <div className="my-6">
          {/* Back button */}
          <button 
            onClick={handleBack}
            className="flex items-center text-text-secondary hover:text-white mb-4 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Profile
          </button>

          <h1 className="text-3xl font-display font-bold mb-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              Edit Profile
            </span>
          </h1>
          <p className="text-text-secondary">
            Update your personal information
          </p>
        </div>
        
        <Card variant="glass" className="p-6">
          {/* Form content remains the same */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              {/* Avatar section */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden glass mb-4">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${formData.avatar})` }}
                  />
                </div>
                
                <Button variant="glass" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Change Photo
                </Button>
              </div>
              
              {/* Form fields */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Date of Birth</label>
                  <input 
                    type="date" 
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Gender</label>
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Bio</label>
                  <textarea 
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="4"
                    className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-4">
              <Button 
                type="button" 
                variant="glass"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              
              <Button 
                type="submit" 
                variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </div>
                ) : 'Save Changes'}
              </Button>
            </div>
          </form>
        </Card>
      </Container>
    </>
  );
}