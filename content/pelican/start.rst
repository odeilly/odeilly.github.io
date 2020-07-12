===============
 Pelicanの導入
===============

:slug: start-pelican
:date: 2020-07-12
:tags: Pelican

Pelicanを導入しました.

環境設定
========

GitHub Pages
------------

GitHubリポジトリを準備します.
username.github.jo というパブリックリポジトリとします.
このブログの場合は, odeilly.github.io です.


ソフトウェアのインストール
--------------------------

ローカルマシンにソフトウェアをインストールしていきます.
インストールするソフトウェアとバージョンは以下の通りです.

.. list-table::
   :header-rows: 1

   * - ソフトウェア
     - バージョン
   * - Python
     - 3.8.3
   * - pelican
     - 4.2.0
   * - Markdown
     - 3.1.1
   * - ghp-import
     - 0.5.5

#. Pythonをインストールします.
   パスを通すようにして下さい.

#. Pelicanをインストールします.
   Markdownで編集できるように, Markdownオプションを付けます.

   .. code-block:: none

      pip install pelican Markdown

#. ghp-import をインストールします.
   GitHub Pages のアップロードが楽になります.

   .. code-block:: none

      pip install ghp-import


ローカルにサイトを構築
======================

適当なディレクトリを作り,
作ったディレクトリに移動して
``pelican-quickstart`` コマンドを実行します.
いろいろ質問があるので, 答えていきます.

.. code-block:: none

   $ pelican-quickstart
   Welcome to pelican-quickstart v4.2.0.
    
   This script will help you create a new Pelican-based website.
    
   Please answer the following questions so this script can generate the files
   needed by Pelican.
    
    
   > Where do you want to create your new web site? [.]
   > What will be the title of this web site? Odeilly's Note
   > Who will be the author of this web site? Odeilly
   > What will be the default language of this web site? [Japanese] ja
   > Do you want to specify a URL prefix? e.g., https://example.com   (Y/n) https://odeilly.github.io
   You must answer 'yes' or 'no'
   > Do you want to specify a URL prefix? e.g., https://example.com   (Y/n) Y
   > What is your URL prefix? (see above example; no trailing slash) https://odeilly.github.io
   > Do you want to enable article pagination? (Y/n) Y
   > How many articles per page do you want? [10] 10
   > What is your time zone? [Europe/Paris] Asia/Tokyo
   > Do you want to generate a tasks.py/Makefile to automate generation and publishing? (Y/n) Y
   > Do you want to upload your website using FTP? (y/N) N
   > Do you want to upload your website using SSH? (y/N) N
   > Do you want to upload your website using Dropbox? (y/N) N
   > Do you want to upload your website using S3? (y/N) N
   > Do you want to upload your website using Rackspace Cloud Files? (y/N) N
   > Do you want to upload your website using GitHub Pages? (y/N) y
   > Is this your personal page (username.github.io)? (y/N) y
   Done. Your new project is available at /foo/bar

これで, 記事を書いていく準備ができました.
conent ディレクトリの配下に Markdown または reStructruedText 形式で記事を書きます.
``make html`` コマンドで, HTMLに変換され output ディレクトリに出力されます.

.. code-block:: none

   make html

``make serve`` コマンドによりローカルサーバが起動します.
ブラウザで http://localhost:8000 にアクセスすると, 記事が表示されます.

.. code-block:: none

   make serve

``make publish`` コマンドで, GitHub Pages 用のHTMLに変更されます.

.. code-block:: none

   make serve

``make github`` コマンドで, outout ディレクトリのファイルが,
GitHub Pages の master ブランチにアップロード (プッシュ)されます.

.. code-block:: none

   make github
