---
date: 2025-08-26
slug: python_venv_summary
categories:
  - 技術
tags:
  - Python
draft: false
---

# Python 仮想環境 （venv） まとめ

Python の仮想環境（venv）を使えば、プロジェクトごとに独立した環境を作り、ライブラリの競合を防げます。
この記事では、`venv` の基本から作成・有効化・パッケージ管理までをシンプルに解説します。

<!-- more -->

## 1. 仮想環境とは？

- **仮想環境**とは、プロジェクトごとに独立した Python 実行環境を作成できる仕組み。
- 目的:
    - 他プロジェクトと依存ライブラリのバージョンが衝突しないようにする。
    - システム全体に影響を与えずにパッケージを管理できる。
- 例:
    - プロジェクトA → Django 3.2
    - プロジェクトB → Django 4.0
    - それぞれを独立した環境で利用可能。

## 2. venv の作成

```bash
# 任意のフォルダに移動して
python -m venv venv
```

- `python -m venv venv` の最後の `venv` は環境名（任意）。
- 実行すると以下のディレクトリが作成される：

    ```text
    venv/
    ├─ bin/ (Linux/Mac)
    ├─ Scripts/ (Windows)
    ├─ lib/
    ├─ pyvenv.cfg
    ```

## 3. 仮想環境の有効化・無効化

### 有効化

- **Windows (PowerShell):**

    ```powershell
    .\venv\Scripts\Activate.ps1
    ```

- **Windows (cmd):**

    ```cmd
    venv\Scripts\activate.bat
    ```

- **Linux / Mac:**

    ```bash
    source venv/bin/activate
    ```

有効化されると、プロンプトに `(venv)` などの環境名が表示される。

### 無効化

```bash
deactivate
```

## 4. パッケージ管理

### インストール

```bash
pip install requests
```

### 確認

```bash
pip list
```

### requirements.txt に保存

```bash
pip freeze > requirements.txt
```

### requirements.txt から再現

```bash
pip install -r requirements.txt
```

## 5. よくある活用方法

- **プロジェクトごとの環境切り分け**
    - Webアプリ開発、データ分析、機械学習などで別々の環境を作る。
- **他人や別環境への共有**
    - `requirements.txt` を GitHub にコミット → 他人が同じ環境を再現可能。

## 6. 注意点

- グローバル環境でインストールしたライブラリは `venv` に影響しない。

    （必要なら仮想環境ごとに再インストールする）

- Python 本体のバージョンは、作成時に指定したものが使われる。

- `venv` は軽量で標準ライブラリに含まれているため追加インストール不要。

## 7. よく使うコマンドまとめ

```text
# 仮想環境の作成
python -m venv venv

# 有効化（Linux/Mac）
source venv/bin/activate

# 有効化（Windows PowerShell）
.\venv\Scripts\Activate.ps1

# 無効化
deactivate

# パッケージのインストール
pip install ライブラリ名

# インストール済みパッケージ一覧
pip list

# 環境を requirements.txt に保存
pip freeze > requirements.txt

# requirements.txt から環境を復元
pip install -r requirements.txt
```
