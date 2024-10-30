---
prev: false
next: false
---

# コードブロック

[参考](https://vitepress.dev/guide/markdown#syntax-highlighting-in-code-blocks)

VitePressは、コードブロックに[Shiki](https://shiki.style/)を利用しています。

言語を指定すると自動でコードハイライトされます。
[こちら](https://shiki.style/languages)のサイトに対応言語の一覧があります。

**Input**

````md
```js
export default {
    name: 'MyComponent',
    // ...
}
```
````

````md
```html
<ul>
    <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
    </li>
</ul>
```
````

**Output**

```js
export default {
    name: 'MyComponent',
    // ...
}
```

```html
<ul>
    <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
    </li>
</ul>
```

## 行数の表示

**Input**

````md
```js {:line-numbers}
export default {
    name: 'MyComponent',
    // ...
}
```
````

**Output**

```js {:line-numbers}
export default {
    name: 'MyComponent',
    // ...
}
```

## 行のハイライト

**Input**

````md
```js{4}
export default {
    data () {
        return {
            msg: 'Highlighted!'
        }
    }
}
```
````

**Output**

```js{4}
export default {
    data () {
        return {
            msg: 'Highlighted!'
        }
    }
}
```

複数行の指定は以下のようにします。

- 範囲で指定： `{5-8}`, `{3-10}`, `{10-17}`
- 複数個指定：`{4,7,9}`
- 範囲と複数個：`{4,7-3,16,23-27,40}`

**Input**

````md
```js{1,4,6-8}
export default { // Highlighted
    data () {
        return {
            msg: `Highlighted!
            This line isn't highlighted,
            but this and the text 2 are.`,
            motd: 'VitePress is awesome',
            lorem: 'ipsum'
        }
    }
}
```
````

**Output**

```js{1,4,6-8}
export default { // Highlighted
    data () {
        return {
            msg: `Highlighted!
            This line isn't highlighted,
            but this and the text 2 are.`,
            motd: 'VitePress is awesome',
            lorem: 'ipsum'
        }
    }
}
```

`// [!code hightlight]` というコメントを入れると、その行がハイライトされます。

**Input**

````md
```js
export default {
    data () {
        return {
            msg: 'Highlighted!' // [!!code highlight]
        }
    }
}
```
````

**Output**

```js
export default {
    data () {
        return {
            msg: 'Highlighted!' // [!code highlight]
        }
    }
}
```

## ソースファイルのインポート

そのままパスを書くと、相対パスになります。

**Input**

```md
<<< imports/Sample.java
```

**Output**

<<< imports/Sample.java

`@` を使ってパスを書くと、プロジェクトルートからのパスになります。
`srcDir` が設定されている場合は、そこからのパスになります。

**Input**

```md
<<< @/vitepress/imports/Sample.java
```

**Output**

<<< @/vitepress/imports/Sample.java

`{...}` を使って様々な設定ができます。

**Input**

```md
<<< @/vitepress/imports/Sample.java {2-4}
```

**Output**

<<< @/vitepress/imports/Sample.java {2-4}

## コードグループ

**Input**

````md
::: code-group

```java [Sample.java]
public class Sample {
    public static void main(String[] args) {
        System.out.println("こんにちは。");
    }
}
```

```py [sample.py]
print('こんにちは。')
```

:::
````

**Output**

::: code-group

```java [Sample.java]
public class Sample {
    public static void main(String[] args) {
        System.out.println("こんにちは。");
    }
}
```

```py [sample.py]
print('こんにちは。')
```

:::
