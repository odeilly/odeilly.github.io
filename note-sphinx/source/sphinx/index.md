# Sphinx

[Sphinx ドキュメント](https://www.sphinx-doc.org/ja/master/contents.html)

## インストール

### Sphinx のインストール

```sh
pip install sphinx
pip install Pillow
```

### テーマのインストール

#### Read the Docs Sphinx Theme

<https://github.com/readthedocs/sphinx_rtd_theme>

```sh
pip install sphinx-rtd-theme
```

conf.py の設定

```py
html_theme = "sphinx_rtd_theme"
```

### Markdown を使う

参考：[Markdown](https://www.sphinx-doc.org/ja/master/usage/markdown.html)

```sh
pip install myst-parser
```

conf.py の設定

```py
extensions = ['myst_parser']
```

```py
source_suffix = {
    '.rst': 'restructuredtext',
    '.md': 'markdown',
}
```

## アップデート

### pip のアップデート

```sh
pip install --upgrade pip
```

または

```sh
python -m pip install --upgrade pip
```

### 新しいバージョンの有無のチェック

```sh
pip list --outdated
```

以下のように表示されます。

```text
Package    Version Latest Type
---------- ------- ------ -----
docutils   0.16    0.17.1 wheel
setuptools 56.0.0  57.4.0 wheel
```

### ライブラリの更新

```sh
pip install --upgrade <<ライブラリ名>>
```

または

```sh
python -m pip install --upgrade <<ライブラリ名>>
```
