import Sidebar from '../sidebar';
import { getServerSession } from 'next-auth';

type Proptypes = {
  children: React.ReactNode;
};

export default function AdminLayout(props: Proptypes) {
  const { children } = props;

  // jika ingin menambahkan halaman silahkan masukan di dalam array navigation
  const navigation = ['Dashboard', 'Students', 'Teachers', 'Add'];
  return (
    <>
      {children}
      <Sidebar navigation={navigation} />
    </>
  );
}
