import React from 'react';
import Image from 'next/image';
import { FaRegComment, FaRetweet, FaRegHeart, FaShare, FaUpload, FaUserCircle } from 'react-icons/fa';
import { Tweet } from '@/gql/graphql';
import Link from 'next/link';

interface FeedCardProps {
  data: Tweet;
}
//{new Date(data.createdAt).toLocaleString()}
const FeedCard: React.FC<FeedCardProps> = (props) => {
  const {data} = props;
  return (
    <div className="p-4 hover:bg-slate-900 transition-all cursor-pointer border-b border-gray-700">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1">
          {data.author?.profileImageURL ? (
            <Image src={data.author.profileImageURL} alt="user-image" height={50} width={50} className="rounded-full" />
          ) : (
            <FaUserCircle className="text-4xl text-gray-500" />
          )}
        </div>
        <div className="col-span-11">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h5 className="font-bold mr-2">
                <Link href={`/profile/${data.author?.id}`}>
                {`${data.author?.firstname} ${data.author?.lastname}`}
                </Link>
              </h5>
              <span className="text-gray-500">@{data.author?.firstname}</span>
            </div>
            <span className="text-gray-500">19-02-22</span>
          </div>
          <p className="mt-2">{data.content}</p>
          <div className="flex justify-between mt-4 text-gray-500 w-[90%]">
            <FaRegComment className="hover:text-blue-500 cursor-pointer" />
            <FaRetweet className="hover:text-green-500 cursor-pointer" />
            <FaRegHeart className="hover:text-red-500 cursor-pointer" />
            <FaShare className="hover:text-blue-500 cursor-pointer" />
            <FaUpload className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;