---
slug: vscode_webview_error_fixed
date: 2026-10-19
tags:
  - VSCode
  - Error
categories:
  - Tips
draft: false
---

# VS Code の Webview エラー対処メモ

VS Code の Webview エラーに関する対処メモです。

<!-- more -->

## 発生したエラー

`Error loading webview provided by 'shd101wyy.markdown-preview-enhanced': Error: Could not register service worker: InvalidStateError: Failed to register a ServiceWorker: The document is in an invalid state.`

## 原因

VS Code の **Webview / Service Worker のキャッシュ破損** が原因の可能性が高いです。
Markdown Preview Enhanced の不具合というより、VS Code 側の状態異常で発生します。

## 対処方法

### 1. VS Code を完全に終了する

ウィンドウを閉じるだけでなく、バックグラウンドの `Code` プロセスも終了します。

### 2. キャッシュを削除する

Windows では以下のフォルダの中身を削除します。

- `%APPDATA%\Code\Service Worker`
- `%APPDATA%\Code\Cache`
- `%APPDATA%\Code\CachedData`
- `%APPDATA%\Code\Code Cache`

※ フォルダごと削除しても、VS Code が自動で再作成します。

### 3. VS Code を再起動する

再度 VS Code を起動し、Markdown Preview Enhanced を開きます。

## 補足

- `Developer: Reload Window` でも直る場合があります。
- 再発する場合は、VS Code の更新や拡張機能の競合も確認するとよいです。

## 今回の結果

**Webview / キャッシュの削除で解消した。**
