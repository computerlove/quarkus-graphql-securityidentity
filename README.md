# Reproducer for Quarkus Graphql SecurityIdentity issue

Start with `quarkus:dev`, reload localhost:8080 and check logs.

## Issue
This an attempt at reprocing an issue where accessing SecurityIdentity values crash with 
IllegalStateException("The current thread cannot be blocked: ... ).

The codepath observed in `SecurityIdentityAssociation.getIdentity()` seems to end up in 
```java
if (identity == null) {
    identity = identityProviderManager.authenticate(AnonymousAuthenticationRequest.INSTANCE).await().indefinitely();
}
```

Running with Quarkus 2.11.1 results in the given output in console
```text
7686963212 [userProfile] beforeExecute:Username: «jdoe»
7686963213 [organzations] beforeExecute:Username: «jdoe»
7686963214 [organzation] beforeExecute:Username: «jdoe»
7686963215 [authenticatedUser] beforeExecute:Username: «jdoe»

7686963215 [authenticatedUser] afterExecute:Username: «jdoe»
7686963213 [organzations] afterExecute:Username: «jdoe»
7686963212 [authenticatedUser] afterExecute:Username: «»
7686963212 [authenticatedUser] afterExecute:Username: «»
```

Notice the combinations of contextId, operation and username.