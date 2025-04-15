'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const AddressesPanel = () => {
  // Mock addresses data
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Home',
      fullName: 'Sarah Johnson',
      addressLine1: '123 Main Street, Apartment 4B',
      addressLine2: 'Koramangala',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560034',
      phone: '+91 98765 43210',
      isDefault: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'Office',
      fullName: 'Sarah Johnson',
      addressLine1: '456 Tech Park',
      addressLine2: 'Whitefield',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560066',
      phone: '+91 98765 43210',
      isDefault: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'Parent\'s House',
      fullName: 'Mr. & Mrs. Johnson',
      addressLine1: '789 Garden View',
      addressLine2: 'Jayanagar',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560041',
      phone: '+91 97654 32109',
      isDefault: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
  ]);
  
  // States to manage the new address form
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
  });
  
  // Handle remove address
  const removeAddress = (addressId) => {
    setAddresses(addresses.filter(address => address.id !== addressId));
  };
  
  // Handle set as default
  const setAsDefault = (addressId) => {
    setAddresses(addresses.map(address => ({
      ...address,
      isDefault: address.id === addressId
    })));
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle add address submission
  const handleAddAddress = (e) => {
    e.preventDefault();
    
    // Create new address object
    const newAddressObj = {
      id: addresses.length + 1,
      ...newAddress,
      isDefault: addresses.length === 0,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    };
    
    // Add to addresses list
    setAddresses([...addresses, newAddressObj]);
    
    // Reset form and close it
    setNewAddress({
      name: '',
      fullName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pincode: '',
      phone: '',
    });
    setIsAddingAddress(false);
  };
  
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-lg font-display font-bold">Saved Addresses</h2>
        
        <Button 
          variant="primary" 
          size="sm"
          className="flex items-center"
          onClick={() => setIsAddingAddress(!isAddingAddress)}
        >
          {isAddingAddress ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancel
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Address
            </>
          )}
        </Button>
      </div>
      
      {/* Add New Address Form */}
      {isAddingAddress && (
        <Card variant="glass" className="p-4 mb-6">
          <h3 className="font-bold mb-4">Add New Address</h3>
          
          <form onSubmit={handleAddAddress}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Address Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Home, Office, etc."
                  className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  value={newAddress.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  value={newAddress.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Address Line 1</label>
                <input 
                  type="text" 
                  name="addressLine1"
                  placeholder="House No., Building Name, Street"
                  className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  value={newAddress.addressLine1}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Address Line 2</label>
                <input 
                  type="text" 
                  name="addressLine2"
                  placeholder="Area, Landmark"
                  className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  value={newAddress.addressLine2}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input 
                  type="text" 
                  name="city"
                  placeholder="City"
                  className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  value={newAddress.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input 
                  type="text" 
                  name="state"
                  placeholder="State"
                  className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  value={newAddress.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Pincode</label>
                <input 
                  type="text" 
                  name="pincode"
                  placeholder="Pincode"
                  className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  value={newAddress.pincode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="text" 
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full glass rounded-lg px-3 py-2 bg-transparent border-none placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  value={newAddress.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <Button 
                type="submit" 
                variant="primary"
              >
                Save Address
              </Button>
            </div>
          </form>
        </Card>
      )}
      
      {/* Address List */}
      {addresses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((address) => (
            <Card 
              key={address.id}
              variant="glass" 
              className={`p-4 transition-all relative ${
                address.isDefault ? 'border-2 border-purple-500 bg-purple-500/10' : ''
              }`}
            >
              <div className="flex items-center mb-2">
                <div className={`w-8 h-8 glass rounded-full flex items-center justify-center mr-2 ${
                  address.isDefault ? 'text-purple-500' : ''
                }`}>
                  {address.icon}
                </div>
                <div className="font-medium flex-grow">{address.name}</div>
                {address.isDefault && (
                  <Badge variant="primary" size="sm">Default</Badge>
                )}
              </div>
              
              <div className="text-sm">
                <p className="font-medium">{address.fullName}</p>
                <p>{address.addressLine1}</p>
                <p>{address.addressLine2}</p>
                <p>{address.city}, {address.state}, {address.pincode}</p>
                <p className="mt-2">{address.phone}</p>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button
                  variant="glass"
                  size="sm"
                  className="flex-grow"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Edit
                </Button>
                
                {!address.isDefault && (
                  <Button
                    variant="glass"
                    size="sm"
                    className="flex-grow"
                    onClick={() => setAsDefault(address.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Set as Default
                  </Button>
                )}
                
                {!address.isDefault && (
                  <Button
                    variant="glass"
                    size="sm"
                    className="flex-grow text-red-400"
                    onClick={() => removeAddress(address.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">No saved addresses</h3>
          <p className="text-text-secondary mb-6">Add an address to get faster checkout</p>
          <Button variant="primary" onClick={() => setIsAddingAddress(true)}>
            Add New Address
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddressesPanel;