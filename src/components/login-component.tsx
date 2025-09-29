
'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { LogIn } from 'lucide-react';

// This is a simplified, client-side-only login for demonstration.
// In a real application, this should be handled by a secure backend service.
const ADMIN_PASSWORD = 'admin'; // Hardcoded for now

type LoginComponentProps = {
    setLoginOpen: (isOpen: boolean) => void;
}

export default function LoginComponent({ setLoginOpen }: LoginComponentProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsAdmin } = useAuth();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setError('');
      toast({
        title: 'Login Successful',
        description: 'You are now in admin mode.',
      });
      setLoginOpen(false);
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Admin Login</DialogTitle>
        <DialogDescription>
          Enter the admin password to unlock editing features.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleLogin} className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-sm font-medium text-destructive">{error}</p>}
        <DialogFooter>
          <Button type="submit">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </DialogFooter>
      </form>
    </>
  );
}
