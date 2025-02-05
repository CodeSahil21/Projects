"use client";
import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';
import FeedCard from '../FeedCard/index';
import { Tweet, User } from '@/gql/graphql';

interface ProfilePageProps {
    user: User;
}
const ProfilePageCompo: React.FC<ProfilePageProps> = (props) => { 
  return (
    <div>
    <div>
      <nav className=' flex items-center gap-3 py-2 px-3 border-b border-slate-800'>
        <BsArrowLeftShort className="text-4xl"/>
        <div>
          <h1 className="text-xl font-bold">{props.user?.firstname} {props.user?.lastname}</h1>
          <h1 className="text-md font-bold text-slate-500">{props.user?.tweets?.length} tweets</h1>
        </div>
      </nav>
      <div className='p-4 border-b border-slate-800 '>
        {props.user?.profileImageURL ? (
          <Image src={props.user.profileImageURL} alt="profile" width={100} height={100} className="rounded-full"/>
        ) : (
          <FaUserCircle className="text-4xl"/>
        )}
        <h1 className="text-xl font-bold mt-3">{props.user?.firstname} {props.user?.lastname}</h1>
      </div>
      <div>
      <div>
      {props.user?.tweets?.map(tweet=>( <FeedCard data={tweet as Tweet} key={tweet?.id} />))}
    </div>
      </div>
    </div>
    </div>
  );
};

 export default ProfilePageCompo;

