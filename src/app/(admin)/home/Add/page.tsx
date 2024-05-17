import Form from '@/app/ui/create-form';
import { fetchUsers } from '@/lib/data';

export default async function Page() {
  const users = await fetchUsers();
  const mappedUsers = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role,
    profilePicture: user.profilePicture,
  }));
  return <Form users={mappedUsers} />;
}