import authconfig from "../../../auth0_config.json"

export const environment = { 
  production : false,
  auth : {
    domain:"dev-nbach3ycyxk5627q.us.auth0.com",
    clientId : "pahMz4r1uN8B9nVzs1bxeySTLr1EktMf",
    redirectUri: window.location.origin,
    authorizationParams: {
      audience: "https://api.diamondcrm.io",
      //scope: 'read:current_user',
    },
  },
  dev: {
    apiUrl : "https://diamondcrmapi.azurewebsites.net",
  },
  
}


