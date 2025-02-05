'use client';
import { useCreateTweet } from "@/hooks/tweet";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { BiImageAlt } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const TweetCompo: React.FC = () => {
  const { user, error, isLoading } = useCurrentUser(true);
 const [content,setContent] = useState('');
 const {mutate} = useCreateTweet();
  const handleSelectImage = useCallback(()=>{
   const input = document.createElement("input");
   input.setAttribute("type","file");
   input.setAttribute("accept","image/*");
   input.click();
  },[])
  const handleCreateTweet = useCallback(()=>{
    mutate({
      content,
    })
  },[content,mutate])
  return (
    <div>
      <div className="p-4 hover:bg-slate-900 transition-all cursor-pointer border-b border-gray-700">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-1">
            {isLoading || error || !user || !user.profileImageURL ? (
              <FaUserCircle className="text-4xl text-gray-500" />
            ) : (
              <Image
                src={user.profileImageURL}
                alt="user-image"
                height={50}
                width={50}
                className="rounded-full"
              />
            )}
          </div>
          <div className="col-span-11">
            <div>
            <div className="p-3">
            <textarea 
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            className="
            border w-full 
            bg-transparent
            rounded-lg
            text-xl
            p-3" 
            placeholder="what's happening?"
            rows={4}>
            </textarea>
            </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="mt-2">
                <BiImageAlt onClick={handleSelectImage}className="text-xl"/>
              </div>
              <div>
                <button 
                onClick={handleCreateTweet}
                className="bg-[#1d9bf0] text-sm font-semibold py-2 px-3 rounded-full">Tweet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCompo;