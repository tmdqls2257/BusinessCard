import firebase from "firebase/app";

class AuthService{
  login(providerName){
    const provider = new firebase.auth[`${providerName}AutoProvider`]();
    return firebase.auth().signInWithPopup(provider);
  }
}
export default AuthService;