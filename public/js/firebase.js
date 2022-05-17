let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyAdeVu9V87EWibY4jxN4aMLy1XCdeDHQlw",
    authDomain: "blog-a4808.firebaseapp.com",
    projectId: "blog-a4808",
    storageBucket: "blog-a4808.appspot.com",
    messagingSenderId: "1007000973988",
    appId: "1:1007000973988:web:c975984ac1ff80e71d6c31"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()