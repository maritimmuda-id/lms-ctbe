import Sidebar from '../sidebar';

type Proptypes = {
  children: React.ReactNode;
};

export default function TeachersLayout(props: Proptypes) {
  const { children } = props;
  // jika ingin menambahkan halaman silahkan masukan di dalam array navigation
  const navigation = ['Evaluation', 'Task'];
  return (
    <>
      {children}
      <Sidebar navigation={navigation} />
    </>
  );
}
