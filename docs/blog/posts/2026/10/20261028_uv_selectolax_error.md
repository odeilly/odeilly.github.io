---
slug: uv-selectolax-error
date:
  created: 2026-10-28
  updated: 2026-10-28
tags:
  - Python
  - uv
  - MkDocs
  - Error
categories:
  - Tips
draft: false
---

# uv で selectolax のアーキテクチャ不一致が発生したときの対処

macOS（Apple Silicon）で `uv` を使って MkDocs を起動した際に、`selectolax` のアーキテクチャ不一致エラーが発生しました。
原因の切り分けから、uv のキャッシュ削除と再インストールによる復旧までの手順をまとめます。

<!-- more -->

## 1. 発生した問題

macOS（Apple Silicon）で、`uv` を使って管理している MkDocs プロジェクトを起動したところ、`selectolax` のアーキテクチャ不一致エラーが発生した。

```bash
uv run mkdocs serve --dirty
```

実行すると、次のエラーが表示された。

```text
ImportError: dlopen(.../selectolax/lexbor.cpython-313-darwin.so, 0x0002):
mach-o file, but is an incompatible architecture
(have 'x86_64', need 'arm64')
```

`selectolax` のネイティブ拡張モジュールが Intel Mac 用の `x86_64` である一方、実行環境は Apple Silicon 用の `arm64` だった。

このため、MkDocs のプラグイン `mkdocs-glightbox` が `selectolax` を読み込む際に失敗し、起動できなくなった。

## 2. 実行環境の確認

まず、Python と `uv` の実行環境を確認した。

```bash
uname -m
which uv
uv --version
```

Python の情報も確認した。

```bash
.venv/bin/python -c \
  "import platform, sysconfig, sys; print('machine:', platform.machine()); print('platform:', sysconfig.get_platform()); print('executable:', sys.executable); print('version:', sys.version)"
```

確認結果は次のとおりだった。

- Mac のアーキテクチャ：`arm64`
- `uv`：`0.12.13`
- Python：`3.13.7`
- Python の `platform.machine()`：`arm64`
- Python の `sysconfig.get_platform()`：`macosx-10.13-universal2`

Python 自体は ARM64 で動作していたため、Python のアーキテクチャが直接の原因ではなかった。

## 3. selectolax のバイナリを確認する

問題のファイルがどのアーキテクチャ向けなのかを、`file` コマンドで確認した。

```bash
file .venv/lib/python3.13/site-packages/selectolax/lexbor.cpython-313-darwin.so
```

最初は次のように表示された。

```text
Mach-O 64-bit bundle x86_64
```

Intel Mac 用のバイナリがインストールされていることが分かった。

一方、`selectolax` を手動で再インストールすると、ARM64 用のバイナリに置き換わり、import も成功した。

```bash
uv pip install --python .venv/bin/python \
  --no-cache --reinstall selectolax==1.0.0
```

```bash
.venv/bin/python -c \
  "import selectolax.lexbor; print('selectolax OK')"
```

この時点では、次のように正常に動作した。

```text
selectolax OK
```

バイナリも `arm64` になっていた。

## 4. uv のキャッシュを削除する

手動で修復した後も、通常の `uv run` を実行すると、再び Intel 用のバイナリがインストールされる問題が発生した。

詳細ログを確認すると、次のメッセージが見つかった。

```text
Platform tags mismatch for selectolax==1.0.0:
The distribution is compatible with macOS
(macosx_11_0_arm64), but you're on macOS
(macosx_26_0_x86_64)
```

`uv` がプラットフォームを `x86_64` と判定し、ARM64 用のインストール済みバイナリを不適合と判断していた。

そこで、`selectolax` に関するキャッシュを削除し、再インストールすることにした。

まず、キャッシュの保存先を確認した。

```bash
uv cache dir
```

今回の環境では、次のディレクトリだった。

```text
$HOME/.cache/uv
```

続いて、`selectolax` のキャッシュを削除した。

```bash
uv cache clean selectolax
```

実行結果：

```text
Removed 24 files (6.9MiB)
```

その後、`selectolax` を再インストールした。

```bash
uv sync --reinstall-package selectolax
```

実行結果：

```text
Resolved 38 packages in 9ms
Prepared 3 packages in 447ms
Uninstalled 3 packages in 18ms
Installed 3 packages in 6ms
~ pyyaml==6.0.2
~ selectolax==1.0.0
~ watchdog==6.0.0
```

再びバイナリを確認すると、ARM64 用になっていた。

```bash
file .venv/lib/python3.13/site-packages/selectolax/lexbor.cpython-313-darwin.so
```

```text
Mach-O 64-bit bundle arm64
```

## 5. MkDocs の起動確認

最後に、通常の起動コマンドを実行した。

```bash
uv run mkdocs serve --dirty
```

今度は正常に起動し、ドキュメントのビルドも成功した。

```text
INFO - Documentation built in 3.42 seconds
INFO - [22:14:39] Watching paths for changes: 'docs', 'mkdocs.yml'
INFO - [22:14:39] Serving on http://127.0.0.1:8000/
```

`--no-sync` を指定しなくても起動できるようになった。

## 6. 再発した場合の対処

同じアーキテクチャ不一致が再発した場合は、次の手順で復旧できる。

```bash
uv cache clean selectolax
uv sync --reinstall-package selectolax
uv run mkdocs serve --dirty
```

ただし、今回の調査だけでは、なぜ Intel 用のバイナリがキャッシュに入っていたのか、その根本原因までは特定できていない。

## 7. まとめ

今回の問題では、次のことを確認できた。

- Python 自体は ARM64 で動作していた。
- `selectolax` のネイティブ拡張モジュールが Intel 用の `x86_64` になっていた。
- `uv cache clean selectolax` で関連キャッシュを削除した。
- `uv sync --reinstall-package selectolax` で再インストールしたところ、ARM64 用のバイナリになった。
- その後、通常の `uv run mkdocs serve --dirty` で正常に起動できた。

今回の対応では、`pyproject.toml` や `uv.lock` の変更は必要なかった。依存関係の定義を変更する前に、キャッシュとインストール済みバイナリのアーキテクチャを確認することが有効だった。
