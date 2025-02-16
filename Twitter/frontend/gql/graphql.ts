/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CreateTweetData = {
  content: Scalars["String"]["input"];
  imageURL?: InputMaybe<Scalars["String"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createTweet?: Maybe<Tweet>;
};

export type MutationCreateTweetArgs = {
  payload: CreateTweetData;
};

export type Query = {
  __typename?: "Query";
  getAllTweets?: Maybe<Array<Maybe<Tweet>>>;
  getCurrentUser?: Maybe<User>;
  getUserById?: Maybe<User>;
  verifyGoogleToken?: Maybe<Scalars["String"]["output"]>;
};

export type QueryGetUserByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryVerifyGoogleTokenArgs = {
  token: Scalars["String"]["input"];
};

export type Tweet = {
  __typename?: "Tweet";
  author?: Maybe<User>;
  content: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  imageURL?: Maybe<Scalars["String"]["output"]>;
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  firstname: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastname?: Maybe<Scalars["String"]["output"]>;
  profileImageURL?: Maybe<Scalars["String"]["output"]>;
  tweets?: Maybe<Array<Maybe<Tweet>>>;
};

export type CreateTweetMutationVariables = Exact<{
  payload: CreateTweetData;
}>;

export type CreateTweetMutation = {
  __typename?: "Mutation";
  createTweet?: { __typename?: "Tweet"; id: string } | null;
};

export type GetAllTweetsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllTweetsQuery = {
  __typename?: "Query";
  getAllTweets?: Array<{
    __typename?: "Tweet";
    id: string;
    content: string;
    imageURL?: string | null;
    author?: {
      __typename?: "User";
      id: string;
      firstname: string;
      lastname?: string | null;
      profileImageURL?: string | null;
    } | null;
  } | null> | null;
};

export type VerifyGoogleUserTokenQueryVariables = Exact<{
  token: Scalars["String"]["input"];
}>;

export type VerifyGoogleUserTokenQuery = {
  __typename?: "Query";
  verifyGoogleToken?: string | null;
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  __typename?: "Query";
  getCurrentUser?: {
    __typename?: "User";
    id: string;
    profileImageURL?: string | null;
    email: string;
    firstname: string;
    lastname?: string | null;
    tweets?: Array<{
      __typename?: "Tweet";
      id: string;
      content: string;
      author?: {
        __typename?: "User";
        id: string;
        firstname: string;
        lastname?: string | null;
        profileImageURL?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetUserByIdQuery = {
  __typename?: "Query";
  getUserById?: {
    __typename?: "User";
    id: string;
    profileImageURL?: string | null;
    firstname: string;
    lastname?: string | null;
    tweets?: Array<{
      __typename?: "Tweet";
      id: string;
      content: string;
      author?: {
        __typename?: "User";
        id: string;
        firstname: string;
        lastname?: string | null;
        profileImageURL?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export const CreateTweetDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateTweet" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "payload" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateTweetData" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createTweet" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "payload" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "payload" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateTweetMutation, CreateTweetMutationVariables>;
export const GetAllTweetsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllTweets" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getAllTweets" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "imageURL" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "author" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "firstname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastname" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "profileImageURL" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllTweetsQuery, GetAllTweetsQueryVariables>;
export const VerifyGoogleUserTokenDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "VerifyGoogleUserToken" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "token" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "verifyGoogleToken" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "token" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "token" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  VerifyGoogleUserTokenQuery,
  VerifyGoogleUserTokenQueryVariables
>;
export const GetCurrentUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCurrentUser" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getCurrentUser" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "profileImageURL" },
                },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "firstname" } },
                { kind: "Field", name: { kind: "Name", value: "lastname" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tweets" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "author" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "profileImageURL" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetUserByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUserById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUserById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "profileImageURL" },
                },
                { kind: "Field", name: { kind: "Name", value: "firstname" } },
                { kind: "Field", name: { kind: "Name", value: "lastname" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tweets" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "author" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "firstname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "lastname" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "profileImageURL" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
