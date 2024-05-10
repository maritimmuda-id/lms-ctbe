import Navbar from '@/components/navbar';
import UsersLayout from '@/components/userslayouts';

const DashboardUsers = () => {
  return (
    <>
      <UsersLayout>
        <Navbar />
        <div className="flex justify-center "></div>
      </UsersLayout>
    </>
  );
};

export default DashboardUsers;
