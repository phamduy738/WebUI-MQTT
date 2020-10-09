(function() {
    console.log('Start file login with firebase');
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAa-xXzz4Se-CTvGu1SfYXmlfMxP8obr4U",
        authDomain: "cnc24h-d977b.firebaseapp.com",
        databaseURL: "https://cnc24h-d977b.firebaseio.com",
        projectId: "cnc24h-d977b",
        storageBucket: "cnc24h-d977b.appspot.com",
        messagingSenderId: "999763393350",
        appId: "1:999763393350:web:765dbd4fcbf8dcfb17c347",
        measurementId: "G-C6NR2LRLKD"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    //Google singin provider
    var ggProvider = new firebase.auth.GoogleAuthProvider();
    //Facebook singin provider
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    //Login in variables
    const btnGoogle = document.getElementById('btnGoogle');
    const btnFaceBook = document.getElementById('btnFacebook');

        //Sing in with Google
        btnGoogle.addEventListener('click', e => {
            firebase.auth().signInWithPopup(ggProvider).then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log('User>>Goole>>>>', user);
                userId = user.uid;

            }).catch(function(error) {
                console.error('Error: hande error here>>>', error.code)
            })
        }, false)

        //Sing in with Facebook
        btnFaceBook.addEventListener('click', e => {
            firebase.auth().signInWithPopup(fbProvider).then(function(result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log('User>>Facebook>', user);
                // ...
                userId = user.uid;
            
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.error('Error: hande error here>Facebook>>', error.code)
            });
        }, false)
        //jquery 
}())