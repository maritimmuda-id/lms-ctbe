'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Wait for session to load

    if (!session) {
      router.push('/login'); // Redirect to login page if not authenticated
    }
  }, [session, status, router]);

  // Render children only if session is loaded and user is authenticated
  return status === 'loading' ? null : <>{children}</>;
};

export default ProtectedRoute;
