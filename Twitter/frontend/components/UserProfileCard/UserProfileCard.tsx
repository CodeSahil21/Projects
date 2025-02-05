'use client';
import React from 'react';
import Image from 'next/image';
import { useCurrentUser } from '@/hooks/user';
import { BiUser } from "react-icons/bi";

const UserProfileCard: React.FC = () => {
  const { user, error, isLoading } = useCurrentUser(true);

  if (isLoading) {
    return (
      //show skeleton of it while loading it
      <div className="flex items-center gap-4 animate-pulse">
        <div className="rounded-full bg-gray-700 w-8 h-8 flex items-center justify-center">
          <BiUser className="text-gray-500" />
        </div>
        <div className="hidden sm:block bg-gray-700 h-4 w-24 rounded"></div>
      </div>
    );
  }

  if (error) {
    console.log('Error fetching user:', error);
    return <div className="flex items-center gap-4">
    <div className="rounded-full bg-gray-700 w-8 h-8 flex items-center justify-center">
      <BiUser className="text-gray-500" />
    </div>
    <div className="hidden sm:block bg-gray-700 h-4 w-24 rounded"></div>
  </div>
  }

  return (
    <div className="flex items-center gap-4">
      {user && (
        <>
          <Image className="rounded-full"
            src={user.profileImageURL || '/default-profile.png'}
            alt="User Profile"
            width={30}
            height={30} 
          />
          <span className="text-lg hidden sm:block ">{user.firstname} {user.lastname}</span>
        </>
      )}
    </div>
  );
};

export default UserProfileCard;