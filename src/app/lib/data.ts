import { sql } from '@vercel/postgres';
import { User } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchUsers(){
    noStore();
    try{
        const data = await sql`
        SELECT * FROM users
        `;
        const users = data.rows;
        return users;
    }  catch(err){
        console.error('Database Error:', err);
        throw new Error('Failed to fetch all users');
    }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}