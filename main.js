//setting up firebase with our website
const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');
overlayBtn.addEventListener('click', () => {
    container.classList.toggle('right-panel-active');

    overlayBtn.classList.remove('btnScaled');
    window.requestAnimationFrame(() => {
        overlayBtn.classList.add('btnScaled');
    })
});


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8NhkZLPvBuyQn5e6oRIGoy5mF8FkvtQQ",
    authDomain: "student-innovation-8c542.firebaseapp.com",
    projectId: "student-innovation-8c542",
    storageBucket: "student-innovation-8c542.appspot.com",
    messagingSenderId: "992446618836",
    appId: "1:992446618836:web:eb405186ed1d1905b12f41"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            //document.write("You are Signed Up")
            window.location.href = "dashboard.html";
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            alert("Existing User");
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            //document.write("You are Signed In")
            window.location.href = "dashboard.html";
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            alert(error);
        });
}