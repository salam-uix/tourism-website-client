import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.js";

const inializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default inializeAuthentication;