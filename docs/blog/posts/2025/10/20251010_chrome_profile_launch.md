---
slug: chrome_profile_launch
date: 2025-10-10
categories:
  - Tips
tags:
  - Google Chrome
  - Windows
---

# Google Chromeでプロファイルフォルダを指定して起動する方法

Google Chrome は、コマンドラインオプション `--user-data-dir` を使うことで、
起動時に任意のユーザープロファイルフォルダを指定できます。
複数環境（仕事用・個人用など）を使い分けたい場合に便利です。

<!-- more -->

## 方法1：コマンドラインから起動（Windows）

1. **Chrome の実行ファイルのパスを確認**

   通常は次のいずれかにあります：

   ```text
   "C:\Program Files\Google\Chrome\Application\chrome.exe"
   ```

   または（64bit OS で 32bit Chrome の場合）：

   ```text
   "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
   ```

2. **起動コマンドの例**

   ```bash
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir="D:\ChromeProfiles\DevProfile"
   ```

   - `--user-data-dir=` に続けて、使用したいプロファイルフォルダの絶対パスを指定します。
   - そのフォルダが存在しない場合、Chrome が自動的に新規プロファイルを作成します。

3. **複数プロファイルを使う場合の例**

   ```bash
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir="D:\ChromeProfiles\Work"
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir="D:\ChromeProfiles\Personal"
   ```

## 方法2：ショートカットを作成しておく

1. デスクトップで右クリック → 新規作成 > ショートカット
2. 項目の場所に次を入力：

   ```text
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir="D:\ChromeProfiles\Work"
   ```

3. 名前を「Chrome (Work)」などにして作成
4. 以後はそのショートカットをダブルクリックするだけで指定プロファイルで起動できます。

## 補足オプション

| オプション | 説明 |
|-------------|------|
| `--profile-directory="Profile 2"` | Chrome の「User Data」フォルダ内のサブフォルダを指定できます。例：<br>`--user-data-dir="C:\Users\<ユーザー>\AppData\Local\Google\Chrome\User Data" --profile-directory="Profile 2"` |
| `--no-first-run` | 初回起動時のウェルカム画面をスキップします。 |
| `--incognito` | 常にシークレットモードで起動します。 |

## 既存のプロファイルを開く例

既に通常の Chrome プロファイルが
`C:\Users\<ユーザー>\AppData\Local\Google\Chrome\User Data\Profile 2`
にある場合：

```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" ^
  --user-data-dir="C:\Users\<ユーザー>\AppData\Local\Google\Chrome\User Data" ^
  --profile-directory="Profile 2"
```

これで、特定の既存プロファイルで Chrome を直接起動できます。

## まとめ

- `--user-data-dir`：プロファイルフォルダを指定
- `--profile-directory`：同フォルダ内のサブプロファイルを指定
- ショートカットやバッチ化で簡単起動が可能

複数の作業環境を整理したい場合に非常に便利な方法です。
たとえば「仕事用」「テスト用」「ブログ用」などを分けて運用できます。
