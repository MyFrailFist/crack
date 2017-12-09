// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase : {
    apiKey: "AIzaSyDD1lnWD5j8KqwJxkEVU2U1S8sWgoIg5TI",
    authDomain: "v1-server-3648e.firebaseapp.com",
    databaseURL: "https://v1-server-3648e.firebaseio.com",
    projectId: "v1-server-3648e",
    storageBucket: "v1-server-3648e.appspot.com",
    messagingSenderId: "686599404842"
  }
};

export const fitbitConfig = {
	clientId: "22CKGJ",
	clientSecret:"8786fc39bae197c08ca96acbab4ed7cf",
	authorisationUri:'https://www.fitbit.com/oauth2/authorize',
	//access refresh token
	tokenRequestUri: "https://api.fitbit.com/oauth2/token",
  fitbitCallbackUrl:"https://localhost:4200" + "/fitbit",
  tempUrl:'https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22CKGJ&redirect_uri=https%3A%2F%2Flocalhost%3A4200%2Ffitbit&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800',
  apiToken: 'e0893d63d1ec0f8ac6c7b3899096dbf4cb23a84d'
};