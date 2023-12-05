// ContactSupportForm.tsx
'use client';

import React, { useState } from 'react';
import {
  UserIcon,
  MapIcon,
  PhoneIcon,
  ClipboardIcon,
} from '@heroicons/react/24/outline';

const ContactSupportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderId: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
        >
          <div className="mb-4">
            <label
              className="mb-2 block flex items-center text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              <UserIcon className="mr-2 h-5 w-5" />
              Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block flex items-center text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              <MapIcon className="mr-2 h-5 w-5" />
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block flex items-center text-sm font-bold text-gray-700"
              htmlFor="phone"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Phone Number
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block flex items-center text-sm font-bold text-gray-700"
              htmlFor="orderId"
            >
              <ClipboardIcon className="mr-2 h-5 w-5" />
              Order ID (Optional)
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="orderId"
              type="text"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block flex items-center text-sm font-bold text-gray-700"
              htmlFor="message"
            >
              <ClipboardIcon className="mr-2 h-5 w-5" />
              Message
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSupportForm;
