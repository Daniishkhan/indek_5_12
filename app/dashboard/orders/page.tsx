// OrderComponent.tsx
import React from 'react';
import Papa from 'papaparse';
import Card2 from '../../ui/dashboard/cards2'; // Correct this path

import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const OrderComponent = () => {
  const handleFileUpload = {};
  // Dummy data for the cards, replace with actual fetchCardData results later
  const orderStats = [
    { title: 'Active Orders', value: '5', icon: ClockIcon },
    { title: 'Pending Orders', value: '3', icon: UserGroupIcon },
    { title: 'Completed Orders', value: '12', icon: CheckCircleIcon },
    { title: 'Total Orders', value: '20', icon: InboxIcon }, // Added for balance
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card2
          key={orderStats.title}
          title={orderStats.title}
          value={orderStats.value}
          icon={orderStats.icon}
        />
      </div>

      {/* Form for adding new orders */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Add New Order</h2>
        {/* Bulk Upload via CSV */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Bulk Upload Orders
          </label>
          <input
            type="file"
            accept=".csv"
            // onChange={handleFileUpload}
            className="w-full text-sm text-gray-500 file:rounded-lg file:border file:border-gray-300 file:bg-gray-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-gray-700 hover:file:bg-gray-100"
          />
        </div>
        {/* Other form inputs for individual order addition will go here */}
        {/* ... */}
      </div>
    </div>
  );
};

export default OrderComponent;
