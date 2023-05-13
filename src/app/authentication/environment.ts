import authconfig from "../../../../main/auth0_config.json"

export const environment = { 
  production : false,
  auth : {
    domain: authconfig.domain,
    clientId : authconfig.clientId,
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: authconfig.audience,
      scope: 'read:current_user',
    },
  },
  dev: {
    apiUrl : authconfig.apiUrl,
  },
  
}