import React from "react";
import {
    useAuthenticatedUserQuery,
    useOrganzationQuery,
    useOrganzationsQuery,
    useUserProfileQuery
} from "../generated/graphql";

export function Application() {
    const { data: updata, error: uperror } = useUserProfileQuery();
    const { data: osdata, error: oserror } = useOrganzationsQuery();
    const { data: odata, error: oerror } = useOrganzationQuery();
    const { data: audata, error: auerror } = useAuthenticatedUserQuery();

    return <div>
        <ul>
            <li>userProfile {`${JSON.stringify(updata?.userProfile)}`} {`${uperror}`}</li>
            <li>organzations {`${JSON.stringify(osdata?.organzations)}`} {`${oserror}`}</li>
            <li>organzation {`${JSON.stringify(odata?.organzation)}`} {`${oerror}`}</li>
            <li>authenticatedUser {`${JSON.stringify(audata?.authenticatedUser)}`} {`${auerror}`}</li>
        </ul>
    </div>
}