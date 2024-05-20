import { fetchUsers } from '@/lib/data';

export default async function DashboardPage() {
  const users = await fetchUsers();

  return (
    <main className="lg:relative lg:flex lg:min-h-screen justify-center p-6 lg:ml-80 lg:mr-10 ">
      <table className="bg-white/20 rounded-xl w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase  dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className=" border-b hover:bg-white/60 dark:bg-gray-800 dark:border-gray-700" key={user.id}>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
