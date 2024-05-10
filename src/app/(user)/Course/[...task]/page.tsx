import Navbar from '@/components/navbar';

type DocumentCourse = {
  params: { task: string };
};

export default function DocumentPage(props: DocumentCourse) {
  const { params } = props;
  return (
    <>
      <Navbar />
      <div className="container p-5 ml-60 w-[900px]">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className=" text-lg  text-white uppercase bg-blue-600 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <a href="http://localhost:3000/Course">Materi</a>
                </th>
                <th scope="col" className="px-6 py-3">
                  Open
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {params.task}
                </th>

                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
