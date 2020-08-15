import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

require('dotenv').config({ path: __dirname + '/../.env' })

admin.initializeApp({
  credential: admin.credential.cert(__dirname + '/../google-service-account.json'),
  databaseURL: process.env.DATABASE_URL
})
export const helloWorld = functions.https.onRequest((request, response) => {
  const db = admin.firestore()
  const batch = db.batch()
  batch.set(db.collection('helloWorld').doc(), { hello: 'world' })
})
