====================================
 pelican-bootstrap3テーマを導入する
====================================

:date: 2020-07-13
:slug: pelican-bootstrap3
:tags: Pelican
:summary: pelican-bootstrap3テーマのインストールメモです.

https://github.com/getpelican/pelican-themes/tree/master/pelican-bootstrap3


ダウンロード
============

pelican-themesのダウンロード
----------------------------

pelican-themes の中の1つとして,
GitHub で管理されています.
したがって, ``git clone`` で取得します.

.. code-block:: none

   git clone https://github.com/getpelican/pelican-themes.git

pelican-pluginsのダウンロード

pelican-themesには, pelican-pluginsが必要となります.
こちらも, GitHubで管理されていますので,
``git clone`` で取得します.

.. code-block:: none

   git clone https://github.com/getpelican/pelican-plugins.git

インストール
============

pelican-themesのインストール
----------------------------

``pelican-themes`` コマンドでインストールします.

.. code-block:: none

   pelican-themes -i /foo/bar/git/pelican-themes/pelican-bootstrap3


pelicanconf.py設定
==================

.. code-block:: python

   THEME = 'pelican-bootstrap3'
   JINJA_ENVIRONMENT = {'extensions': ['jinja2.ext.i18n']}
   PLUGIN_PATHS = ['/foo/bar/git/pelican-plugins']
   PLUGINS = ['i18n_subsites']
