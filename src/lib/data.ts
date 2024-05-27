import { sql } from '@vercel/postgres';
import { User } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchUsers(): Promise<User[]> {
  noStore();
  try {
    const data = await sql`
            SELECT id, name, email, role FROM users
        `;
    const users = data.rows.map(row => ({
      id: row.id,
      name: row.name,
      email: row.email,
      role: row.role as 'admin' | 'student' | 'teacher',
      password: '', // default value or you can fetch if necessary
      profilePicture: '', // default value or you can fetch if necessary
    }));
    return users;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all users');
  }
}

export async function getUser(email: string): Promise<User> {
  try {
    const user = await sql`
            SELECT id, name, email, role FROM users WHERE email=${email}
        `;
    if (user.rows.length === 0) {
      throw new Error('User not found');
    }
    return {
      ...user.rows[0],

    } as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
