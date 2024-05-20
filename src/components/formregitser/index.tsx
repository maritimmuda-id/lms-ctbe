'use client';

import { createUser } from '@/lib/actions';
import { useFormState } from 'react-dom';

import { UserField } from '@/lib/definitions';

export default function Form({ users }: { users: UserField[] }) {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-white/40 p-4 md:p-6 mx-auto lg:w-[500px]">
        {/* User Name */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            UserName
          </label>
        </div>

        {/* User Email */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        {/* User Password */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        {/* User Role */}
        <div className="mb-4">
          <label htmlFor="role" className="mb-2 block text-sm font-medium">
            Role
          </label>
          <select id="role" name="role" className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
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
        <div className="mt-6 flex justify-end gap-4">
          <button type="button" onClick={() => window.history.back()} className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
            Cancel
          </button>
          <button type="submit" className="flex items-center justify-center h-10 rounded-lg bg-blue-500 text-white px-4 text-sm font-medium transition-colors hover:bg-blue-600">
            Create
          </button>
        </div>
      </div>

      {/* Error Handling */}
      {state.message && <div className="text-red-500 text-sm mt-2">{state.message}</div>}
    </form>
  );
}
