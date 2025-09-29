
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type AuthContextType = {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdminState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
      setIsAdminState(storedIsAdmin);

      // Initialize placeholder images in localStorage if not present
      if (!localStorage.getItem('placeholderImages')) {
        localStorage.setItem('placeholderImages', JSON.stringify(PlaceHolderImages));
      }

    } catch (error) {
        console.warn('Could not read admin status from localStorage', error);
    }
    setIsLoading(false);
  }, []);

  const setIsAdmin = (isAdmin: boolean) => {
    try {
      localStorage.setItem('isAdmin', String(isAdmin));
      setIsAdminState(isAdmin);
    } catch (error) {
      console.warn('Could not persist admin status to localStorage', error);
      setIsAdminState(isAdmin);
    }
  };
  
  if (isLoading) {
    return null; 
  }

  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
