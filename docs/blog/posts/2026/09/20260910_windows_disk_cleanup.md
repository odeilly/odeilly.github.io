---
slug: windows-disk-cleanup
date: 2026-09-10
tags:
  - Windows
categories:
  - Tips
draft: false
---

# Azure Windows 11 VM のディスククリーンアップについて

Azure 上の Windows 11 VM では、ディスククリーンアップ (`cleanmgr.exe`) が長時間進まないように見えることがあります。

特に以下の処理で発生しやすいです。

- Windows Update のクリーンアップ
- WinSxS（コンポーネントストア）の整理
- 一時ファイルの削除
- Windows Defender によるスキャン

また、Azure Bastion 経由で接続している場合、画面上では処理が停止したように見えても、バックグラウンドでは削除処理が継続していることがあります。

<!-- more -->

## 使用環境

- Azure VM
- VM サイズ: Standard D2ads v5
  - 2 vCPU
  - 8 GiB Memory
- 接続方式: Azure Bastion

CPU やメモリのスペックから考えると、処理遅延の主因は CPU 不足ではなく、Windows Update や WinSxS のクリーンアップ処理である可能性が高い。

## Alt キーでキャンセルされるか？

### 結論

Alt キー単独でディスククリーンアップがキャンセルされる仕様はない。

#### 考えられるケース

- Alt + F4 が送信された
- Bastion のキー送信で予期しない操作になった
- ウィンドウだけ閉じた
- 実際には削除処理の一部が完了していた

そのため、

```text
Alt を押した
↓
画面が閉じた
↓
再度実行すると空き容量が増えていた
```

という現象は十分あり得る。

## なぜ空き容量が増えるのか

ディスククリーンアップは処理途中で終了しても、

- 削除済みのファイル
- 完了済みの WinSxS 整理

は元に戻らない。

例えば、

```text
削除予定: 10GB

7GB削除完了
↓
途中で終了
↓
空き容量は 7GB増加
```

となる。

そのため、

「キャンセルしたのに空き容量が増えている」

のは異常ではない。

## cleanmgr.exe と DISM の違い

### cleanmgr.exe

Windows 標準の総合クリーンアップツール。

対象例：

- 一時ファイル
- ごみ箱
- サムネイルキャッシュ
- 配信の最適化ファイル
- Windows Update クリーンアップ
- エラーダンプ

イメージ：

```text
cleanmgr
 ├─ 一時ファイル
 ├─ ごみ箱
 ├─ ログ
 ├─ ダンプ
 └─ Windows Update クリーンアップ
```

### DISM

コンポーネントストア（WinSxS）専用のメンテナンスツール。

実行例：

```cmd
DISM /Online /Cleanup-Image /StartComponentCleanup
```

対象：

```text
C:\Windows\WinSxS
```

イメージ：

```text
DISM
 └─ WinSxS整理専用
```

## システムファイルのクリーンアップとは

ディスククリーンアップ画面の

```text
システム ファイルのクリーンアップ
```

を押すと管理者権限で再スキャンが行われる。

追加表示される代表項目：

- Windows Update のクリーンアップ
- デバイスドライバーパッケージ
- システムエラーダンプ
- 配信の最適化ファイル
- Windows.old

つまり、

```text
通常モード
↓
ユーザー領域のみ

システムファイルのクリーンアップ
↓
OS管理領域も対象
```

という違いがある。

## Azure VM で推奨する方法

まず状態確認。

```cmd
DISM /Online /Cleanup-Image /AnalyzeComponentStore
```

結果例：

```text
Component Store Cleanup Recommended : Yes
```

であれば、

```cmd
DISM /Online /Cleanup-Image /StartComponentCleanup
```

を実行する。

## システム健全性確認

```cmd
DISM /Online /Cleanup-Image /RestoreHealth
```

続いて

```cmd
sfc /scannow
```

を実行する。

## さらに削減したい場合

```cmd
DISM /Online /Cleanup-Image /StartComponentCleanup /ResetBase
```

効果：

- WinSxS をさらに削減

注意点：

- 過去の Windows Update をアンインストールできなくなる

検証環境や長期運用 VM で利用されることがある。

## 実運用での推奨手順

```cmd
DISM /Online /Cleanup-Image /AnalyzeComponentStore

DISM /Online /Cleanup-Image /RestoreHealth

sfc /scannow

DISM /Online /Cleanup-Image /StartComponentCleanup
```

最後に必要であれば、

```cmd
cleanmgr /verylowdisk
```

を実行する。

Azure VM では `cleanmgr.exe` よりも、まず `DISM` によるコンポーネントストア整理を実施する方が安定していることが多い。
