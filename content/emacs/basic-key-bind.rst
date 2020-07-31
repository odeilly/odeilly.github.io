========================
 Emacs キーバインドメモ
========================

:slug: emacs-key-bind-memo
:date: 2020-07-23
:summary: Emacsの基本的なキーバインドで忘れやすものをメモ.
:tags: Emacs

ファイル関連
============

.. list-table::
   :header-rows: 1

   * - キー
     - コマンド名
     - 説明
   * - C-x RET f
     - the command set-buffer-file-coding-system
     - 文字コードと改行コードを変換する
   * - C-x RET r
     - revert-buffer-with-coding-system
     - 文字コードと改行コードを変換して開き直す
   * - C-x C-v
     - ffap-alternate-file
     - カレントバッファを別のファイルで置き換える
   * - (なし)
     - revert-buffer
     - カレントバッファを捨ててファイルを読み込み直す

カーソル移動
============

.. list-table::
   :header-rows: 1

   * - キー
     - コマンド名
     - 説明
   * - C-M-v
     - scroll-other-window
     - ウィンドウの分割時に他のウィンドウを下へスクロールする
   * - C-M-S-v
     - scroll-other-window-down
     - ウィンドウの分割時に他のウィンドウを上へスクロールする
   * - M-g M-g, M-g g
     - goto-line
     - 指定された行へ移動する

文字入力
========

.. list-table::
   :header-rows: 1

   * - キー
     - コマンド名
     - 説明
   * - C-q
     - quoted-insert
     - 特殊文字を入力する

表示
====

文字サイズの変更
----------------

``C-x C-+=`` または ``C-x C-=`` で文字サイズを大きくすることができる.
``C-x C--`` で文字サイズを小さくすることができる.
``C-x`` のあとのキーを連続でタイプすることによって,
段階的にサイズを変更することができる.
元のサイズに戻すには ``0`` をタイプする.
