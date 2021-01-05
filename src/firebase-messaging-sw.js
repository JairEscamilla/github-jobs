// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBQBCc9tBF92-QpM6AmxXwM4xdFdw_LAmw",
    authDomain: "github-jobs-96166.firebaseapp.com",
    projectId: "github-jobs-96166",
    storageBucket: "github-jobs-96166.appspot.com",
    messagingSenderId: "480921357002",
    appId: "1:480921357002:web:11c995c5cf0366eabac233",
    measurementId: "G-DNTTG0H3JR"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
