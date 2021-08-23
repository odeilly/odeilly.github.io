# Sphinx

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
