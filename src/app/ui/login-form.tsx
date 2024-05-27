'use client';

import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useFormStatus } from 'react-dom';
import Swal from 'sweetalert2';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {

    if (session.data?.user.role == 'admin') {
      Swal.fire({
        icon: 'success',
        title: 'Succesfull',
        text: 'Login Admin is Succesfull',
        showConfirmButton: false,
        timer: 3000,
      });
      router.push('/Dashboard')
    }
    if (session.data?.user.role == 'student') {
      Swal.fire({
        icon: 'success',
        title: 'Succes',
        text: 'Login Student is Succesfull',
        showConfirmButton: false,
        timer: 3000,
      });
      router.push('/Dashboard-User')
    }

    if (session.data?.user.role == 'teacher') {
      Swal.fire({
        icon: 'success',
        title: 'Succes',
        text: 'Login Teacher is Succesfull',
        showConfirmButton: false,
        timer: 3000,
      });
      router.push('/Dashboard-Teacher')
    }

  }, [router, session.status])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });


    if (response?.error) {

      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Email or Password is Wrong!',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-[200px] flex-1 rounded-lg bg-slate-200 px-6 pb-4 pt-8  shadow-2xl  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
        <div className="w-full">
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
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              minLength={6}
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
        </div>
        <LoginButton />
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full bg-white/30 hover:bg-white/15 " aria-disabled={pending}>
      <div className="text-gray-900">Log in</div> <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-900" />
    </Button>
  );
}
