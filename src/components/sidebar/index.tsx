'use client';

import Link from 'next/link';

import { FaBars } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';
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
import { signOut, useSession } from 'next-auth/react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

type SidebarProps = {
  navigation: string[];
};

export default function Sidebar(props: SidebarProps) {
  const { navigation } = props;
  const session = useSession();
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/login');
    }
  });

  const handleToggle = () => {
    if (!toggle) {
      console.log('true');
      setToggle(true);
    } else {
      console.log('false');
      setToggle(false);
    }
  };

  const handleLogout = async () => {
    Swal.fire({
      icon: 'warning',
      text: 'Are you sure to logout ?',
      showCancelButton: true,
      confirmButtonColor: '#C93233',
      cancelButtonColor: '#D9D9D9',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        signOut().then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Succes',
            text: 'You has logout, Please wait until succes',
            showConfirmButton: false,
            timer: 5000,
          });
        });
      }
    });
  };

  const handleWait = () => {
    Swal.fire({
      icon: 'success',
      title: 'Opened',
      text: 'Please Wait...',
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <>
      {/* Untuk mengubah ukuran layar disini */}
      {!toggle ? (
        <div className="fixed top-0 bottom lg:left-0 p-2 lg:w-[300px] shadow-2xl overflow-y-auto text-center bg-white/15 h-full">
          <div className="p-[12px] flex items-center justify-between rounded-md px-4 text-gray-900">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BED Academy</span>
            <button onClick={handleToggle}>
              <BsXLg className="text-2xl" />
            </button>
          </div>
          <hr className="my-2 text-gray-600" />
          {navigation.map((item, index) => (
            <Link href={item} key={index}>
              <div
                onClick={handleWait}
                className="p-2.5 mt-3 flex items-center justify-between rounded-md px-4 duration-300 cursor-pointer 
            hover:bg-white/60 text-gray-900"
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
            onClick={handleLogout}
            className="p-2.5 mt-3 flex items-center justify-between rounded-md px-4 text-gray-900 duration-300 cursor-pointer 
            hover:bg-white/60"
          >
            <h1 className="font-bold text-gray-900 text-[15px]">Logout</h1>
            <IoLogOutSharp className="text-2xl" />
          </div>
        </div>
      ) : (
        <div className="fixed top-0 bottom lg:left-0 p-2 w-[80px]  overflow-y-auto text-center bg-white/15 h-full">
          <div className="flex items-center justify-between rounded-md px-4 text-gray-900">
            <h1 className="font-bold text-gray-900 text-[15px]">
              <button onClick={handleToggle}>
                <FaBars className="text-2xl" />
              </button>
            </h1>
          </div>
          <hr className="my-2 text-gray-600" />
          {navigation.map((item, index) => (
            <Link href={item}>
              <div
                key={index}
                className="p-2.5 mt-3 flex items-center justify-between rounded-md px-4 duration-300 cursor-pointer 
          hover:bg-white/60 text-gray-900"
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
            onClick={handleLogout}
            className="p-2.5 mt-3 flex items-center justify-between rounded-md px-4 text-gray-900 duration-300 cursor-pointer 
          hover:bg-white/60"
          >
            <IoLogOutSharp className="text-2xl" />
          </div>
        </div>
      )}
    </>
  );
}
