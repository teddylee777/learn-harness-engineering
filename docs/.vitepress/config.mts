import { defineConfig } from "vitepress";

const docsBase = process.env.DOCS_BASE_PATH ?? "/";

const lectureItems = [
  { text: "Lecture 01", link: "/lectures/lecture-01-why-capable-agents-still-fail/" },
  { text: "Lecture 02", link: "/lectures/lecture-02-what-a-harness-actually-is/" },
  { text: "Lecture 03", link: "/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/" },
  { text: "Lecture 04", link: "/lectures/lecture-04-why-one-giant-instruction-file-fails/" },
  { text: "Lecture 05", link: "/lectures/lecture-05-why-long-running-tasks-lose-continuity/" },
  { text: "Lecture 06", link: "/lectures/lecture-06-why-initialization-needs-its-own-phase/" },
  { text: "Lecture 07", link: "/lectures/lecture-07-why-agents-overreach-and-under-finish/" },
  { text: "Lecture 08", link: "/lectures/lecture-08-why-feature-lists-are-harness-primitives/" },
  { text: "Lecture 09", link: "/lectures/lecture-09-why-agents-declare-victory-too-early/" },
  { text: "Lecture 10", link: "/lectures/lecture-10-why-end-to-end-testing-changes-results/" },
  { text: "Lecture 11", link: "/lectures/lecture-11-why-observability-belongs-inside-the-harness/" },
  { text: "Lecture 12", link: "/lectures/lecture-12-why-every-session-must-leave-a-clean-state/" }
];

const zhLectureItems = [
  { text: "Lecture 01. 为什么强模型依然会失败", link: "/lectures/lecture-01-why-capable-agents-still-fail/" },
  { text: "Lecture 02. 什么才算 harness", link: "/lectures/lecture-02-what-a-harness-actually-is/" },
  { text: "Lecture 03. 为什么仓库必须成为 system of record", link: "/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/" },
  { text: "Lecture 04. 为什么一个巨大的 instruction 文件会失败", link: "/lectures/lecture-04-why-one-giant-instruction-file-fails/" },
  { text: "Lecture 05. 为什么长时任务会失去连续性", link: "/lectures/lecture-05-why-long-running-tasks-lose-continuity/" },
  { text: "Lecture 06. 为什么初始化必须是独立阶段", link: "/lectures/lecture-06-why-initialization-needs-its-own-phase/" },
  { text: "Lecture 07. 为什么 scope 必须被显式化", link: "/lectures/lecture-07-why-agents-overreach-and-under-finish/" },
  { text: "Lecture 08. 为什么验证必须外部化", link: "/lectures/lecture-08-why-feature-lists-are-harness-primitives/" },
  { text: "Lecture 09. 为什么 runtime feedback 必须进入 harness", link: "/lectures/lecture-09-why-agents-declare-victory-too-early/" },
  { text: "Lecture 10. 为什么完整验证才算真的验证", link: "/lectures/lecture-10-why-end-to-end-testing-changes-results/" },
  { text: "Lecture 11. 为什么可观测性必须进入 harness", link: "/lectures/lecture-11-why-observability-belongs-inside-the-harness/" },
  { text: "Lecture 12. 为什么每次会话都必须干净收尾", link: "/lectures/lecture-12-why-every-session-must-leave-a-clean-state/" }
];

const projectItems = [
  { text: "Project 01", link: "/projects/project-01-baseline-vs-minimal-harness/" },
  { text: "Project 02", link: "/projects/project-02-agent-readable-workspace/" },
  { text: "Project 03", link: "/projects/project-03-multi-session-continuity/" },
  { text: "Project 04", link: "/projects/project-04-incremental-indexing/" },
  { text: "Project 05", link: "/projects/project-05-grounded-qa-verification/" },
  { text: "Project 06", link: "/projects/project-06-runtime-observability-and-debugging/" }
];

const zhProjectItems = [
  { text: "Project 01. 基线 vs 最小 harness", link: "/projects/project-01-baseline-vs-minimal-harness/" },
  { text: "Project 02. Agent-readable workspace 与 continuity scaffold", link: "/projects/project-02-agent-readable-workspace/" },
  { text: "Project 03. Scope control 与 grounded verification", link: "/projects/project-03-multi-session-continuity/" },
  { text: "Project 04. Runtime feedback 与 structural control", link: "/projects/project-04-incremental-indexing/" },
  { text: "Project 05. Evaluator loop 与三角色升级", link: "/projects/project-05-grounded-qa-verification/" },
  { text: "Project 06. Benchmark、cleanup 与 capstone harness", link: "/projects/project-06-runtime-observability-and-debugging/" }
];

const zhResourceItems = [
  { text: "资料库总览", link: "/resources/" },
  { text: "中文资料库", link: "/resources/zh/" },
  { text: "中文模板", link: "/resources/zh/templates/" },
  { text: "中文参考", link: "/resources/zh/reference/" },
  { text: "English Resource Library", link: "/resources/en/" },
  { text: "English Templates", link: "/resources/en/templates/" },
  { text: "English Reference", link: "/resources/en/reference/" }
];

const enResourceItems = [
  { text: "Overview", link: "/en/resources" },
  { text: "中文总览", link: "/resources/zh/" },
  { text: "English Overview", link: "/resources/en/" },
  { text: "English Templates", link: "/resources/en/templates/" },
  { text: "English Reference", link: "/resources/en/reference/" },
  { text: "中文资料库", link: "/resources/" },
  { text: "中文模板", link: "/resources/zh/templates/" },
  { text: "中文参考", link: "/resources/zh/reference/" }
];

export default defineConfig({
  base: docsBase,
  title: "Learn Harness Engineering",
  description:
    "A project-based course on designing the environments, state, verification, and control systems that make Codex and Claude Code reliable.",
  cleanUrls: true,
  srcExclude: ["temp/**"],
  ignoreDeadLinks: false,
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN"
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Lectures", link: lectureItems[0].link },
          { text: "Projects", link: projectItems[0].link },
          { text: "Library", link: "/en/resources" }
        ],
        sidebar: [
          {
            text: "Lectures",
            items: lectureItems
          },
          {
            text: "Projects",
            items: projectItems
          },
          {
            text: "Resource Library",
            items: enResourceItems
          }
        ],
        outline: {
          level: [2, 3]
        },
        docFooter: {
          prev: "Previous page",
          next: "Next page"
        },
        lastUpdated: {
          text: "Last updated"
        },
        returnToTopLabel: "Return to top",
        sidebarMenuLabel: "Menu",
        darkModeSwitchLabel: "Appearance",
        lightModeSwitchTitle: "Switch to light theme",
        darkModeSwitchTitle: "Switch to dark theme"
      }
    }
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "讲义", link: zhLectureItems[0].link },
      { text: "项目", link: zhProjectItems[0].link },
      { text: "资料库", link: "/resources/" }
    ],
    search: {
      provider: "local"
    },
    sidebar: [
      {
        text: "讲义",
        items: zhLectureItems
      },
      {
        text: "项目",
        items: zhProjectItems
      },
      {
        text: "资料库",
        items: zhResourceItems
      }
    ],
    outline: {
      level: [2, 3]
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },
    lastUpdated: {
      text: "最后更新于"
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    socialLinks: [{ icon: "github", link: "https://github.com/walkinglabs/learn-harness-engineering" }]
  }
});
