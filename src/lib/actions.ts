'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { signIn } from '../../auth';
import { AuthError } from 'next-auth'

// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long.',
  }),
  role: z.enum(['admin', 'teacher', 'student'], {
    invalid_type_error: 'Please select a valid role (admin, teacher, or student).',
  }),
  profilePicture: z.string().url({
    message: 'Please enter a valid URL for the profile picture.',
  }),
});


export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    role?: string[];
    picture?: string[];
  };
  message?: string | null;
};


const CreateUser = FormSchema.omit({ id: true });

export async function createUser(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateUser.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    role: formData.get('role'),
    profilePicture: formData.get('profilePicture'), // Jika menggunakan profile picture
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }

  // Generate a random UUID for the user ID
  const userId = uuidv4();

  // Prepare data for insertion into the database
  const { name, email, password, role, profilePicture } = validatedFields.data;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds = 10

  // Insert data into the database
  try {
    await sql`
      INSERT INTO users (id, name, email, password, role, profile_picture)
      VALUES (${userId}, ${name}, ${email}, ${hashedPassword}, ${role}, ${profilePicture})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }

  // Revalidate the cache for the users page and redirect the user.
  revalidatePath('/dashboard/');
  redirect('/dashboard/');
}



// Use Zod to update the expected types
const UpdateUser = FormSchema.pick({
  name: true,
  email: true,
  password: true,
  role: true,
  profilePicture: true,
});
 
// ...
 
export async function updateUser(id: string, formData: FormData) {
  // Validate form using Zod
  const { name, email, password, role, profilePicture } = UpdateUser.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    role: formData.get('role'),
    profilePicture: formData.get('profilePicture'),
  });

  // Hash the password if provided
  let hashedPassword;
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10); // Salt rounds = 10
  }

  // Prepare data for update in the database
  const updateData: { [key: string]: any } = {};
  if (name) updateData.name = name;
  if (email) updateData.email = email;
  if (hashedPassword) updateData.password = hashedPassword;
  if (role) updateData.role = role;
  if (profilePicture) updateData.profile_picture = profilePicture; // Assuming column name in the database is "profile_picture"

  // Build the query manually
  let query = `UPDATE users SET `;
  const values: any[] = [];
  const keys = Object.keys(updateData);
  keys.forEach((key, index) => {
    query += `${key} = $${index + 1}`;
    values.push(updateData[key]);
    if (index < keys.length - 1) {
      query += `, `;
    }
  });
  query += ` WHERE id = $${keys.length + 1}`;
  values.push(id);

  // Update data in the database
  try {
    await sql.query(query, ...values);
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update User',
    };
  }

  // Revalidate the cache for the users page and redirect the user.
  revalidatePath('/dashboard/');
  redirect('/dashboard/');
}

export async function deleteUser(id: string) {
  try {
    await sql`DELETE FROM users WHERE id = ${id}`;
    revalidatePath('/dashboard/users');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete User',
    };
  }
}


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}