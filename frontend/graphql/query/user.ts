import {graphql} from "../../gql";
const verifyGoogleUserToken = graphql(`#graphql
    query VerifyGoogleUserToken($token: String!) {
        verifyGoogleToken(token: $token)
    }
`);

export const getCurrentUserQuery = graphql(`#graphql
  query GetCurrentUser{
    getCurrentUser{
        id
        profileImageURL
        email
        firstname
        lastname
        tweets {
          id
          content
          author {
          id
          firstname
          lastname
          profileImageURL
          }
        }
    }
  }
`)


export const getUserByIdQuery = graphql(`#graphql
  query GetUserById($id: ID!) {
  getUserById(id: $id) {
    id
    profileImageURL
    firstname
    lastname
    tweets {
      id
      content
      author {
        id
        firstname
        lastname
       profileImageURL
      }
    }
  }
}
  `)