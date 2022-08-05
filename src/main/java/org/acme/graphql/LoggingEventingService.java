package org.acme.graphql;

import graphql.language.Document;
import graphql.language.OperationDefinition;
import io.quarkus.security.identity.SecurityIdentity;
import io.smallrye.graphql.api.Context;
import io.smallrye.graphql.spi.EventingService;

import javax.enterprise.inject.spi.CDI;
import java.security.Principal;
import java.util.List;

public class LoggingEventingService implements EventingService {
    @Override
    public String getConfigKey() {
        return "LoggingEventingService.enabled";
    }

    @Override
    public void beforeExecute(Context context) {
        Document document = context.unwrap(Document.class);
        List<String> operation = document.getDefinitionsOfType(OperationDefinition.class).stream().map(OperationDefinition::getName).toList();
        System.out.println(context.getExecutionId() + " " + operation + " beforeExecute:" + securityIdentity());
    }

    @Override
    public void afterExecute(Context context) {
        Document document = context.unwrap(Document.class);
        List<String> operation = document.getDefinitionsOfType(OperationDefinition.class).stream().map(OperationDefinition::getName).toList();
        System.out.println(context.getExecutionId() + " " + operation + " afterExecute:" +  securityIdentity());
    }

    private String securityIdentity() {
        SecurityIdentity securityIdentity = CDI.current().select(SecurityIdentity.class).get();
        Principal principal = securityIdentity.getPrincipal();
        return "Username: «" + principal.getName() + "»";
    }
}
