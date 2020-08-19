import * as functions from 'firebase-functions'

//Setting Up. firestoreへの書きこみ: 認証の初期化
// import * as admin from 'firebase-admin'

// const serviceAccount = '../../firebase-hands-on/google-service-account.json'

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'YOUR_DATABASE_URL' //DBのURLを書き換え
// })

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true })
  response.send('Hello from Firebase!')
})

//Lesson 1. firestoreへの書きこみ: firestoreへ書き込むonCall関数の定義
// export const helloWorldOnCall = functions.https.onCall(async (data, context) => {
// const db = admin.firestore()

/*TASK: ここにfirestoreへの書き込みコードを書いてみよう！*/

// })

//Lesson 2. 引数をつけてfirestoreへの書きこみ: firestoreへ書き込むonCall関数の定義
// export const helloWorldOnCallWithArg = functions.https.onCall(async (data, context) => {
// const db = admin.firestore()

/*TASK:ここに引数を読み込むコードを書いてみよう！*/

/*TASK: ここに引数を使ったfirestoreへの書き込みコードを書いてみよう！*/

// })
