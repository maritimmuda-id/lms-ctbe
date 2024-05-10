import Sidebar from '../sidebar';

type Proptypes = {
  children: React.ReactNode;
};

export default function UsersLayout(props: Proptypes) {
  const { children } = props;
  // jika ingin menambahkan halaman silahkan masukan di dalam array navigation
  const navigation = ['Profile', 'Course', 'Assignment'];
  return (
    <>
      {children}
      <Sidebar navigation={navigation} />
    </>
  );
}
