# Project 03: Scope Control and Grounded Verification

评估显式范围控制和验证门控是否能提高交付准确性。

## 目录说明

| 目录 | 含义 |
|------|------|
| `starter/` | **起点**——基于 P2 solution，新增文档分块、元数据提取、索引状态、基础问答功能待实现。没有一次一个功能的策略约束。 |
| `solution/` | **参考实现**——所有功能已实现，AGENTS.md 包含"一次一个功能"策略，feature_list.json 展示 fail→pass 的转换过程和验证证据。 |

## 使用方法

```sh
cd starter
npm install
# 观察 agent 是否会同时实现多个功能（范围漂移）

cd ../solution
npm install
# 用 scope control 重跑，对比功能交付准确性
```

## 本项目涉及的功能

- 文档分块（段落感知，~500 字符）
- 元数据提取（词数、行数、段落数）
- 索引状态在 UI 中显示
- 基础问答流程，带来源引用

## 对应课件

- [Lecture 05: 保持跨会话上下文](../../docs/lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md)
- [Lecture 06: 每次会话前先初始化](../../docs/lectures/lecture-06-why-initialization-needs-its-own-phase/index.md)
