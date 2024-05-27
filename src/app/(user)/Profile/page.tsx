'use client';

import Navbar from '@/components/navbar';
import UsersLayout from '@/components/userslayouts';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { data: session, status } = useSession();



  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You need to be authenticated to view this page.</div>;
  }

  return (
    <>
      <UsersLayout>
        <div>{/* Display other session data as needed */}</div>
        <div className="flex justify-center items-center mt-5">
          <div className="p-5 w-full max-w-sm bg-white/15  rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://media.licdn.com/dms/image/D4E03AQF2JL_z-5Saeg/profile-displayphoto-shrink_200_200/0/1709907516842?e=1720656000&v=beta&t=kosgWqVjI3O_3laax-Mn7QQP4hzpwLLnGaq4TrQVwxo"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{session.user?.name}</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">{session.user?.role}</span>
              <div className="grid grid-cols-2 mb-5 mt-5 p-2">
                <div className="  text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  Universitas:
                </div>
                <div className="  text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  Universitas Mitra Indonesia
                </div>
                <div className="  text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  Status:
                </div>
                <div className="  text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  Aktif
                </div>
              </div>
            </div>
          </div>
        </div>
      </UsersLayout>
    </>
  );
}
