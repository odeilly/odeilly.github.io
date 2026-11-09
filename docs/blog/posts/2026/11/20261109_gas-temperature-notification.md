---
slug: gas-temperature-notification
date:
  created: 2026-11-09
  updated: 2026-11-09
categories:
  - Tips
tags:
  - GAS
  - JavaScript
draft: true
---

# GASで毎日の気温をGmailに通知する

Google Apps Script（GAS）を使って、気象庁のさいたま市の日最高気温・日最低気温を自動取得する仕組みを作りました。
直近7日分の気温をまとめ、毎朝Gmailで通知することで、手帳への気温記録を効率化します。

<!-- more -->

## 1. はじめに

毎日の気温を手帳に記録している。

これまでは、気象庁のWebサイトで最高気温と最低気温を確認してから手帳に書き写していたが、毎日の作業なので自動化したいと考えた。

そこで、Google Apps Script（GAS）を使って、気象庁の過去の気象データを取得し、Gmailで通知する仕組みを作ることにした。

今回の目的は次のとおり。

- 気象庁からさいたま市の気温を取得する
- 最高気温と最低気温を取得する
- 直近7日分のデータをまとめる
- 毎朝、自動的にGmailで通知する

## 2. 開発環境と構成

今回使用するサービスは次のとおり。

| 項目 | 使用するもの |
| --- | --- |
| 開発言語 | JavaScript |
| 実行環境 | Google Apps Script |
| 気象データ | 気象庁 |
| メール通知 | Gmail |
| 定期実行 | GASの時間主導型トリガー |

GASを採用した理由は、サーバを用意する必要がなく、Googleのクラウド上で定期実行できるためである。

Pythonで実装する方法も考えたが、今回のような小規模な処理であればGASのほうが手軽に運用できる。

また、当初はLINEへの通知も考えたが、LINE Messaging APIを利用するにはLINE公式アカウントの準備が必要になるため、今回はGmailを採用した。

## 3. 気象庁のデータを取得する

### 3.1 データ取得先

気象庁の「過去の気象データ検索」を利用する。

[気象庁：過去の気象データ検索](https://www.data.jma.go.jp/stats/etrn/)

例えば、埼玉県の2026年11月の最高気温は、次のURLで確認できる。

<https://www.data.jma.go.jp/stats/etrn/view/daily_h1.php?prec_no=43&block_no=00&year=2026&month=11&day=&view=p3>

URLのパラメータは次のとおり。

| パラメータ | 内容 |
| --- | --- |
| prec_no | 地域番号（埼玉県：43） |
| block_no | 観測地点の指定（00：県内の地点一覧） |
| year | 年 |
| month | 月 |
| day | 日 |
| view | 表示する観測項目 |

`view` の値によって、取得する気温を切り替える。

- `p3`：日最高気温
- `p4`：日最低気温

このページには埼玉県内の複数の観測地点が掲載されているため、その中から「さいたま」の列を抽出する。

### 3.2 観測地点について

当初は別の場所の気温を取得したかった。
しかし、気象庁の過去の気象データ検索にはその場所の観測地点が見当たらなかった。
埼玉県の大気環境測定局についても調べたが、近隣の測定局では気温データを取得できる地点が限られていた。
今回は、継続して記録するデータの信頼性を優先し、気象庁のさいたま観測所を利用することにした。

## 4. GASで実装する

### 4.1 プロジェクトの作成

[Google Apps Script](https://script.google.com/) にアクセスし、新しいプロジェクトを作成する。

プロジェクト名は `SaitamaTemperature` とした。

今回は、プログラムを `コード.gs` にまとめて実装する。

### 4.2 気象庁のHTMLを取得する

GASでは `UrlFetchApp` を利用すると、HTTPリクエストによって外部のWebページを取得できる。

最高気温と最低気温のページをそれぞれ取得する。

```javascript
const params = [
  'prec_no=43',
  'block_no=00',
  'year=' + year,
  'month=' + month,
  'day=',
  'view=' + view
].join('&');

const url =
  'https://www.data.jma.go.jp/stats/etrn/view/daily_h1.php?'
  + params;

const response = UrlFetchApp.fetch(url);
const html = response.getContentText('UTF-8');
```

取得したHTMLから、日付と「さいたま」の列を抽出する。

### 4.3 HTMLを解析する

取得したHTMLには、埼玉県内の各観測地点のデータが表形式で含まれている。

そのため、次の手順で必要な値を抽出する。

1. HTMLからテーブルの行を取得する。
2. 各行からセルの内容を取得する。
3. 見出し行から「さいたま」の列番号を特定する。
4. 日付の行から最高気温または最低気温を取得する。

最高気温と最低気温は、同じ処理を利用して取得する。

### 4.4 直近7日分を取得する

毎朝の実行時に、現在の日付を基準として直近7日分の日付を作成する。

月をまたぐ場合もあるため、対象となる年月を調べて、それぞれの月のデータを取得する。

例えば、月初に実行した場合は前月と当月の2つのページが必要になる。

今回の実装では、今日を含む7日分を取得対象としている。

まだ気象庁のデータが発表されていない日については、未発表として扱う。

### 4.5 Gmailで通知する

メールの送信にはGAS標準の `MailApp.sendEmail()` を利用する。

メールには、次の情報を掲載する。

- 観測地点
- 日付
- 日最高気温
- 日最低気温
- 気象庁のデータページへのリンク

HTML形式のメールも作成し、最高気温と最低気温を色分けして表示する。

## 5. 定期実行の設定

GASの時間主導型トリガーを利用する。

今回の設定は次のとおり。

| 項目 | 設定 |
| --- | --- |
| 実行する関数 | `sendWeeklyTemperatureReport` |
| 実行頻度 | 毎日 |
| 実行時間帯 | 午前8時台 |
| タイムゾーン | Asia/Tokyo |

トリガーは次の関数で登録する。

```javascript
function createDailyTrigger() {
  ScriptApp.getProjectTriggers().forEach(trigger => {
    if (
      trigger.getHandlerFunction() ===
      'sendWeeklyTemperatureReport'
    ) {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  ScriptApp.newTrigger('sendWeeklyTemperatureReport')
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .inTimezone('Asia/Tokyo')
    .create();
}
```

この関数を一度実行すれば、毎日の自動実行が登録される。

なお、GASの時間主導型トリガーは8時ちょうどではなく、8時台のいずれかの時刻に実行される。

## 6. 動作確認

動作確認は次の順番で行う。

1. `testFetch` を実行し、気象庁のデータを取得できることを確認する。
2. `sendWeeklyTemperatureReport` を実行し、メールが届くことを確認する。
3. `createDailyTrigger` を実行し、定期実行を登録する。
4. 翌日の自動実行でメールが届くことを確認する。

エラーが発生した場合は、GASの実行数から実行履歴とエラー内容を確認する。

## 7. 今後の改善

今回の仕組みは、手帳への気温記録を簡単にすることを目的としている。

今後は、次のような機能も追加したい。

- Googleスプレッドシートへの気温データの蓄積
- 月別・年別の最高気温と最低気温の集計
- 気温の推移をグラフで表示
- 取得失敗時の通知機能の改善

毎日手作業で確認していた気温を自動的に取得できれば、手帳への記録も続けやすくなる。

## 8. 参考資料

- [気象庁：過去の気象データ検索](https://www.data.jma.go.jp/stats/etrn/)
- [Google Apps Script：UrlFetchApp](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app)
- [Google Apps Script：MailApp](https://developers.google.com/apps-script/reference/mail/mail-app)
- [Google Apps Script：インストール可能なトリガー](https://developers.google.com/apps-script/guides/triggers/installable)

## 9. プログラム全体

今回作成したGASのプログラム全体を以下に示す。

`コード.gs` に次のコードを記述する。

```javascript
/**
 * さいたま市 気温通知プログラム
 *
 * 気象庁の過去の気象データから
 * 直近7日間の最高気温・最低気温を取得し、
 * Gmailで通知する。
 */

// ========================================
// 設定
// ========================================

const CONFIG = {
  // メール送信先
  email: 'your-address@gmail.com',

  // 観測地点
  station: 'さいたま',

  // 気象庁の観測データ
  baseUrl: 'https://www.data.jma.go.jp/stats/etrn/view/daily_h1.php',

  // 埼玉県・さいたま
  precNo: '43',
  blockNo: '00',

  // タイムゾーン
  timeZone: 'Asia/Tokyo',

  // 取得日数（今日を含む）
  days: 7
};


// ========================================
// メイン処理
// ========================================

function sendWeeklyTemperatureReport() {
  try {
    const records = getWeeklyTemperatures();

    const subject = createSubject();
    const body = createMailBody(records);
    const htmlBody = createHtmlBody(records);

    MailApp.sendEmail({
      to: CONFIG.email,
      subject: subject,
      body: body,
      htmlBody: htmlBody,
      name: 'さいたま市 気温通知'
    });

    console.log('メールを送信しました。');

  } catch (error) {
    console.error(error);

    MailApp.sendEmail({
      to: CONFIG.email,
      subject: '[エラー] さいたま市 気温通知',
      body: '気温データの取得またはメール送信に失敗しました。\n\n'
        + error.message
    });

    throw error;
  }
}


// ========================================
// 直近7日間のデータ取得
// ========================================

function getWeeklyTemperatures() {
  const dates = getLast7Dates();

  // 必要な年月を取得（月またぎに対応）
  const months = [...new Set(
    dates.map(date => date.substring(0, 7))
  )];

  // 月ごとのデータを取得
  const monthlyData = fetchMonthlyData(months);

  // 日付ごとに最高気温・最低気温をまとめる
  return dates.map(date => {
    const yearMonth = date.substring(0, 7);
    const day = Number(date.substring(8, 10));

    const data = monthlyData[yearMonth];

    return {
      date: date,
      max: data.max[day] || '',
      min: data.min[day] || ''
    };
  });
}


// ========================================
// 直近7日間の日付を作成
// ========================================

function getLast7Dates() {
  const today = Utilities.formatDate(
    new Date(),
    CONFIG.timeZone,
    'yyyy-MM-dd'
  );

  const [year, month, day] = today.split('-').map(Number);

  const baseDate = new Date(
    Date.UTC(year, month - 1, day)
  );

  const dates = [];

  for (let i = CONFIG.days - 1; i >= 0; i--) {
    const date = new Date(baseDate);

    date.setUTCDate(date.getUTCDate() - i);

    dates.push(
      Utilities.formatDate(
        date,
        'GMT',
        'yyyy-MM-dd'
      )
    );
  }

  return dates;
}


// ========================================
// 月ごとの気象庁データ取得
// ========================================

function fetchMonthlyData(months) {
  const requests = [];

  months.forEach(yearMonth => {
    const [year, month] = yearMonth.split('-');

    // p3: 最高気温
    // p4: 最低気温
    ['p3', 'p4'].forEach(view => {
      const params = [
        'prec_no=' + CONFIG.precNo,
        'block_no=' + CONFIG.blockNo,
        'year=' + year,
        'month=' + Number(month),
        'day=',
        'view=' + view
      ].join('&');

      requests.push({
        url: CONFIG.baseUrl + '?' + params,
        muteHttpExceptions: true
      });
    });
  });

  const responses = UrlFetchApp.fetchAll(requests);

  const result = {};

  let index = 0;

  months.forEach(yearMonth => {
    result[yearMonth] = {
      max: {},
      min: {}
    };

    ['max', 'min'].forEach(type => {
      const response = responses[index++];

      if (response.getResponseCode() !== 200) {
        throw new Error(
          yearMonth + ' の ' + type + ' データ取得に失敗しました。'
        );
      }

      const html = response.getContentText('UTF-8');

      result[yearMonth][type] =
        parseTemperatureTable(html);
    });
  });

  return result;
}


// ========================================
// HTMLから気温データを抽出
// ========================================

function parseTemperatureTable(html) {
  const rows = html.match(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi);

  if (!rows) {
    throw new Error('気象庁の表が見つかりません。');
  }

  const parsedRows = rows.map(row => {
    const cells = row.match(
      /<t[dh]\b[^>]*>[\s\S]*?<\/t[dh]>/gi
    );

    if (!cells) {
      return [];
    }

    return cells.map(cell => {
      return normalizeCellText(cell);
    });
  });

  // 「さいたま」の列番号を探す
  const header = parsedRows.find(row =>
    row.includes(CONFIG.station)
  );

  if (!header) {
    throw new Error('さいたまの列が見つかりません。');
  }

  const stationIndex = header.indexOf(CONFIG.station);

  const result = {};

  parsedRows.forEach(row => {
    if (row.length <= stationIndex) {
      return;
    }

    // 先頭セルが日付（1～31）ならデータ行
    if (/^\d{1,2}$/.test(row[0])) {
      const day = Number(row[0]);

      result[day] = row[stationIndex];
    }
  });

  return result;
}


// ========================================
// HTMLセルの文字列を整形
// ========================================

function normalizeCellText(html) {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#(\d+);/g, (_, code) =>
      String.fromCharCode(Number(code))
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCharCode(parseInt(code, 16))
    )
    .replace(/\s+/g, '')
    .trim();
}


// ========================================
// メール件名
// ========================================

function createSubject() {
  const today = Utilities.formatDate(
    new Date(),
    CONFIG.timeZone,
    'yyyy/MM/dd'
  );

  return '【気温記録】さいたま市 ' + today;
}


// ========================================
// メール本文（テキスト形式）
// ========================================

function createMailBody(records) {
  let body = 'さいたま市の過去7日間の気温\n\n';

  body += '日付          最高気温    最低気温\n';
  body += '--------------------------------\n';

  records.forEach(record => {
    const date = formatDate(record.date);

    body += date + '    '
      + formatTemperature(record.max) + '    '
      + formatTemperature(record.min) + '\n';
  });

  body += '\n観測地点：さいたま市\n';
  body += '出典：気象庁 過去の気象データ検索\n';

  return body;
}


// ========================================
// メール本文（HTML形式）
// ========================================

function createHtmlBody(records) {
  let rows = '';

  records.forEach(record => {
    rows += `
      <tr>
        <td>${formatDate(record.date)}</td>
        <td class="max">${escapeHtml(
          formatTemperature(record.max)
        )}</td>
        <td class="min">${escapeHtml(
          formatTemperature(record.min)
        )}</td>
      </tr>
    `;
  });

  return `
    <html>
    <head>
      <style>
        body {
          font-family: sans-serif;
          color: #333;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          max-width: 480px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: center;
        }
        th {
          background: #f2f2f2;
        }
        .max {
          color: #d35400;
        }
        .min {
          color: #2874a6;
        }
      </style>
    </head>
    <body>
      <h2>さいたま市・過去7日間の気温</h2>

      <table>
        <tr>
          <th>日付</th>
          <th>最高気温</th>
          <th>最低気温</th>
        </tr>
        ${rows}
      </table>

      <p>観測地点：さいたま市</p>

      <p>
        出典：
        <a href="https://www.data.jma.go.jp/stats/etrn/">
          気象庁 過去の気象データ検索
        </a>
      </p>
    </body>
    </html>
  `;
}


// ========================================
// 表示用の補助関数
// ========================================

function formatTemperature(value) {
  if (value === '') {
    return '未発表';
  }

  if (value === '///' || value === '×') {
    return '欠測';
  }

  return value + '℃';
}


function formatDate(dateString) {
  const date = new Date(dateString + 'T00:00:00Z');

  const weekdays = [
    '日', '月', '火', '水', '木', '金', '土'
  ];

  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const weekday = weekdays[date.getUTCDay()];

  return month + '/' + day + ' (' + weekday + ')';
}


function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}


// ========================================
// テスト用：データ取得だけ行う
// ========================================

function testFetch() {
  const records = getWeeklyTemperatures();

  console.log(JSON.stringify(records, null, 2));
}


// ========================================
// 毎朝8時のトリガーを登録
// ========================================

function createDailyTrigger() {
  // 既存の同じトリガーを削除
  ScriptApp.getProjectTriggers().forEach(trigger => {
    if (
      trigger.getHandlerFunction() ===
      'sendWeeklyTemperatureReport'
    ) {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  // 毎日8時台に実行
  ScriptApp.newTrigger('sendWeeklyTemperatureReport')
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .inTimezone(CONFIG.timeZone)
    .create();

  console.log('毎朝8時台のトリガーを登録しました。');
}
```

### 設定箇所

プログラムを利用する際には、次の箇所を自分の環境に合わせて変更する。

```javascript
email: 'your-address@gmail.com',
```

メール送信先に自分のGmailアドレスを指定する。

### 実行する関数

| 関数 | 役割 |
| --- | --- |
| `testFetch` | 気温データの取得テスト |
| `sendWeeklyTemperatureReport` | メール送信 |
| `createDailyTrigger` | 毎日の定期実行を登録 |

`createDailyTrigger` は初回の設定時に一度実行すればよい。

## 10. おわりに

GASを利用することで、気象庁のWebサイトから毎日手作業で気温を確認する必要がなくなった。

今後は、Googleスプレッドシートへのデータ保存や、月別・年別の気温推移のグラフ化などにも取り組んでみたい。
