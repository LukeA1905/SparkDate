
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAuth, createUser } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBaL8PixyXtEqXhQvyaA7G6Iz5Io0iAJnc",
    authDomain: "sparkdate-2c844.firebaseapp.com",
    projectId: "sparkdate-2c844",
    storageBucket: "sparkdate-2c844.appspot.com",
    messagingSenderId: "199201599768",
    appId: "1:199201599768:web:a55800d0577e8b637c2e6d",
    measurementId: "G-LG6CY7L906"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
