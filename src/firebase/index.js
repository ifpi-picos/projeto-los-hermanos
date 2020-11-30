import firebase from 'firebase/app'
import 'firebase/analytics'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC1w_STPV7fyDY5iQzdtL3afRqoUv9xz1s",
    authDomain: "mural-virtual-ifpi.firebaseapp.com",
    databaseURL: "https://mural-virtual-ifpi.firebaseio.com",
    projectId: "mural-virtual-ifpi",
    storageBucket: "mural-virtual-ifpi.appspot.com",
    messagingSenderId: "837596003628",
    appId: "1:837596003628:web:ff455d53c085d470e30089",
    measurementId: "G-SYB622P9R5"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics()

export default function install(Vue) {
    Object.defineProperty(Vue.prototype, '$firebase', {
        get() {
            return firebaseApp
        }
    })
}