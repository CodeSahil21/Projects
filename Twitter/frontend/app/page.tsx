import React, { lazy, Suspense } from "react";
import Layout from "@/components/Layout/Layout";
const TweetCompo = lazy(() => import('@/components/Tweetcomponent/TweetCompo'));
const Feed = lazy(() => import('@/components/Feed'));

export default function Home() {
  return(
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
       <TweetCompo />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Feed />
      </Suspense>
    </Layout>
  );
}