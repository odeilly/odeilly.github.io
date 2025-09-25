---
slug: powershell7_predictive_intellisense
date: 2025-09-25
tags:
  - Windows
  - PowerShell
categories:
  - 技術
draft: false
---

# PowerShell 7 の Predictive IntelliSense

PowerShell 7 から導入された **Predictive IntelliSense** は、コマンド入力の効率を大幅に高める機能です。入力中に薄いグレーの文字で予測候補を表示し、簡単なキー操作で補完できます。
**PowerShell 標準の機能（PSReadLine モジュール）** によるものです。

<!-- more -->

## 概要

- **機能名**: Predictive IntelliSense
- **提供元**: PowerShell 7 標準の `PSReadLine` モジュール
- **特徴**:
  - コマンド入力中に **履歴やプラグインから予測候補** を表示
  - 薄いグレー文字で補完候補をインライン表示
  - `→ (右矢印)` で候補を確定
  - ドロップダウン形式の候補リスト表示も可能

## 候補の出どころ

- **History**: これまでに入力したコマンド履歴
- **Plugin**: 追加プラグインからの提案
  - 例: `Az.Tools.Predictor` (Azure CLI ライクな補完を提供)

## 設定確認と変更

現在の設定を確認する:

```powershell
Get-PSReadLineOption
```

予測ソースを切り替える:

```powershell
# 履歴ベースのみ
Set-PSReadLineOption -PredictionSource History

# 履歴 + プラグイン
Set-PSReadLineOption -PredictionSource HistoryAndPlugin
```

表示スタイルを変更する:

```powershell
# インライン（グレーの薄字）
Set-PSReadLineOption -PredictionViewStyle InlineView

# 一覧形式（ドロップダウン）
Set-PSReadLineOption -PredictionViewStyle ListView
```

## 使い方の例

```powershell
# 入力中
java

# グレー文字で補完候補が表示される
java -version
```

`→ (右矢印)` を押すと `java -version` に確定されます。
