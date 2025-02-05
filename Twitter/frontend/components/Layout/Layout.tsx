"use client"
import React, { ReactNode, useMemo } from 'react';
import { BiHash, BiUser } from "react-icons/bi";
import { BsBell, BsBookmarks, BsCheckCircleFill, BsEnvelope, BsThreeDots, BsTwitterX } from "react-icons/bs";
import { RiHome7Fill } from "react-icons/ri";
import { Inter } from "next/font/google";
import UserProfileCard from "@/components/UserProfileCard/UserProfileCard";
import UserAuth from "@/components/UserAuth/UserAuth";
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/user';

const interFont = Inter({ subsets: ["latin"] });

interface XSidebarButton {
  title: string;
  icon: React.ReactNode;
  path: string;
}



interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {user} = useCurrentUser(true);
  const sidebarMenuItems: XSidebarButton[] =  useMemo(()=>[
    {
      title: "Home",
      icon: <RiHome7Fill />,
      path: "/"
    },
    {
      title: "Explore",
      icon: <BiHash />,
      path: "/explore"
    },
    {
      title: "Notifications",
      icon: <BsBell />,
      path: "/notifications"
    },
    {
      title: "Messages",
      icon: <BsEnvelope />,
      path: "/messages"
    },
    {
      title: "Bookmarks",
      icon: <BsBookmarks />,
      path: "/bookmarks"
    },
    {
      title: "Monetization",
      icon: <BsCheckCircleFill />,
      path: "/monetization"
    },
    {
      title: "Profile",
      icon: <BiUser />,
      path: user ? `/profile/${user.id}` : "/profile"
    },
    {
      title: "More",
      icon: <BsThreeDots />,
      path: "/more"
    }
  ],[user?.id])
  return (
    <div className={interFont.className}>
      <div className="grid grid-cols-12 h-screen w-screen sm:px-56">
        <div className="col-span-2  sm:col-span-3 pt-1 flex sm:justify-end px-4 pr-4 relative">
          <div className="">
            <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
              <BsTwitterX />
            </div>
            <div className="mt-1 text-xl pr-3 ">
              <ul>
                {sidebarMenuItems.map(item => (
                  <li
                    className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3  py-2 w-fit cursor-pointer mt-2"
                    key={item.title}
                  >
                    <Link href={item.path}>
                      <span className="flex items-center gap-4">
                        <span className="text-3xl">{item.icon}</span>
                        <span className="hidden sm:inline text-lg">{item.title}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 px-2">
                <button className="block sm:hidden bg-[#1d9bf0] text-lg font-semibold py-2 px-2 rounded-full w-fit">
                  <BsTwitterX />
                </button>
                <button className="hidden sm:block bg-[#1d9bf0] text-lg font-semibold py-2 px-3 rounded-full w-full">
                  Tweet
                </button>
              </div>
            </div>
          </div>
          <div className="fixed bottom-5 left-70 w-fit px-1">
            <div className="bg-slate-800 w-fit h-fit rounded-full p-2 cursor-pointer transition-all flex items-center gap-2">
              <UserProfileCard />
            </div>
          </div>
        </div>
        <div className="col-span-10 sm:col-span-6 w-full h-full border-r-[0.5px] border-l-[0.5px] border border-gray-800">
          {children}
        </div>
        <div className="hidden lg:block sm:col-span-3 p-5 md-hidden sm:hidden">
          <div className='sm:fixed top-0 right-30 w-fit sm:w-auto h-fit p-4'>
            <UserAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;