---
slug: mkdocs-tips
date:
  created: 2026-10-14
  updated: 2026-10-29
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

### dirty

`--dirty` オプションで起動すると、
リアルタイムで更新されるページが変更があったページのみになります。
リロードの時間短くなるので、ページ数の多いドキュメントを作成する場合に有用です。

```shell
mkdocs serve --dirty
```

## Material for MkDocs アイコンの使い方

### 利用可能なアイコンセット

Material for MkDocs には以下のアイコンセットが標準で含まれている。

- Material Design Icons (`material-`)
- Font Awesome (`fontawesome-`)
- Octicons (`octicons-`)
- Simple Icons (`simple-`)

### アイコン検索

公式のアイコン検索ページで利用可能なアイコンを確認できる。

<https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/>

キーワードを入力するとショートコードを検索できる。

例:

```markdown
:material-home:
:material-account:
:octicons-book-24:
:fontawesome-solid-house:
```

### アイコン名のルール

SVG ファイル:

```text
.icons/material/account-circle.svg
```

↓

Markdown:

```markdown
:material-account-circle:
```

スラッシュ (`/`) をハイフン (`-`) に置き換える。

### Octicons の注意点

Octicons は Material Design Icons とアイコン名が異なる。

例えば以下は利用できる。

```markdown
:octicons-check-24:
:octicons-check-circle-24:
:octicons-checklist-24:
:octicons-book-24:
:octicons-code-24:
```

以下は存在しない可能性がある。

```markdown
:octicons-checkbox-fill-24:
```

アイコンが存在しない場合は、

- アイコンが表示されない
- ショートコードがそのまま表示される

などの現象が発生する。

### mkdocs.yml での利用

ロゴに Material Design Icon を使用する例:

```yaml
theme:
  icon:
    logo: material/school
```

ロゴに Octicons を使用する例:

```yaml
theme:
  icon:
    logo: octicons/mortar-board-24
```
