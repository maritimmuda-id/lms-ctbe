'use client';

import Link from 'next/link';

import { ImUser } from 'react-icons/im';
import { IoBookSharp } from 'react-icons/io5';
import { FaTasks } from 'react-icons/fa';
import { IoLogOutSharp } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { MdAssignment } from 'react-icons/md';
import { FaPeopleGroup } from 'react-icons/fa6';
import { PiStudentBold } from 'react-icons/pi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';

type SidebarProps = {
  navigation: string[];
};

export default function Sidebar(props: SidebarProps) {
  const { navigation } = props;
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.screen.width);
    }
  }, []);

  return (
    <>
      {/* Untuk mengubah ukuran layar disini */}
      {screenWidth && screenWidth >= 640 ? (
        <div className="fixed top-0 bottom lg:left-0 p-2 lg:w-[300px]  overflow-y-auto text-center bg-blue-600 h-full">
          <div className="p-[12px] flex items-center justify-between rounded-md px-4 text-white">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Maritim Mengajar</span>
          </div>
          <hr className="my-2 text-gray-600" />
          {navigation.map((item, index) => (
            <Link href={item}>
              <div
                key={index}
                className="p-2.5 mt-3 flex items-center justify-between rounded-md px-4 duration-300 cursor-pointer 
            hover:bg-blue-900 text-white"
              >
                <span>{item}</span>
                {item === 'User' && <ImUser className="text-2xl" />}
                {item === 'Course' && <IoBookSharp className="text-2xl" />}
                {item === 'Task' && <FaTasks className="text-2xl" />}
                {item === 'Profile' && <ImUser className="text-2xl" />}
                {item === 'Answers' && <FaTasks className="text-2xl" />}
                {item === 'Dashboard' && <MdDashboard className="text-2xl" />}
                {item === 'Assignment' && <MdAssignment className="text-2xl" />}
                {item === 'Add' && <FaPeopleGroup className="text-2xl" />}
                {item === 'Students' && <PiStudentBold className="text-2xl" />}
                {item === 'Teachers' && <LiaChalkboardTeacherSolid className="text-2xl" />}
              </div>
            </Link>
          ))}
          <hr className="my-2 text-gray-600" />
          <div
            className="p-2.5 mt-3 flex items-center justify-between rounded-md px-4 text-white duration-300 cursor-pointer 
            hover:bg-blue-900"
          >
            <Link
              href={'/login'}
              onClick={() => {
                signOut();
              }}
            >
              <div className=" flex justify-between">
                <h1 className="font-bold text-gray-200 text-[15px]">Logout</h1>
                <IoLogOutSharp className="text-2xl ml-44" />
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 bottom lg:left-0 p-2 w-[80px]  overflow-y-auto text-center bg-blue-600 h-full">
          <div className="flex items-center justify-between rounded-md px-4 text-white">
            <h1 className="font-bold text-gray-200 text-[15px]">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Maritim Mengajar" />
            </h1>
          </div>
          <hr className="my-2 text-gray-600" />
          {navigation.map((item, index) => (
            <Link href={item}>
              <div
                key={index}
                className="p-2.5 mt-3 flex items-center justify-between rounded-md px-4 duration-300 cursor-pointer 
          hover:bg-blue-900 text-white"
              >
                {item === 'User' && <ImUser className="text-2xl" />}
                {item === 'Course' && <IoBookSharp className="text-2xl" />}
                {item === 'Task' && <FaTasks className="text-2xl" />}
                {item === 'Profile' && <ImUser className="text-2xl" />}
                {item === 'Answers' && <FaTasks className="text-2xl" />}
                {item === 'Dashboard' && <MdDashboard className="text-2xl" />}
                {item === 'Assignment' && <MdAssignment className="text-2xl" />}
                {item === 'Add' && <FaPeopleGroup className="text-2xl" />}
                {item === 'Students' && <PiStudentBold className="text-2xl" />}
                {item === 'Teachers' && <LiaChalkboardTeacherSolid className="text-2xl" />}
              </div>
            </Link>
          ))}
          <hr className="my-2 text-gray-600" />
          <div
            className="p-2.5 mt-3 flex items-center justify-between rounded-md px-4 text-white duration-300 cursor-pointer 
          hover:bg-blue-900"
          >
            <Link
              href={'/login'}
              onClick={() => {
                signOut();
              }}
            >
              <IoLogOutSharp className="text-2xl" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
