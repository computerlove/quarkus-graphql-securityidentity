package org.acme.graphql;

import io.quarkus.security.identity.SecurityIdentity;
import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Query;
import org.eclipse.microprofile.graphql.Source;

import java.security.Principal;
import java.time.Duration;
import java.util.List;
import java.util.Random;

@GraphQLApi
public class Service {
    private final SecurityIdentity securityIdentity;
    private final AccessControl accessControl;

    public Service(SecurityIdentity securityIdentity, AccessControl accessControl) {
        this.securityIdentity = securityIdentity;
        this.accessControl = accessControl;
    }

    @Query
    public Uni<Organization> organzation() {
        return Multi.createFrom().item(new Organization("organization"))
                .filter(accessControl.accessPredicate())
                .map(accessControl::map)
                .toUni()
                .onItem().delayIt().by(getDuration());
    }

    @Query
    public Uni<AuthenticatedUser> authenticatedUser() {
        Principal principal = securityIdentity.getPrincipal();
        return Uni.createFrom().item(new AuthenticatedUser(principal.getName())).onItem().delayIt().by(getDuration());
    }

    public Uni<List<String>> roles(@Source AuthenticatedUser user) {
        return Uni.createFrom().item(List.of("Role1 for " + user.username())).onItem().delayIt().by(getDuration());
    }

    public Uni<String> token(@Source AuthenticatedUser user) {
        return Uni.createFrom().item("token for " + user.username()).onItem().delayIt().by(getDuration());
    }

    @Query
    public Uni<List<Organization>> organzations() {
        return Multi.createFrom().item(new Organization("organization"))
                .map(accessControl::map)
                .collect().asList()
                .onItem().delayIt().by(getDuration());
    }

    @Query
    public Uni<UserProfile> userProfile() {
        Principal principal = securityIdentity.getPrincipal();
        return Uni.createFrom().item(new UserProfile(principal.getName(), "name")).onItem().delayIt().by(getDuration());
    }

    public Uni<UserProfileSettings> settings(@Source UserProfile userProfile) {
        return Uni.createFrom().item(new UserProfileSettings("setting", userProfile.name())).onItem().delayIt().by(getDuration());
    }

    public Uni<List<Document>> documents(@Source Organization organization) {
        return Uni.createFrom().item(List.of(new Document(organization.name))).onItem().delayIt().by(getDuration());
    }

    public Uni<List<Invoice>> invoices(@Source Organization organization) {
        return Uni.createFrom().item(List.of(new Invoice(organization.name, 66.6))).onItem().delayIt().by(getDuration());
    }

    public record Organization(String name) {}
    public record Document(String name) {}
    public record Invoice(String name, double amount) {}
    public record AuthenticatedUser(String username) { }
    public record UserProfile(String username, String name) { }
    public record UserProfileSettings(String setting, String moresetting) { }
    private Duration getDuration() {
        return Duration.ofMillis(new Random().nextLong(3_000));
    }

}
