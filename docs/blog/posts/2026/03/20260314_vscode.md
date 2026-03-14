---
slug: vscode_settings
date: 2026-03-14
tags:
  - VSCode
categories:
  - Tips
draft: false
---

# VSCode の設定備忘録

## 概要

VSCode を使用する際の設定の備忘録です。

<!-- more -->

## settings.json

```json
{
    "editor.minimap.enabled": false, // ミニマップを非表示
    "workbench.colorTheme": "Default Light+", // カラーテーマをデフォルトのライトテーマに設定
    "workbench.activityBar.location": "top", // アクティビティバーを上部に配置
    "explorer.compactFolders": false, // フォルダをコンパクト表示しない
    "editor.renderWhitespace": "all", // 空白文字をすべて表示
}
```

## keybindings.json (Mac)

```json
[
    {
        "key": "cmd+k b",
        "command": "workbench.action.toggleSidebarVisibility"
    }, // サイドバーの表示/非表示を切り替える
    {
        "key": "cmd+k t",
        "command": "workbench.action.terminal.toggleTerminal"
    } // ターミナルの表示/非表示を切り替える
]
```
