---
slug: zip_command
date: 2025-09-11
categories:
  - 技術
tags:
  - Shell
draft: false
---

# zip コマンドの使い方 （複数ディレクトリをまとめる）

`zip` コマンドについての備忘録です。

<!-- more -->

`zip` コマンドで複数のディレクトリをまとめるのは簡単です。
基本の構文はこちらです：

``` bash
zip -r アーカイブ名.zip ディレクトリ1 ディレクトリ2 ...
```

<!-- more -->

## 例

### 1. 複数ディレクトリをまとめる

`dir1` と `dir2` をまとめて `archive.zip` を作る場合:

``` bash
zip -r archive.zip dir1 dir2
```

### 2. 隠しファイルや不要ファイルを除外する

``` bash
zip -r archive.zip dir1 dir2 -x "*.DS_Store"
```

（`-x` は除外パターン。上記は macOS の `.DS_Store` を除外する例）

### 3. ディレクトリの中身だけを zip に入れる

パスを保存せず、中身だけを zip に入れたいとき:

``` bash
cd dir1
zip -r ../archive.zip ./*
```

### 4. ディレクトリとファイルを同時にまとめる

複数ディレクトリ＋ファイルを同時にまとめることも可能:

``` bash
zip -r archive.zip dir1 dir2 file1.txt file2.md
```

## よく使うオプション

- `-r` : 再帰的にディレクトリを辿る（必須）
- `-x PATTERN` : 除外パターン指定
- `-q` : 進捗を表示しない（quiet）
- `-9` : 最大圧縮
