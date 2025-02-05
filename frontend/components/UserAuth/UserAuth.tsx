'use client';
import React, { useState, useEffect } from 'react';
import { useCurrentUser } from '@/hooks/user';
import GoogleLoginButton from '@/components/googleAuth/GoogleLoginButton';
import { useQueryClient } from '@tanstack/react-query';

const UserAuthSkeleton = () => {
  return (
      <div className="p-5 bg-slate-700 rounded-lg mb-4 animate-pulse">
        <div className="h-8 bg-slate-600 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-slate-600 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-600 rounded w-5/6 mb-4"></div>
        <div className="h-10 bg-slate-600 rounded w-full"></div>
      </div>
  );
};

const UserAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const queryClient = useQueryClient();

  useEffect(() => {
    const token = localStorage.getItem('__Xtoken');
    if (token) {
      setIsAuthenticated(true);
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    } else {
      setIsAuthenticated(false);
    }
    setIsAuthLoading(false);
  }, [queryClient]);

  const { user, error, isLoading } = useCurrentUser(isAuthenticated);

  useEffect(() => {
    if (isAuthenticated && !user && !isLoading && !error) {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    }
  }, [isAuthenticated, user, isLoading, error, queryClient]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    queryClient.invalidateQueries({ queryKey: ['currentUser'] });
  };

  if (isAuthLoading) return <UserAuthSkeleton />;

  if (!isAuthenticated) {
    return (
        <div className="p-5 bg-slate-700 rounded-lg mb-4">
          <h1 className="my-2 text-2xl font-bold">New to X?</h1>
          <p className="text-gray-400 mb-4">Sign up now to get your own personalized timeline!</p>
          <GoogleLoginButton onSuccess={handleLoginSuccess} />
        </div>
    );
  }

  if (isLoading) return <UserAuthSkeleton />;
  if (error) {
    console.log('Error in UserAuth:', error);
    return (
      <div className="p-5 bg-slate-700 rounded-lg mb-4">
        <h1 className="my-2 text-2xl font-bold">Something went wrong</h1>
        <p className="text-gray-400 mb-4">Please try again.</p>
        <GoogleLoginButton onSuccess={handleLoginSuccess} />
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="p-5 bg-slate-700 rounded-lg mb-4">
        <h1 className="my-2 text-2xl font-bold">Welcome back!</h1>
        <p className="text-gray-400 mb-4">You are logged in as {user.firstname} {user.lastname}.</p>
      </div>
    );
  }

  return null;
};

export default UserAuth;