# Project 04: Runtime Observability and Structural Control

引入运行时可观测性和结构化边界检查，同时调试一个植入的运行时缺陷。

## 目录说明

| 目录 | 含义 |
|------|------|
| `starter/` | **起点**——基于 P3 solution，新增日志、结构化边界功能待实现。`IndexingService` 中植入了一个隐蔽 bug：超过 1000 字符的文件会产生空分块。没有架构检查脚本。 |
| `solution/` | **参考实现**——结构化日志模块、架构边界检查脚本、植入 bug 已修复。 |

## 使用方法

```sh
cd starter
npm install
# 1. 观察 agent 能否通过日志定位 bug
# 2. 导入一个大文件，观察分块结果是否异常

cd ../solution
npm install
# 对比：结构化日志如何加速问题诊断
```

## 本项目涉及的功能

- 启动日志
- 导入和索引日志
- 可见的问答失败路径
- main / preload / renderer / services 层的显式边界
- 调试一个植入的运行时缺陷

## 对应课件

- [Lecture 07: 给代理划定清晰的任务边界](../../docs/lectures/lecture-07-why-agents-overreach-and-under-finish/index.md)
- [Lecture 08: 用功能列表约束代理行为](../../docs/lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md)
