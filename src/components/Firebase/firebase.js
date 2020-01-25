import app from 'firebase/app'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDBi0fKU7sNsZcSCYYSUowLWbaHaaD2sbA",
    authDomain: "igm-cms.firebaseapp.com",
    databaseURL: "https://igm-cms.firebaseio.com",
    projectId: "igm-cms",
    storageBucket: "igm-cms.appspot.com",
    messagingSenderId: "732422648008",
    appId: "1:732422648008:web:05e67d76f0094e1ab675fd"
  };

  class Firebase {
      constructor() {
          app.initializeApp(firebaseConfig)
      }
  }

  export default Firebase