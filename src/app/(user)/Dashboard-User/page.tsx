import Navbar from '@/components/navbar';
import UsersLayout from '@/components/userslayouts';
import ProtectedRoute from '@/components/Protected';

const DashboardUsers = () => {
  return (
    <>
      <ProtectedRoute>
        <UsersLayout>
          <div className="flex justify-center "></div>
        </UsersLayout>
      </ProtectedRoute>
    </>
  );
};

export default DashboardUsers;
