'use client';
import React from 'react';
import { useGetAllTweets } from '@/hooks/tweet';
import FeedCard from '../FeedCard/index';
import { Tweet } from '@/gql/graphql';
import FeedCardSkeleton from '../Skeletons/FeedCardSkeleton';

const Feed: React.FC = () => {
  const { tweets, error, isLoading } = useGetAllTweets();

  if (isLoading) {
    return (
      <div>
       <FeedCardSkeleton/>
       <FeedCardSkeleton/>
       <FeedCardSkeleton/>
       <FeedCardSkeleton/>
       <FeedCardSkeleton/>
      </div>
    );
  }

  if (error) return <div>Error loading tweets</div>;

  if (!tweets || tweets.length === 0) {
    return <div>No tweets available</div>;
  }

  return (
    <div>
      {tweets.filter((tweet): tweet is Tweet => tweet !== null).map((tweet: Tweet) => (
        <FeedCard key={tweet.id} data={tweet} />
      ))}
    </div>
  );
};

export default Feed;