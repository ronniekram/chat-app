import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    projectId: 'reactchat-880e9', 
    apiKey: 'AIzaSyCkh4oP-Lb73qgH1agKSkgZpzqf7OMx_Ho',
    databaseURL: 'https://reactchat-880e9.firebaseio.com'
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;