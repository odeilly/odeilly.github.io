---
date: 2025-08-31
slug: shell_substring
categories:
  - 技術
tags:
  - Shell
draft: false
---

# シェルスクリプトで部分文字列を取得する方法

シェルスクリプト（bash想定）で文字列から部分文字列を取得する方法を紹介します。
用途や環境に応じて使い分けると便利です。

<!-- more -->

## 1. パラメータ展開（推奨）

bash でよく使う方法です。

``` bash
str="HelloWorld"
# 先頭から5文字を取得
echo "${str:0:5}"   # Hello

# 3文字目から4文字取得（インデックスは0始まり）
echo "${str:2:4}"   # lloW
```

- `${変数:開始位置:長さ}` の形で指定できます。
- 開始位置は 0 から始まります。
- 長さを省略すると「末尾まで」になります。

## 2. `cut` コマンドを使う

ファイル処理っぽく使いたい場合に便利です。

``` bash
str="HelloWorld"
echo "$str" | cut -c1-5   # Hello
echo "$str" | cut -c3-6   # lloW
```

- `-c1-5` は「1文字目から5文字目まで」。

## 3. `expr substr` を使う

古い方法ですが、POSIX互換シェルで使えます。

``` bash
str="HelloWorld"
expr substr "$str" 1 5   # Hello
expr substr "$str" 3 4   # lloW
```

- 開始位置は 1 始まり。
- 最後の引数は「長さ」です。

## 4. 正規表現で `grep` / `sed`

パターンに基づいて取りたい場合。

``` bash
str="HelloWorld"
echo "$str" | grep -oE '^.....'   # Hello
echo "$str" | sed -E 's/^(.{2})(.{4}).*/\2/'   # lloW
```

## まとめ

- **シンプルに部分文字列を取る** → `${var:start:length}`
- **ファイル処理風に文字数指定** → `cut`
- **古い環境やPOSIX準拠が必要** → `expr substr`
- **パターン抽出** → `grep` / `sed`
