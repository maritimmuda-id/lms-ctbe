import AdminLayout from '@/components/adminlayouts';
import DashboardPage from '@/components/dashboard/page';

const Page = () => {
  return (
    <>
      <AdminLayout>
        <div>
          <div className="flex justify-center">
            <DashboardPage />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Page;
