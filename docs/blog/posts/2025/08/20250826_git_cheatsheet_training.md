---
date: 2025-08-26
slug: git_cheatsheet
categories:
  - 技術
tags:
  - Git
draft: false
---

# Git 基礎チートシート

Git の基本コマンドをまとめたチートシートです。
**日常的に使う操作を中心に厳選**してあります。

<!-- more -->

## 1. リポジトリの準備

```bash
git init                  # 新しいリポジトリを作成
git clone URL             # 既存リポジトリを取得
```

## 2. 作業の流れ

1. 変更を確認

   ```bash
   git status
   ```

2. 変更をステージに追加

   ```bash
   git add <ファイル名>   # 指定ファイルを追加
   git add .              # 全ての変更を追加
   ```

3. コミットを作成

   ```bash
   git commit -m "変更内容を説明するメッセージ"
   ```

4. リモートに送信

   ```bash
   git push origin main
   ```


## 3. リモートから最新を取得

```bash
git pull origin main      # 取得してマージ
```

## 4. ブランチ操作

```bash
git branch                # ブランチ一覧
git switch -c feature     # 新規作成＆移動
git switch main           # mainブランチへ移動
git merge feature         # マージ
git branch -d feature     # 不要ブランチを削除
```

## 5. 履歴・差分の確認

```bash
git log --oneline --graph # 履歴を見やすく表示
git diff                  # 差分確認
```

## 6. 取り消し

```bash
git reset <file>          # ステージから外す
git checkout -- <file>    # 変更を破棄
git commit --amend        # コミットメッセージ修正
```

## 7. よくある操作の流れ（基本パターン）

1. `git pull origin main` （最新を取得）
2. 作業して `git add .`
3. `git commit -m "作業内容"`
4. `git push origin main`
