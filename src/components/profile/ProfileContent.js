// ProfileContent.js
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import OrdersPanel from './OrdersPanel';
import WishlistPanel from './WishlistPanel';
import AddressesPanel from './AddressesPanel';
import PaymentMethodsPanel from './PaymentMethodsPanel';
import { useTabContext } from './ProfileTabs'; // Import the context hook

const ProfileContent = () => {
  // Use the shared context instead of local state
  const { activeTab } = useTabContext();
  
  // List of tab panels
  const tabPanels = {
    orders: <OrdersPanel />,
    wishlist: <WishlistPanel />,
    addresses: <AddressesPanel />,
    payment: <PaymentMethodsPanel />
  };
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {tabPanels[activeTab]}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileContent;