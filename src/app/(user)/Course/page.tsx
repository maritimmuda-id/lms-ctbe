import Navbar from '@/components/navbar';
import Link from 'next/link';

type ProductPageProps = { params: { slug: string[] } };

async function getData() {
  const res = await fetch('http://localhost:3000/api/course', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Error fetch data');
  }
  return res.json();
}

export default async function CoursePage(props: ProductPageProps) {
  const { params } = props;
  const course = await getData();
  return (
    <>
      <Navbar />
      <div className="container  lg:justify-center mt-5 lg:ml-12 p-10 lg:grid grid-cols-3">
        {course.data.length > 0 &&
          course.data.map((course: any) => (
            <Link href={`/Course/${course.category}`}>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-2 mt-5">
                <img className="p-8 rounded-t-lg" src={course.image} alt="product image" />

                <div className="px-5 pb-5  ">
                  <h5 className="text-xl font-semibold tracking-tight text-center text-gray-900 dark:text-white">{course.category}</h5>

                  <div className="flex items-center justify-center mt-5">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Open Course
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
