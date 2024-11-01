---
prev: false
next: false
---

# Markdown の拡張

## PlantUML

[参考](https://nanova.me/posts/vitepress-migration)

### プラグイン

```sh
pnpm add -D markdown-it-plantuml
```

### 設定

**docs/.vitepress/config.mts**

```ts{2,8-10}
import { DefaultTheme, defineConfig } from 'vitepress'
import MarkdownItPlantuml from 'markdown-it-plantuml'
// ...
export default defineConfig({
  // ...
  markdown: {
    // ...
    config: md => {
      md.use(MarkdownItPlantuml)
    },
    // ...
  }
  // ...
}
```

### 使用例

**Input**

```md
@startuml
Alice -> Bob: Authentication Request

alt successful case

  Bob -> Alice: Authentication Accepted

else some kind of failure

  Bob -> Alice: Authentication Failure
  group My own label
    Alice -> Log : Log attack start
      loop 1000 times
        Alice -> Bob: DNS Attack
      end
    Alice -> Log : Log attack end
  end

else Another type of failure

  Bob -> Alice: Please repeat

end
@enduml
```

**Output**

@startuml
Alice -> Bob: Authentication Request

alt successful case

  Bob -> Alice: Authentication Accepted

else some kind of failure

  Bob -> Alice: Authentication Failure
  group My own label
    Alice -> Log : Log attack start
      loop 1000 times
        Alice -> Bob: DNS Attack
      end
    Alice -> Log : Log attack end
  end

else Another type of failure

  Bob -> Alice: Please repeat

end
@enduml
