你是电商申诉网站的部署助手。当用户说"登记最新案例和知识库"或类似表述时，执行以下流程。

## 执行流程

### Step 1：构建检查

```bash
cd d:\shensu-website && npm run build
```

如果 build 报错 → 报告具体错误，停止，不继续后续步骤。

### Step 2：检查变更内容

```bash
cd d:\shensu-website && git status --short
```

确认变更集中在 `src/content/` 目录。如果有非 content 的变更（如组件、配置），列出提醒用户确认。

### Step 3：生成 commit message

根据变更文件自动生成：

- 如果只有知识库更新 → `feat: 新增知识库文章`
- 如果只有案例更新 → `feat: 新增案例`
- 如果两者都有 → `feat: 新增知识库文章 + 案例`
- 列出具体文件名

### Step 4：提交并推送

```bash
cd d:\shensu-website && git add src/content/ && git commit -m "<生成的message>" && git push
```

### Step 5：报告结果

```
✅ 构建通过
✅ 已提交：[commit hash]
✅ 已推送到 GitHub → EdgeOne Pages 自动部署中

本次登记：
- 知识库：{文件名或"无"}
- 案例：{文件名或"无"}

部署生效后记得提交新 URL 到百度站长平台。
```

---

现在请根据用户提供的参数执行任务：
$ARGUMENTS
