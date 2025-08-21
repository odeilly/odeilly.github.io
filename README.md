# MkDocs

## パッケージインストール

### Linux / Mac など

```sh
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
```

### Windows

```sh
python3 -m venv venv
venv\Scripts\activate
pip3 install -r requirements.txt
```

## インストール済みパッケージを requirements.txt に保存

```sh
pip3 freeze > requirements.txt
```

## 参考

- [ブログとしてMkDocsを使う](https://be-hase.com/blog/article/2022/04/blog_using_mkdocs/)
  - [MkDocs Blogging Plugin](https://liang2kl.github.io/mkdocs-blogging-plugin/)
