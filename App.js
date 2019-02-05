import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import {f, auth, database} from './config/config'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedin: false
    };
    // this.registerUser('fakemail@hotmail.com', 'fakepassword');
    var that = this;

    f.auth().onAuthStateChanged(function(user){
      if(user){
        that.setState({
          loggedin: true
        });
        console.log('logged in foo!', user)
      }else{
        that.setState({
          loggedin: false
        })
        console.log('logged out foo!')
      }
    });
  }

  loginUser = async(email, pass) => {
    if(email != '' && pass != ''){
      try{
        let user = await auth.signInWithAndPassword(email, pass);
        console.log(user);
      } catch(error){
         console.log(error);
      }
    } else{
      alert('missing e-mail or password');
    }
  }

   async logInWithFacebook (){
    const { type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(
      '398906487536671', 
      { permissions: ['email', 'public_profile']}
    );
    if(type === 'success'){
      const credentials = f.auth.FacebookAuthProvider.credential(token); 
      f.auth().signInAndRetrieveDataWithCredential(credentials).catch((error) => {
        console.log('Error..', error);
      })
    }
  } 

 

  
registerUser = (email, password) => {

 
  console.log(email, password );
  auth.createUserWithEmailAndPassword(email, password)
  .then((userObj) => console.log(email, password, userObj))
  .catch((error) =>  console.log('error logging in foo!!' , error));
}

signUserOut= () => {
  auth.signOut()
    .then(() => {
      console.log('logged out foo!!!...');
    }).catch((error) => {
      console.log('Error:', error);
    });
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>-----------</Text>
        {this.state.loggedin == true ? ( 
          <View>
            <TouchableHighlight onPress={() => this.signUserOut() } style={{ backgroundColor:'red'}}>
            <Text>Log out</Text>
            </TouchableHighlight>
            <Text>Logged in...</Text>
          </View>
        ) : (
          <View>

          

            <TouchableHighlight 
            onPress={()=> this.setState({emailloginView: true})}
            style={{backgroundColor: 'green'}}>
            <Text style={{color:'white'}}>Log In With E-mail</Text>
            </TouchableHighlight>

            <TouchableHighlight 
            onPress={()=> this.logInWithFacebook( )}
            style={{backgroundColor: 'green'}}>
            <Text style={{color:'white'}}>Log In With Facebook</Text>
            </TouchableHighlight>
         
          </View>
        )}
          
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

  