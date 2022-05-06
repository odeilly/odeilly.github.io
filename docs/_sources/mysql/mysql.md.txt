# MySQL

## パスワードの変更方法

<https://uxmilk.jp/12396>

### MySQL での変更方法

```sql
SET PASSWORD FOR ユーザ名@ホスト名=password('新しいパスワード');
```

### コマンドラインからの変更

```sh
mysqladmin password 新しいパスワード -u ユーザー名 -p
```

## 文字コード

### 文字コードの指定

<https://pentan.info/sql/mysql/character_set.html>

#### データベース

文字コードを指定してデータベースを作ることが出来ます。

```sql
create database データベース名 character set 文字コード;
```

その他、テーブルや特定のカラムに文字コードを指定することも可能です。

### 文字コードの確認

#### クライアントとサーバの文字コード

<https://qiita.com/yukiyoshimura/items/d44a98021608c8f8a52a>

```sql
show variables like '%char%';
```

以下のように出力される。

```txt
mysql> show variables like '%char%';
+--------------------------+---------------------------------------------------------+
| Variable_name            | Value                                                   |
+--------------------------+---------------------------------------------------------+
| character_set_client     | utf8mb4                                                 |
| character_set_connection | utf8mb4                                                 |
| character_set_database   | utf8mb4                                                 |
| character_set_filesystem | binary                                                  |
| character_set_results    | utf8mb4                                                 |
| character_set_server     | utf8mb4                                                 |
| character_set_system     | utf8mb3                                                 |
| character_sets_dir       | /opt/homebrew/Cellar/mysql/8.0.26/share/mysql/charsets/ |
+--------------------------+---------------------------------------------------------+
8 rows in set (0.01 sec)

mysql>
```

#### データベースの文字コード

```sql
show create database データベース名;
```

(例)

```txt
mysql> show create database foo;
+----------+--------------------------------------------------------------------------------------------------+
| Database | Create Database                                                                                  |
+----------+--------------------------------------------------------------------------------------------------+
| foo      | CREATE DATABASE `foo` /*!40100 DEFAULT CHARACTER SET cp932 */ /*!80016 DEFAULT ENCRYPTION='N' */ |
+----------+--------------------------------------------------------------------------------------------------+
1 row in set (0.00 sec)

mysql>
```

#### テーブルの文字コード

```sh
show create table テーブル名;
```

## 外部キーの例

```sql
create database sample1_db;

use sample1_db;

create table user(
    user_id integer primary key,
    user_name varchar(20) not null
);

create table device(
    device_id integer primary key,
    device_name varchar(30) not null,
    user_id integer not null,
    foreign key (user_id) references user (user_id)
);

insert into user values(1, 'user1');
insert into user values(2, 'user2');
insert into user values(3, 'user3');
insert into user values(4, 'user4');
insert into user values(5, 'user5');

insert into device values(1, 'device1', 1);
insert into device values(2, 'device2', 5);
insert into device values(3, 'device3', 1);
insert into device values(4, 'device4', 3);
insert into device values(5, 'device5', 3);
```
