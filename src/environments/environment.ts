// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?",
  firebaseConfig: {
    apiKey: "AIzaSyBQBCc9tBF92-QpM6AmxXwM4xdFdw_LAmw",
    authDomain: "github-jobs-96166.firebaseapp.com",
    projectId: "github-jobs-96166",
    storageBucket: "github-jobs-96166.appspot.com",
    messagingSenderId: "480921357002",
    appId: "1:480921357002:web:11c995c5cf0366eabac233",
    measurementId: "G-DNTTG0H3JR"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
