import Navbar from '@/components/navbar';

export default function Assignment() {
  return (
    <>
      <Navbar />
      <div className="container grid grid-cols-1 mt-5 p-5 h-[100vh]">
        <div className="lg:ml-[425px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="" alt="" />
          </a>
        </div>
        <form className="max-w-lg mx-auto mt-5 lg:w-96">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            type="file"
          />
        </form>
      </div>
    </>
  );
}
