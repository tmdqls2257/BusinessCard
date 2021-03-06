import firebase from "firebase";
import firebaseApp from './firebase';

class AuthService{
  login(providerName){
    const provider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(provider);
  }
  onAuthStateChanged(onUserChange){
    firebase.auth().onAuthStateChanged((user) => {
      onUserChange(user);
    })
  }
  logout(){
    firebase.auth().signOut();
  }
}
export default AuthService;