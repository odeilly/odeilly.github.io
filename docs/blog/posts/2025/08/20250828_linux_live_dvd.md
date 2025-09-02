---
date: 2025-08-28
slug: linux_live_dvd
categories:
  - 技術
tags:
  - Linux
  - Debian
  - Knoppix
draft: false
---

# Debian/Knoppix Live DVDとレスキュー用途まとめ

<!-- more -->

## 1. DebianはDVD起動できるか

- DebianはDVDから起動（ブート）可能。
- [公式サイト](https://www.debian.or.jp/)で「DVDイメージ」が配布されている。
- ネットワークなしでもインストール可能で、大容量パッケージを収録。
- 現在はUSBブートが主流だが、DVD起動もサポート。

## 2. インストールせずDVDで使う（Liveモード）

- Debianには「[Live DVDイメージ](https://www.debian.org/CD/live/index.en.html)」があり、インストールせずに起動可能。
- KnoppixのようにDVDから直接デスクトップ環境を試せる。
- デスクトップ環境はGNOME、KDE、Xfce、LXDE、Cinnamon、MATEなど。

!!! warning "注意"
    - Knoppixほどレスキュー機能が豊富ではない。
    - 設定やデータは再起動で消える（永続化はUSBが必要）。

## 3. レスキュー用途での利用

- Debian Live DVDやインストーラの「Rescueモード」で修復可能。
- ただしKnoppixに比べレスキュー特化ツールは少ない。

## 4. Knoppixでモニタ認識できない場合の代替

- **SystemRescue**：新しいカーネルでハード対応が強い。
- **Rescatux**：ブート修復に特化。
- **Ubuntu Live**：新しいハード認識に強い。
- **Debian Live**：保守的で古い環境に安定。

## 5. ddコマンドによるゼロ埋め

どのLive環境でも `dd` が使えればゼロ埋め可能。

```bash
sudo dd if=/dev/zero of=/dev/sdX bs=1M status=progress
```

- `if=/dev/zero` : 入力はゼロデータ
- `of=/dev/sdX` : 出力先ディスク
- `bs=1M` : 1MB単位で書き込み
- `status=progress` : 進行状況表示

!!! warning "注意"
    注意: 実行すると対象ディスクは完全消去され復旧不可。

## 6. 古いモニタでの利用

- 新しいドライバが逆に不具合を出す場合がある。
- 起動オプション例:
    - `nomodeset` → ドライバ無効化してVESAで表示
    - `vga=normal` → 標準VGAモード
- コンソールのみで作業するならモニタの相性問題は軽減される。

## 7. Knoppixのコンソール起動

- ブートプロンプトで次を入力：

  ```text
  knoppix 2
  ```

- ランレベル2で起動 → コンソール専用モード。

- 追加オプション：
  - `knoppix vga=normal` : 標準VGA
  - `knoppix nomodeset` : ドライバ無効化
  - `knoppix no3d` : 3Dアクセラレーション無効化

---

## まとめ

- DebianもDVD起動＆Live利用可能。
- レスキュー用途ならSystemRescueやRescatuxも有力。
- **ddによるゼロ埋めはどのLive環境でも可能**。
- 古いモニタ環境では`nomodeset`やコンソール起動が有効。
- Knoppixも「knoppix 2」でコンソール起動できる。
