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

原因は **VS Code の Webview / Service Worker のキャッシュ破損** でした。
拡張機能そのものの問題というより、VS Code 側のキャッシュ状態が壊れていたようです。

## 対処方法

Windows では、VS Code を完全に終了したうえで、以下のキャッシュを削除しました。

- `%APPDATA%\Code\Service Worker`
- `%APPDATA%\Code\Cache`
- `%APPDATA%\Code\CachedData`
- `%APPDATA%\Code\Code Cache`

その後、VS Code を再起動したところ、エラーは解消しました。

## まとめ

今回のケースでは、**Webview / キャッシュの削除で解決**できました。
同じようなエラーが出た場合は、まず VS Code のキャッシュを疑ってみるとよさそうです。
