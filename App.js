import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {f, auth, database} from './config/config'

export default class App extends React.Component {
  constructor(props){
    super(props);
    // this.registerUser('fakemail@hotmail.com', 'fakepassword');
    
    // auth.signOut()
    // .then(() => {
    //   console.log('logged out foo!!!...');
    // }).catch((error) => {
    //   console.log('Error:', error);
    // });


    f.auth().onAuthStateChanged(function(user){
      if(user){
        console.log('logged in foo!', user)
      }else{
        console.log('logged out foo!')
      }
    });
  }


registerUser = (email, password) => {

 
  console.log(email, password );
  auth.createUserWithEmailAndPassword(email, password)
  .then((userObj) => console.log(email, password, userObj))
  .catch((error) =>  console.log('error logging in foo!!' , error));
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
