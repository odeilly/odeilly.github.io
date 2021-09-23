# MySQL のインストール

## インストール

```sh
brew install mysql
```

## MySQL サーバの起動

```sh
brew services start mysql
```

## root パスワードの設定

```sh
mysqladmin password 新しいパスワード -u root -p
```

現在のパスワードを聞かれますが、初期状態ではパスワードはないので、
そのままエンターキーを入力します。
