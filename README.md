# MkDocs

## パッケージインストール

まず [uv](https://docs.astral.sh/uv/getting-started/installation/) をインストールします。
その後、リポジトリのルートで次を実行します。

```sh
uv sync
```

`.venv` が作成され、`uv.lock` に記載されたパッケージがインストールされます。

## MkDocs の実行

```sh
uv run mkdocs serve
uv run mkdocs build
```

## パッケージの追加

```sh
uv add <パッケージ名>
```

## 参考

- [ブログとしてMkDocsを使う](https://be-hase.com/blog/article/2022/04/blog_using_mkdocs/)
  - [MkDocs Blogging Plugin](https://liang2kl.github.io/mkdocs-blogging-plugin/)
