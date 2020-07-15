=====================
 Pelicanで数式を書く
=====================

:date: 2020-07-15
:tags: Pelican, Math
:summary: Render Math Plugin を利用して数式を書きます.
:slug: pelican-math

Render Math Plugin の設定
=========================

Typogrify が必要となるので, pipコマンドでインストールします.

.. code-block:: none

   pip install typogrify

pelicanconf.py で, ``PLUGINS`` に ``render_math`` を追加します.

.. code-block:: python

   PLUGINS = [
                ...
                'render_math',
                ...
   ]



使用例
======

- インライン数式

  .. code-block:: rst

     インライン数式は, :math:`x^2 + x + 1 = 0` のように書きます.

  インライン数式は, :math:`x^2 + x + 1 = 0` のように書きます.

- 別行立て式

  .. code-block:: rst

     .. math::

        S = \int_a^b f(x) dx.


  .. math::

     S = \int_a^b f(x) dx.
