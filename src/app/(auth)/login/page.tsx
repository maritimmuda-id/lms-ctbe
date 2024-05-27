import LoginForm from '@/app/ui/login-form';
import Backgroundblue from '@/components/BackgroundsEffect';

export default function LoginPage() {
  return (
    <>
      <Backgroundblue />
      <main className="lg:flex lg:items-center lg:justify-between md:h-screen lg:p-20 ">
        <div className="lg:relative absolute lg:w-[500px]">
          <p className="text-blue-700 font-bold text-4xl lg:text-7xl lg:mt-0 text-center mt-10">Welcome to LMS CTBE</p>
        </div>
        <div className="relative mx-auto flex w-full max-w-[500px] flex-col  p-4 md:-mt-32">
          <LoginForm />
        </div>
      </main>
    </>
  );
}
