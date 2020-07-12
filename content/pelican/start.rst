===============
 Pelicanの導入
===============

:date: 2020-07-12
:tags: Pelican

Pelicanを導入しました.

環境設定
========

ソフトウェアのインストール
--------------------------

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
   GitHub Page のアップロードが楽になります.

   .. code-block:: none

      pip install ghp-import
