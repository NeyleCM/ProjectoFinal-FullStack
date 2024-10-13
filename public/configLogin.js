import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAxJWNER7EpjHF6F8Aw1q4B-I5AtG4xRvk",
    authDomain: "projectbreak2.firebaseapp.com",
    projectId: "projectbreak2",
    storageBucket: "projectbreak2.appspot.com",
    messagingSenderId: "732364818741",
    appId: "1:732364818741:web:ec1c4a53466944f9c0a47c",
    measurementId: "G-WGD3NJKYP6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login = async () => {
    try {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredential)
        const idToken = await userCredential.user.getIdToken()
        console.log(idToken)

        const response = await fetch("/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ idToken })
        })
        const data = await response.json()

        if(data.success) {
            console.log("Datos correctos")
            window.location.href = "/dashboard"
        }
        else{
            const mensaje = document.getElementById("mensaje")
            mensaje.innerText = "Credenciales incorrectas"
        }
        
    } catch (error) {
        console.error(error)
    }
}

const loginButton = document.getElementById("loginButton")

loginButton.addEventListener("click", () => {
    login()
    console.log("Pulsa boton");
    
})