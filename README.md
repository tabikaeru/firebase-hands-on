# GET STARTED

下記コマンドで必要なモジュールをインストール

```
yarn
```

# 実行環境

```
node version v10.18.0
yarn version 1.17.3
firebase-tools 8.7.0
```

# ローカルで functions を動かす設定

## サービスアカウント作成方法

https://firebase.google.com/docs/admin/setup?hl=ja

## エミュレートされる関数の管理者認証情報を設定

```
export GOOGLE_APPLICATION_CREDENTIALS="path/to/google-service-account.json"
```

## .env ファイルの作成

.envExample を.env ファイルにリネームして，#を消して`YOUR_DATABASE_URL`の部分を自分の URL に置き換える.

## firebase shell の起動

```
 yarn shell
```

## ローカルでの onRequest 関数の使い方

```
firebase > YOUR_FUNCTION_NAME()
```

## ローカルでの onCall 関数の使い方

```
firebase > YOUR_FUNCTION_NAME({key: value})
```
