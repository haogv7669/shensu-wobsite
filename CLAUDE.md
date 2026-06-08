# 电商申诉服务网站

## 项目定位

淘宝/天猫/拼多多/抖音等电商平台店铺违规申诉服务网站。面向电商商家，提供申诉服务展示、成功案例、知识库。

## 核心差异

- 杭州合作律师团队，临近阿里巴巴产业生态圈
- 有真实内容能力（小红书知识库可复用），不是纯 SEO 堆词
- 专业克制，不像营销号、不像灰产

## 技术栈

- **框架**：Astro 6 SSG
- **样式**：Tailwind CSS v4
- **部署**：EdgeOne Pages（Git 自动部署）
- **内容**：Astro Content Collections（taobao / materials / guide / cases）
- **SEO**：`@jdevalk/astro-seo-graph` 构建时验证

## 目录结构

```
src/
├── components/     # Header, Footer, SEO, QRCodeTrigger
├── layouts/        # BaseLayout, ArticleLayout
├── pages/          # 路由页面（含 [slug].astro 动态路由）
│   ├── guide/      # 知识库列表 + 详情
│   ├── cases/      # 案例列表 + 详情
│   ├── materials/  # 材料专题列表 + 详情
│   ├── taobao/      # 淘宝申诉专题列表 + 详情
│   ├── faq/        # 常见问题
│   ├── about/      # 关于
│   └── contact/    # 联系
└── content/        # Markdown 内容文件
    ├── guide/      # 知识库文章（SEO 长尾）
    ├── cases/      # 案例拆解（信任转化）
    ├── materials/  # 材料专题
    └── taobao/     # 淘宝申诉专题
```

## 内容工作流

### 一鱼四吃（内容生产）

内容由淘宝风控项目 (`d:\淘宝风控\`) 的 `/一鱼四吃` skill 生成：

1. 用户提供核心选题 + 关键事实
2. Skill 并行生成 4 个版本：知识库、知乎、小红书、案例
3. 知识库版自动写入 `src/content/guide/`
4. 案例版自动写入 `src/content/cases/`
5. 小红书和知乎版手动发布到外平台

### 文章模板

**知识库文章**（`src/content/guide/{slug}.md`）：
```yaml
---
title: "搜索词格式标题"
description: "80-120字描述，含搜索词"
date: YYYY-MM-DD
category: "分类"
---
## 适用场景
## 平台审核逻辑
## 材料清单
## 常见失败原因
## 什么情况不建议自己申诉
```

**案例文章**（`src/content/cases/{slug}.md`）：
```yaml
---
title: "平台 违规类型 关键特征 案例"
description: "60-100字描述"
date: YYYY-MM-DD
violation: "违规类型"
platform: "平台"
penalty: "处罚内容"
difficulty: "难度"
result: "结果"
keywords: "关键词"
---
## 背景（脱敏）
## 材料缺口
## 补强方向
## 结果
## 经验总结
```

### 写完新文章后的检查清单

- [ ] frontmatter 字段完整
- [ ] 加了 2-3 条相关文章内链
- [ ] 内链 URL 尾部带斜杠 `/`
- [ ] 底部 CTA：「先看处罚截图，再判断处理空间。不通过不收费。」
- [ ] `npm run build` 零报错
- [ ] 百度站长平台提交新 URL

## SEO 状态

- ~~Google Analytics~~（已移除，国内加载超时）
- 百度统计：待部署（备案后）
- 百度自动推送 JS：待添加（备案后）
- 百度站长平台：sitemap 已提交，URL 提交进行中（9/27）
- ICP 备案：待提交

## 参考同行

- www.shensu8.com — 静态单页，Bootstrap 5，SEO 靠精准域名+外链

## 内容资产

- 淘宝风控项目 (`d:\淘宝风控\`)：写作规则、禁用词、材料清单、小红书成品、选题库、风格规则
- 搜索词覆盖追踪表 (`d:\淘宝风控\04_内容库\搜索词覆盖追踪表.md`)：54 个搜索词
