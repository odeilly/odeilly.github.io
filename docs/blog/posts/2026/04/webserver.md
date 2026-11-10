---
slug: easy_web_server
date: 2026-04-15
tags:
  - サーバ
  - Web
  - Python
  - Node.js
  - Java
categories:
  - Tips
draft: false
---

# 簡易的に Web サーバを立ち上げる方法 (ローカル環境)

ローカル環境で簡易的に Web サーバを立ち上げる方法はいくつもあります。
代表的な方法をまとめます。

<!-- more -->

## Python (最も手軽・定番)

```sh
cd サーバ公開したいディレクトリ
python -m http.server 8080
```

## Node.js (フロントエンド開発向け)

```sh
cd サーバ公開したいディレクトリ
npx serve . -l 8080
```

または

```sh
cd サーバ公開したいディレクトリ
npx http-server . -p 8080
```

## jwebserver (Java 18+)

```sh
cd サーバ公開したいディレクトリ
jwebserver --port 8080
```

ディレクトリを指定する場合は `--directory` オプションを使う。
