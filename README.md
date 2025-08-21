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
