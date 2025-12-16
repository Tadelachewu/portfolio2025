
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { LogIn } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

// Login now calls a secure server API that compares the SHA-256 hash of the
// submitted password against `process.env.ADMIN_PASSWORD_HASH` on the server.

export default function LoginComponent() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsAdmin } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
      .then(async (res) => {
        const data = await res.json()
        if (res.ok && data.success) {
          setIsAdmin(true)
          setError('')
          toast({ title: 'Login Successful', description: 'You are now in admin mode.' })
          router.push('/')
        } else {
          setError(data.message || 'Incorrect password. Please try again.')
          toast({ title: 'Login Failed', description: data.message || 'Incorrect password. Please try again.', variant: 'destructive' })
        }
      })
      .catch(() => {
        setError('Server error. Please try again later.')
        toast({ title: 'Login Failed', description: 'Server error. Please try again later.', variant: 'destructive' })
      })
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Admin Login</CardTitle>
        <p className="text-sm text-muted-foreground pt-2">
          Enter the admin password to unlock editing features.
        </p>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent className="grid gap-4">
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
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
