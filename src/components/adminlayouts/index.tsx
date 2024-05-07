import Sidebar from '../sidebar';

type Proptypes = {
  children: React.ReactNode;
};

export default function AdminLayout(props: Proptypes) {
  const { children } = props;
  // jika ingin menambahkan halaman silahkan masukan di dalam array navigation
  const navigation = ['Dashboard', 'Users', 'Teachers', 'Add'];
  return (
    <>
      {children}
      <Sidebar navigation={navigation} /> {/* Meneruskan navigasi sebagai prop */}
    </>
  );
}
