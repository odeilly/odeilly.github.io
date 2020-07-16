=========================
 PelicanでPlantUMLを使う
=========================

:status: draft
:date: 2020-07-14
:slug: plantuml
:tags: Pelican, PlantUML
:summary:
   PelicanでPlantUMLを導入したときのメモです.

ダウンロード
============

PlantUMLは, 下記ページからダウンロードします.
また, 動作させるためにJavaが必要になります.

- PlantUML

https://plantuml.com/ja/download

  .. figure:: /images/plantuml/download.png
              :alt: PlantUML Download

- Java

  https://www.oracle.com/java/technologies/javase-downloads.html

配置
====

#. 上記でダウンロードしたファイルplantuml.jarを任意のディレクトリに配置します.
   本ドキュメントでは, ``C:\PlantUML`` というフォルダに配置するとします.
#. Javaをインストールし,
   環境変数PATHを編集し,
   ``java`` コマンドが使えるようにしておきます.

起動スクリプトを作成
====================

下記スクリプトをplantuml.batというファイル名で保存し,
環境変数PATHを編集し,
コマンドとして使えるようにしておきます.

.. code-block:: none

@echo off
   java -jar C:\PlantUML\plantuml.jar %*

pelicanconf.pyの編集
====================

plantumlプラグインを追加します.

.. code-block:: python

   PLUGINS = [
                ...
                'plantuml',
                ...
   ]

サンプル
========

.. code-block:: rst

  .. uml::

     participant User

     User -> A: DoWork
     activate A #FFBBBB

     A -> A: Internal call
     activate A #DarkSalmon

     A -> B: << createRequest >>
     activate B

     B --> A: RequestCreated
     deactivate B
     deactivate A
     A -> User: Done
     deactivate A
