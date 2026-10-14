---
slug: mkdocs-tips
date: 2026-10-14
tags:
  - MkDocs
categories:
  - Tips
draft: false
---

# MkDocs Tips

MkDocs に関するあれこれ。

<!-- more -->

## mkdocs serve

`mkdocs serve` コマンドは、ローカルで Web サーバを起動して、
ドキュメントをリアルタイムで更新して確認することが可能です。
デフォルトでは、<http://localhost:8000/> でブラウザに表示することができます。

詳しい使い方は、

```shell
mkdocs serve -h
```

で確認できます。

### ポートの指定

`-a` オプションでポートを指定することができます。
例えば、ポートを 9000 にする場合は以下のコマンドになります。

```shell
mkdocs serve -a localhost:9000
```

### dirtyreload

`--dirtyreload` オプションで起動すると、
リアルタイムで更新されるページが変更があったページのみになります。
リロードの時間短くなるので、ページ数の多いドキュメントを作成する場合に有用です。

```shell
mkdocs serve --dirtyreload
```
