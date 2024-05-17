"use client"

import { useState } from 'react';
import { createUser } from '@/lib/actions';
import { useFormState } from 'react-dom'; 
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { UserField } from '@/lib/definitions';

export default function Form({
  users,
}: {
  users: UserField[];
}) {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            User Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter user name"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* User Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* User Password */}
        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* User Role */}
        <div className="mb-4">
          <label htmlFor="role" className="mb-2 block text-sm font-medium">
            Role
          </label>
          <select
            id="role"
            name="role"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>

        {/* User Profile Picture */}
        <div className="mb-4">
          <label htmlFor="profilePicture" className="mb-2 block text-sm font-medium">
            Profile Picture URL
          </label>
          <input
            id="profilePicture"
            name="profilePicture"
            type="file"
            placeholder="Enter profile picture URL"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      

      {/* Error Handling */}
      {state.message && (
        <div className="text-red-500 text-sm mt-2">
          {state.message}
        </div>
      )}

      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex items-center justify-center h-10 rounded-lg bg-blue-500 text-white px-4 text-sm font-medium transition-colors hover:bg-blue-600"
        >
          Create
        </button>
      </div>
    </form>
  );
}
