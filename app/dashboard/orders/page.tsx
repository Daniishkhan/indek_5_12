'use client';
// In a new file, e.g., OrderComponent.tsx
import React, { useState } from 'react';
import Papa from 'papaparse';

const OrderComponent = () => {
  const [orders, setOrders] = useState([]);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    // Process form data and add to orders
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: async (results) => {
        const orders = results.data;
        await addOrders(orders); // Add orders to database
      },
    });
  };
  return (
    <div>
      {/* Form for manual order entry */}
      <form onSubmit={handleFormSubmit}>
        {/* Form fields for order details */}
        <button type="submit">Submit Order</button>
      </form>

      {/* CSV Upload */}
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default OrderComponent;
