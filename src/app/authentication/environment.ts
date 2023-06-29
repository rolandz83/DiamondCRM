import authconfig from "../../../auth0_config.json"

export const environment = { 
  production : false,
  auth : {
    domain:"dev-nbach3ycyxk5627q.us.auth0.com",
    clientId : "pahMz4r1uN8B9nVzs1bxeySTLr1EktMf",
   
    authorizationParams: {
      audience: "https://api.diamondcrm.io",
      //scope: 'read:current_user',
    },

    httpInterceptor: {
      allowedList: [
        {
          // Match any request that starts 'https://{yourDomain}/api/v2/' (note the asterisk)
          uri: 'https://diamondcrmapi.azurewebsites.net/*',
          tokenOptions: {
            authorizationParams: {
              // The attached token should target this audience
              audience: 'https://api.diamondcrm.io',
  
              // The attached token should have these scopes
              scope: 'read:current_user'
            }
          }
        }
      ]
    }
  },
  dev: {
    apiUrl : "https://diamondcrmapi.azurewebsites.net",
  },
  
}


