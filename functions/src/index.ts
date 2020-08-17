import * as functions from 'firebase-functions'

//Lesson 1. firestoreへの書きこみ: 認証の初期化
// import * as admin from 'firebase-admin'

// const serviceAccount = '../../firebase-hands-on/google-service-account.json'

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'YOUR_DATABASE_URL'//DBのURLを書き換え
// })

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
})

//Lesson 1. firestoreへの書きこみ: firestoreへ書き込むonCall関数の定義
// export const helloWorldOnCall = functions.https.onCall(async (data, context) => {
//   const db = admin.firestore()
//   const batch = db.batch()
/*ここにfirestoreへの書き込みコードを書く*/
//   batch.commit()
// })
