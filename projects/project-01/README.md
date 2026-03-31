# Project 01: Baseline vs Minimal Harness

比较弱 harness（仅靠 prompt）和显式 harness（规则文件 + 验证机制）对 AI 编码代理任务完成率的影响。

## 目录说明

| 目录 | 含义 |
|------|------|
| `starter/` | **起点**——只有一个模糊的 `task-prompt.md`，没有 AGENTS.md、没有 feature_list.json。这是你给代理的"弱 harness"版本。 |
| `solution/` | **参考实现**——相同的应用代码，但配备了完整的 harness 文件（AGENTS.md、feature_list.json、init.sh、claude-progress.md）。这是"显式 harness"版本。 |

## 使用方法

```sh
# 1. 用 starter（弱 harness）跑一次代理任务
cd starter
npm install
# 把 task-prompt.md 的内容作为 prompt 给 Claude Code / Codex
# 让代理尝试完成：窗口启动、文档列表、问答面板、数据目录

# 2. 用 solution（显式 harness）跑一次
cd ../solution
npm install
# 让代理读取 AGENTS.md，按规则执行同样的任务

# 3. 对比两次结果
# - 任务是否完成？
# - 需要重试几次？
# - 代理是否提前声称"完成"？
```

## 本项目涉及的功能

- Electron 窗口成功启动
- UI 显示文档列表区域
- UI 显示问答面板
- 应用创建并使用本地数据目录

## 对应课件

- [Lecture 01: 为什么强大的模型仍然会失败](../../docs/lectures/lecture-01-why-capable-agents-still-fail/index.md)
- [Lecture 02: Harness 到底是什么](../../docs/lectures/lecture-02-what-a-harness-actually-is/index.md)
