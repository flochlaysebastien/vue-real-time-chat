import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDAy4xSFuAO9LOqW5BXMSmwScDcw8emVcE",
    authDomain: "vue-workshop-applications.firebaseapp.com",
    databaseURL: "https://vue-workshop-applications.firebaseio.com",
    projectId: "vue-workshop-applications",
    storageBucket: "vue-workshop-applications.appspot.com",
    messagingSenderId: "1042184740644",
    appId: "1:1042184740644:web:5f89341fe3512101461db1",
    measurementId: "G-7GSH3VD8KH"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.analytics()

// export firestore database
export default firebaseApp.firestore()


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js"></script>

