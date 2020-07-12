=================
 Pelicanのテーマ
=================

:slug: pelican-theme
:date: 2020-07-12
:tags: Pelican

Pelicanのテーマを導入します.
このブログでは,
`Nice Blog <https://github.com/guilherme-toti/nice-blog>`__
を導入しています.

Nice Blog のダウンロード
========================

Nice Blog は GitHub で提供されています.
任意のディレクトリに,
``git clone`` で, ローカルリポジトリとして取り込みます.

.. code-block:: none

   git clone https://github.com/guilherme-toti/nice-blog.git

VodyBootstrapのインストール
===========================

ダウンロードした Nice Blog テーマを,
``pelican-themes`` コマンドでインストールします.

https://docs.getpelican.com/en/stable/pelican-themes.html

.. code-block:: none

   pelican-themes -i /foo/bar/voidy-bootstrap

``pelican-themes`` コマンドで, インストールされたテーマが表示されます.

.. code-block:: none

   $ pelican-themes
   nice-blog
   notmyidea
   simple
