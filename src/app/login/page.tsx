
'use client';

import LoginComponent from '@/components/login-component';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const { isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAdmin) {
      router.push('/');
    }
  }, [isAdmin, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <LoginComponent />
    </div>
  );
}
