// ProfileComponent.tsx
import React from 'react';

const ProfileComponent = () => {
  // Handlers for form submission and inputs will go here

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Photo
            </label>
            <input
              type="file"
              className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:rounded-full file:border-0
              file:bg-violet-50 file:px-4
              file:py-2 file:text-sm
              file:font-semibold file:text-violet-700
              hover:file:bg-violet-100"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          {/* Section to add new users */}
          <div className="mt-6 border-t pt-6">
            <div className="mb-4 text-lg font-semibold">Add New User</div>

            <div>
              <label
                htmlFor="newUserEmail"
                className="block text-sm font-medium text-gray-700"
              >
                New User Email
              </label>
              <input
                type="email"
                id="newUserEmail"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>

            <div>
              <label
                htmlFor="newUserRole"
                className="block text-sm font-medium text-gray-700"
              >
                Assign Role
              </label>
              <select
                id="newUserRole"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              >
                {/* Option items for roles */}
              </select>
            </div>

            <div>
              <button
                type="button"
                className="mt-4 flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700"
              >
                Add New User
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileComponent;
