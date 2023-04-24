require('dotenv').config();
const { initializeApp,applicationDefault} = require('firebase-admin/app');
const {getFirestore}= require('firebase-admin/firestore')
const { getStorage } = require('firebase-admin/storage') ;

initializeApp({
    credential: applicationDefault(),
})

const db = getFirestore();
const ds = getStorage();
module.exports={db,ds,};