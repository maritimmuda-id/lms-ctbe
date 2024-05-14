'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.screen.width);
    }
  }, []);
  const handleGoBack = () => {
    router.back();
  };
  return (
    <>
      {screenWidth && screenWidth >= 640 ? (
        <nav className="bg-blue-600 border-gray-200 dark:bg-gray-900 text-white">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer" onClick={handleGoBack}>
              Back
            </div>

            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer">
              <img
                className="w-10 h-10 rounded-full"
                src="https://media.licdn.com/dms/image/D4E03AQF2JL_z-5Saeg/profile-displayphoto-shrink_200_200/0/1709907516842?e=1720656000&v=beta&t=kosgWqVjI3O_3laax-Mn7QQP4hzpwLLnGaq4TrQVwxo"
                alt="user photo"
              />
            </div>
          </div>
        </nav>
      ) : (
        <nav className="p-2 bg-blue-600 border-gray-200 dark:bg-gray-900 text-white">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full focus:outline-none focus:shadow-outline">
              <a href="/Dashboard-User">Back</a>
            </div>
            <span className="hidden">Maritim Mengajar</span>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer">
              <img
                className="w-10 h-10 rounded-full"
                src="https://media.licdn.com/dms/image/D4E03AQF2JL_z-5Saeg/profile-displayphoto-shrink_200_200/0/1709907516842?e=1720656000&v=beta&t=kosgWqVjI3O_3laax-Mn7QQP4hzpwLLnGaq4TrQVwxo"
                alt="user photo"
              />
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
