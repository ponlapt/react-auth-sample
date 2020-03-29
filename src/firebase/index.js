import firebase from 'firebase/app'
import 'firebase/auth'
import config from './config/index'

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export default firebase.auth()