---
date:
  created: 2025-08-23
  updated: 2026-08-10
slug: win11_settings
categories:
  - 技術
tags:
  - Windows
draft: false
---

# Windows 11 の初期設定メモ

Windows 11 を使い始める際の備忘録です。

<!-- more -->

## ローカルアカウント作成方法

1. 初期セットアップ中に「Shift」＋「F10」キーを押してコマンドプロンプトを開く。
2. コマンドプロンプトで `start ms-cxh:localonly` と入力する。

!!! info "参考"
    - [「Windows 11」でローカルアカウント作成手段が利用不可に--別の回避策は残存](https://japan.zdnet.com/article/35231204/) (2025/4/1)
    - [Windows 11 初期設定⼿順 (愛媛大学総合情報メディアセンター)](https://www.cite.ehime-u.ac.jp/wp-content/uploads/docs/Windows11_FirstSettings_Bypass_2025.pdf) (2025/4/11)

## その他設定

### 外部サイト

- [デスクトップに PC とコントロールパネルのアイコンを表示させる](https://tanweb.net/2021/10/11/43178/)
- [プライバシー設定](https://tanweb.net/2022/06/01/46619/)
- [Microsoft の広告やおすすめ通知を画面に出さない設定](https://tanweb.net/2022/06/01/46643/)
- [高速スタートアップを無効にする](https://tanweb.net/2017/12/13/17198/)
- [ストレージセンサー](https://tanweb.net/2022/05/31/46577/)
- [外付け HDD や USB メモリを PC に接続したら自動でエクスプローラーが開くようにする](https://tanweb.net/2022/05/22/46256/)
- [Microsoft IMEをGoogle日本語入力並みに使えるようにする](https://tanweb.net/2015/12/16/5707/)
- [中央のタスクバーアイコンを左側に配置する](https://tanweb.net/2021/10/06/42995/)
- [タスクバーのアイコンを整理する](https://tanweb.net/2022/06/07/46688/)
- [スタートメニューの整理](https://tanweb.net/2022/07/02/46690/)
- [削除しても大丈夫な不要アプリ](https://tanweb.net/2022/07/02/47668/)
- [スタートメニューの「おすすめ」](https://tanweb.net/2022/09/27/49912/)
- [右クリックメニューを以前の旧仕様に戻す](https://tanweb.net/2021/11/19/44083/)
- [標準機能でタスクバーを結合しない「ラベル表示」](https://tanweb.net/2023/09/27/56726/)
- [ウィンドウを画面分割するマルチタスク機能を無効化](https://tanweb.net/2022/11/29/50624/)
- [Edge がバックグラウンドで動き続けてメモリを消費し続ける時の対処方法](https://tanweb.net/2023/11/10/57412/)
- [タスクバーの邪魔な「ウィジェット」を完全に無効化（削除）する](https://tanweb.net/2025/01/30/61946/)
- [エクスプローラー左上の「ギャラリー」を非表示にする](https://tanweb.net/2025/01/28/61847/)
- [スタートメニューの電源の隣に「設定」を追加表示する](https://tanweb.net/2021/11/04/43652/)
- [広くなったフォルダの項目間の余白を Windows 10 と同じ幅に調整する](https://tanweb.net/2021/10/08/43108/)
- [デフラグの設定](https://tanweb.net/2020/08/08/34464/)

### 休止状態を無効にする

休止状態が有効の場合、巨大な隠しファイルが自動的に作成され、ストレージを圧迫します。
特に使わないのであれば無効にするのが良いです。

休止状態を無効にするには、管理者権限でコマンドプロンプトまたは PowerShell を開いて、以下のコマンドを実行します。

```shell
powercfg /hibernate off
```

休止状態を無効にすると、高速スタートアップも無効になります。

!!! info "参考"
    - [Windows を実行しているコンピューター上で休止状態を無効にする方法および再度有効にする方法](https://learn.microsoft.com/ja-jp/troubleshoot/windows-client/setup-upgrade-and-drivers/disable-and-re-enable-hibernation)
    - [【Windows】　休止状態というゴミ機能　無効化](https://moguttyo55.blog.fc2.com/blog-entry-2560.html)
