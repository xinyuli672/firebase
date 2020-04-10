import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers.js';
import firebase from 'firebase'
import DisplayData from './components/DisplayData.js';

class App extends Component {
    constructor(props){
        super(props);
        var config = {
            apiKey: "AIzaSyAy6xpUxLxSv3GxDaA8_s9moIKz5vgU6AE",
            authDomain: "cse110firebase-caf55.firebaseapp.com",
            databaseURL: "https://cse110firebase-caf55.firebaseio.com",
            projectId: "cse110firebase-caf55",
            storageBucket: "cse110firebase-caf55.appspot.com",
            messagingSenderId: "326525798454"
        };
        firebase.initializeApp(config);
    }
  render() {
      return(
          <div>
              <TeamMembers db={firebase}/>
              <DisplayData db={firebase}/>

          </div>
      );
  }
}

export default App;
