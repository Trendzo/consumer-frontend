"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import GlassPanels from "@/components/layout/GlassPanels";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// export const metadata = {
//   title: "Checkout | Trendzo - Fashion Delivered in 60 Minutes",
//   description:
//     "Complete your order with fast 60-minute delivery from your favorite stores.",
// };

export default function CheckoutPage() {
  const [stage, setStage] = useState(1); // 1: Address, 2: Payment, 3: Completion
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null); // 'success' or 'failed'

  // Hardcoded data
  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "John Doe",
      phone: "+91 98765 43210",
      address: "123, Maple Street, Sector 5",
      city: "Mumbai",
      pincode: "400001",
    },
    {
      id: 2,
      type: "Office",
      name: "John Doe",
      phone: "+91 98765 43210",
      address: "456, Corporate Park, Andheri East",
      city: "Mumbai",
      pincode: "400069",
    },
  ];

  const paymentMethods = [
    { id: "upi", name: "UPI" },
    { id: "card", name: "Credit/Debit Card" },
    { id: "cod", name: "Cash on Delivery" },
  ];

  const orderDetails = {
    orderId: "TRZ123456",
    total: 4797,
    deliveryTime: "25 min",
    items: [
      { name: "Oversized Cotton T-shirt", price: 1299, quantity: 1 },
      { name: "High Rise Skinny Jeans", price: 2499, quantity: 1 },
      { name: "Bucket Hat", price: 999, quantity: 1 },
    ],
  };

  // Form states
  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  // Handlers
  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (Object.values(newAddress).every((field) => field.trim())) {
      setSelectedAddress({ id: addresses.length + 1, ...newAddress });
      setNewAddress({
        name: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
      });
      setStage(2);
    }
  };

  const handlePaymentSelect = (method) => {
    setPaymentMethod(method);
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (
      paymentMethod &&
      (paymentMethod.id !== "card" ||
        Object.values(cardDetails).every((field) => field.trim()))
    ) {
      // Simulate payment processing
      const isSuccess = Math.random() > 0.2; // 80% success rate for demo
      setOrderStatus(isSuccess ? "success" : "failed");
      setStage(3);
    }
  };

  const handleRetry = () => {
    setStage(2);
    setOrderStatus(null);
  };

  // Progress Indicator
  const stages = [
    { id: 1, name: "Address" },
    { id: 2, name: "Payment" },
    { id: 3, name: "Confirmation" },
  ];

  return (
    <>
      <GlassPanels />
      <Header />

      <Container className="pb-20 pt-2">
        {/* Progress Indicator */}
        <div className="my-6">
          <h1 className="text-3xl font-display font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              Checkout
            </span>
          </h1>
          <div className="flex justify-between items-center">
            {stages.map((s, index) => (
              <div key={s.id} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    stage >= s.id
                      ? "bg-purple-500 text-white"
                      : "glass text-gray-700 dark:text-white"
                  }`}
                >
                  {s.id}
                </div>
                <span className="ml-2 text-sm font-medium">{s.name}</span>
                {index < stages.length - 1 && (
                  <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 mx-2">
                    <div
                      className={`h-full bg-purple-500 transition-all duration-300 ${
                        stage > s.id ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stage Content */}
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <div className="lg:col-span-2 space-y-6">
            {stage === 1 && (
              <Card variant="glass" className="p-6">
                <h2 className="text-2xl font-display font-bold mb-4">
                  Delivery Address
                </h2>
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <Card
                      key={address.id}
                      variant="glass"
                      className={`p-4 cursor-pointer ${
                        selectedAddress?.id === address.id
                          ? "border-purple-500 border-2"
                          : ""
                      }`}
                      onClick={() => handleAddressSelect(address)}
                    >
                      <h3 className="font-medium">{address.type}</h3>
                      <p className="text-sm text-gray-700 dark:text-white">
                        {address.name}, {address.phone}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-white">
                        {address.address}, {address.city}, {address.pincode}
                      </p>
                    </Card>
                  ))}
                  <form onSubmit={handleAddAddress} className="space-y-4 mt-6">
                    <h3 className="font-medium">Add New Address</h3>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={newAddress.name}
                      onChange={(e) =>
                        setNewAddress({ ...newAddress, name: e.target.value })
                      }
                      className="w-full glass rounded-lg px-4 py-2 focus:outline-none text-gray-700 dark:text-white"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={newAddress.phone}
                      onChange={(e) =>
                        setNewAddress({ ...newAddress, phone: e.target.value })
                      }
                      className="w-full glass rounded-lg px-4 py-2 focus:outline-none text-gray-700 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      value={newAddress.address}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          address: e.target.value,
                        })
                      }
                      className="w-full glass rounded-lg px-4 py-2 focus:outline-none text-gray-700 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      value={newAddress.city}
                      onChange={(e) =>
                        setNewAddress({ ...newAddress, city: e.target.value })
                      }
                      className="w-full glass rounded-lg px-4 py-2 focus:outline-none text-gray-700 dark:text-white"
                    />
                    <input
                      type="text"
                      placeholder="Pincode"
                      value={newAddress.pincode}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          pincode: e.target.value,
                        })
                      }
                      className="w-full glass rounded-lg px-4 py-2 focus:outline-none text-gray-700 dark:text-white"
                    />
                    <Button
                      variant="primary"
                      fullWidth
                      className="bg-purple-500 hover:bg-purple-600"
                      type="submit"
                    >
                      Add Address & Continue
                    </Button>
                  </form>
                </div>
              </Card>
            )}

            {stage === 2 && (
              <Card variant="glass" className="p-6">
                <h2 className="text-2xl font-display font-bold mb-4">
                  Payment Method
                </h2>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <Card
                      key={method.id}
                      variant="glass"
                      className={`p-4 cursor-pointer ${
                        paymentMethod?.id === method.id
                          ? "border-purple-500 border-2"
                          : ""
                      }`}
                      onClick={() => handlePaymentSelect(method)}
                    >
                      <h3 className="font-medium">{method.name}</h3>
                    </Card>
                  ))}
                  {paymentMethod?.id === "card" && (
                    <form
                      onSubmit={handlePaymentSubmit}
                      className="space-y-4 mt-6"
                    >
                      <h3 className="font-medium">Card Details</h3>
                      <input
                        type="text"
                        name="number"
                        placeholder="Card Number"
                        value={cardDetails.number}
                        onChange={handleCardDetailsChange}
                        className="w-full glass rounded-lg px-4 py-2 focus:outline-none text-gray-700 dark:text-white"
                      />
                      <input
                        type="text"
                        name="name"
                        placeholder="Name on Card"
                        value={cardDetails.name}
                        onChange={handleCardDetailsChange}
                        className="w-full glass rounded-lg px-4 py-2 focus:outline-none text-gray-700 dark:text-white"
                      />
                      <div className="flex gap-4">
                        <input
                          type="text"
                          name="expiry"
                          placeholder="MM/YY"
                          value={cardDetails.expiry}
                          onChange={handleCardDetailsChange}
                          className="w-full glass rounded-lg px-4 py-2 focus:outline-none text-gray-700 dark:text-white"
                        />
                        <input
                          type="text"
                          name="cvv"
                          placeholder="CVV"
                          value={cardDetails.cvv}
                          onChange={handleCardDetailsChange}
                          className="w-full glass rounded-lg px-4 py-2 focus:outline-none text-gray-700 dark:text-white"
                        />
                      </div>
                      <Button
                        variant="primary"
                        fullWidth
                        className="bg-purple-500 hover:bg-purple-600"
                        type="submit"
                      >
                        Pay Now
                      </Button>
                    </form>
                  )}
                  {paymentMethod?.id !== "card" && (
                    <Button
                      variant="primary"
                      fullWidth
                      className="bg-purple-500 hover:bg-purple-600 mt-6"
                      onClick={handlePaymentSubmit}
                    >
                      Pay Now
                    </Button>
                  )}
                </div>
              </Card>
            )}

            {stage === 3 && (
              <Card variant="glass" className="p-6 animate-fade-in-up">
                {orderStatus === "success" ? (
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-purple-500 mx-auto mb-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h2 className="text-2xl font-display font-bold mb-4">
                      Order Placed Successfully!
                    </h2>
                    <p className="text-gray-700 dark:text-white mb-4">
                      Order ID: {orderDetails.orderId}
                    </p>
                    <p className="text-gray-700 dark:text-white mb-4">
                      Your order will be delivered in{" "}
                      {orderDetails.deliveryTime}.
                    </p>
                    <p className="text-gray-700 dark:text-white mb-6">
                      Total: ₹{orderDetails.total.toFixed(2)}
                    </p>
                    <Button
                      variant="primary"
                      className="bg-purple-500 hover:bg-purple-600"
                      onClick={() => (window.location.href = "/")}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-pink-500 mx-auto mb-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h2 className="text-2xl font-display font-bold mb-4">
                      Payment Failed
                    </h2>
                    <p className="text-gray-700 dark:text-white mb-6">
                      Something went wrong with your payment. Please try again.
                    </p>
                    <Button
                      variant="primary"
                      className="bg-purple-500 hover:bg-purple-600"
                      onClick={handleRetry}
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="hidden lg:block">
            <Card variant="glass" className="p-6 sticky top-4">
              <h2 className="text-xl font-display font-bold mb-4">
                Order Summary
              </h2>
              <div className="space-y-2">
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>₹{item.price.toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-white/10 my-4" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹{orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </Container>
    </>
  );
}
