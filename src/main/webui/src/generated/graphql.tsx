import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthenticatedUser = {
  __typename?: 'AuthenticatedUser';
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Document = {
  __typename?: 'Document';
  name?: Maybe<Scalars['String']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  amount: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
};

export type Organization = {
  __typename?: 'Organization';
  documents?: Maybe<Array<Maybe<Document>>>;
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  name?: Maybe<Scalars['String']>;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  authenticatedUser?: Maybe<AuthenticatedUser>;
  organzation?: Maybe<Organization>;
  organzations?: Maybe<Array<Maybe<Organization>>>;
  userProfile?: Maybe<UserProfile>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  name?: Maybe<Scalars['String']>;
  settings?: Maybe<UserProfileSettings>;
  username?: Maybe<Scalars['String']>;
};

export type UserProfileSettings = {
  __typename?: 'UserProfileSettings';
  moresetting?: Maybe<Scalars['String']>;
  setting?: Maybe<Scalars['String']>;
};

export type AuthenticatedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthenticatedUserQuery = { __typename?: 'Query', authenticatedUser?: { __typename?: 'AuthenticatedUser', username?: string | null, roles?: Array<string | null> | null, token?: string | null } | null };

export type OrganzationQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganzationQuery = { __typename?: 'Query', organzation?: { __typename?: 'Organization', name?: string | null, invoices?: Array<{ __typename?: 'Invoice', name?: string | null, amount: number } | null> | null, documents?: Array<{ __typename?: 'Document', name?: string | null } | null> | null } | null };

export type OrganzationsQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganzationsQuery = { __typename?: 'Query', organzations?: Array<{ __typename?: 'Organization', name?: string | null } | null> | null };

export type UserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserProfileQuery = { __typename?: 'Query', userProfile?: { __typename?: 'UserProfile', name?: string | null, username?: string | null, settings?: { __typename?: 'UserProfileSettings', setting?: string | null, moresetting?: string | null } | null } | null };


export const AuthenticatedUserDocument = gql`
    query authenticatedUser {
  authenticatedUser {
    username
    roles
    token
  }
}
    `;

/**
 * __useAuthenticatedUserQuery__
 *
 * To run a query within a React component, call `useAuthenticatedUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthenticatedUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthenticatedUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthenticatedUserQuery(baseOptions?: Apollo.QueryHookOptions<AuthenticatedUserQuery, AuthenticatedUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthenticatedUserQuery, AuthenticatedUserQueryVariables>(AuthenticatedUserDocument, options);
      }
export function useAuthenticatedUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthenticatedUserQuery, AuthenticatedUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthenticatedUserQuery, AuthenticatedUserQueryVariables>(AuthenticatedUserDocument, options);
        }
export type AuthenticatedUserQueryHookResult = ReturnType<typeof useAuthenticatedUserQuery>;
export type AuthenticatedUserLazyQueryHookResult = ReturnType<typeof useAuthenticatedUserLazyQuery>;
export type AuthenticatedUserQueryResult = Apollo.QueryResult<AuthenticatedUserQuery, AuthenticatedUserQueryVariables>;
export const OrganzationDocument = gql`
    query organzation {
  organzation {
    name
    invoices {
      name
      amount
    }
    documents {
      name
    }
  }
}
    `;

/**
 * __useOrganzationQuery__
 *
 * To run a query within a React component, call `useOrganzationQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganzationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganzationQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrganzationQuery(baseOptions?: Apollo.QueryHookOptions<OrganzationQuery, OrganzationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganzationQuery, OrganzationQueryVariables>(OrganzationDocument, options);
      }
export function useOrganzationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganzationQuery, OrganzationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganzationQuery, OrganzationQueryVariables>(OrganzationDocument, options);
        }
export type OrganzationQueryHookResult = ReturnType<typeof useOrganzationQuery>;
export type OrganzationLazyQueryHookResult = ReturnType<typeof useOrganzationLazyQuery>;
export type OrganzationQueryResult = Apollo.QueryResult<OrganzationQuery, OrganzationQueryVariables>;
export const OrganzationsDocument = gql`
    query organzations {
  organzations {
    name
  }
}
    `;

/**
 * __useOrganzationsQuery__
 *
 * To run a query within a React component, call `useOrganzationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganzationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganzationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrganzationsQuery(baseOptions?: Apollo.QueryHookOptions<OrganzationsQuery, OrganzationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganzationsQuery, OrganzationsQueryVariables>(OrganzationsDocument, options);
      }
export function useOrganzationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganzationsQuery, OrganzationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganzationsQuery, OrganzationsQueryVariables>(OrganzationsDocument, options);
        }
export type OrganzationsQueryHookResult = ReturnType<typeof useOrganzationsQuery>;
export type OrganzationsLazyQueryHookResult = ReturnType<typeof useOrganzationsLazyQuery>;
export type OrganzationsQueryResult = Apollo.QueryResult<OrganzationsQuery, OrganzationsQueryVariables>;
export const UserProfileDocument = gql`
    query userProfile {
  userProfile {
    name
    username
    settings {
      setting
      moresetting
    }
  }
}
    `;

/**
 * __useUserProfileQuery__
 *
 * To run a query within a React component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserProfileQuery(baseOptions?: Apollo.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
      }
export function useUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileQueryResult = Apollo.QueryResult<UserProfileQuery, UserProfileQueryVariables>;