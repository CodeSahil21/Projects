import Layout from '@/components/Layout/Layout';
import ProfilePageCompo from '@/components/profilpage';
import { graphqlClient } from '@/clients/api';
import { getUserByIdQuery } from '@/graphql/query/user';
import { User } from '@/gql/graphql';
import { NextResponse } from 'next/server';

// 1. Define the fetch function for server-side data fetching
const fetchUserById = async (id: string) => {
  const userInfo = await graphqlClient.request(getUserByIdQuery, { id });
  return userInfo.getUserById as User;
};

// 2. Define the Server Component
const ProfilePage = async ({ params }: { params: { id: string[] } }) => {
  if (!params || !params.id || params.id.length === 0) {
    return NextResponse.json({ status: 404, body: { message: 'User not found' } });
  }

  const id = params.id.join('/');

  // 3. Fetch data during server-side rendering
  const user = await fetchUserById(id);
  if (!user) {
    return NextResponse.json({ status: 404, body: { message: 'User not found' } });
  }

  // 4. Log the fetched data (this will be logged on the server)
  console.log('Fetched User:', user);

  // 5. Return the component with the fetched user data
  return (
    <div>
      <Layout>
        <ProfilePageCompo user={JSON.parse(JSON.stringify(user))} />
      </Layout>
    </div>
  );
};

export default ProfilePage;