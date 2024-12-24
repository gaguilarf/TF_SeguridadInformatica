import Keycloak from 'keycloak-js';

const keycloakConfig = {
    url: "http://localhost:8181/",
    realm: "Gestion-Documentos",
    clientId: "react-app-client",
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;