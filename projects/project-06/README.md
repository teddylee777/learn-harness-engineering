# Project 06: Runtime Observability and Debugging (Capstone)

课程毕业项目：构建并基准测试完整的 harness，执行清理循环验证质量可维护性。

## 目录说明

| 目录 | 含义 |
|------|------|
| `starter/` | **起点**——完整的产品代码，但 harness 被刻意削弱（只有基础 AGENTS.md，没有 feature_list.json、session-handoff、clean-state-checklist）。 |
| `solution/` | **参考实现**——最大 harness：所有产物文件齐全，质量文档评分高，包含基准测试脚本和清理扫描器。 |

## 使用方法

```sh
cd starter
npm install
# 用弱 harness 跑基准测试套件，记录结果

cd ../solution
npm install
# 用完整 harness 跑同样的基准测试
# 执行清理循环
# 对比 quality-document.md 中的评分变化

# 运行基准测试
./scripts/benchmark.sh

# 运行清理扫描
./scripts/cleanup-scanner.sh
```

## 本项目涉及的功能

- 导入文档
- 构建或刷新索引
- 带引用的问答
- 运行时反馈
- 可读的、可重启的仓库状态

## 对应课件

- [Lecture 11: 让代理的运行时可观测](../../docs/lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md)
- [Lecture 12: 每次会话都要留下干净的状态](../../docs/lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md)
