# Docker Image

## SMTP サーバ

Docker でローカルにテスト用の SMPT サーバを構築する場合には、
MailHogが便利です。

<https://hub.docker.com/r/mailhog/mailhog>

次のようにしてコンテナを生成します。

```sh
docker run -d -p 8025:8025 -p 1025:1025 --name smtpserver mailhog/mailhog
```

これで、SMTP サーバが起動し、ポート 1025 でアクセスすることが出来ます。
また、
<http://localhost:8025>
にブラウザでアクセスすると、送信されたメールを見ることが出来ます。

別のポート番号を使いたい場合には、次のようにします。

```sh
docker run -d -p 9925:8025 -p 8825:1025 --name smtpserver mailhog/mailhog
```
