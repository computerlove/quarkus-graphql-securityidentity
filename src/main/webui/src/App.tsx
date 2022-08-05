import React from "react";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { Application } from "./components/Application";

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: "Basic amRvZTpwNHNzdzByZA==", //jdoe:p4ssw0rd
        }
    }
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Application />
            </ApolloProvider>
        </>
    );
}

export default App;
