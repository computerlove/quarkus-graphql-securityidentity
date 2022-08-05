package org.acme.graphql;

import io.quarkus.security.identity.SecurityIdentity;

import javax.enterprise.context.RequestScoped;
import java.security.Principal;
import java.util.Random;
import java.util.function.Predicate;

@RequestScoped
public class AccessControl {
    private final SecurityIdentity securityIdentity;

    public AccessControl(SecurityIdentity securityIdentity) {
        this.securityIdentity = securityIdentity;
    }

    public Predicate<Service.Organization> accessPredicate() {
        var hasRole = securityIdentity.hasRole("role");
        System.out.println("accessPredicate hasRole " + hasRole);
        return b -> new Random().nextBoolean();
    }

    public Service.Organization map(Service.Organization organization) {
        Principal principal = securityIdentity.getPrincipal();
        System.out.println("map principal " + principal.getName());
        return new Service.Organization(organization.name());
    }
}
