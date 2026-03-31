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
  { text: "L01. 模型能力强，不等于执行可靠", link: "/lectures/lecture-01-why-capable-agents-still-fail/" },
  { text: "L02. Harness 的定义", link: "/lectures/lecture-02-what-a-harness-actually-is/" },
  { text: "L03. 让代码仓库成为唯一的事实来源", link: "/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/" },
  { text: "L04. 把指令拆分到不同文件里", link: "/lectures/lecture-04-why-one-giant-instruction-file-fails/" },
  { text: "L05. 让跨会话的任务保持上下文连续", link: "/lectures/lecture-05-why-long-running-tasks-lose-continuity/" },
  { text: "L06. 让 agent 每次工作前先初始化", link: "/lectures/lecture-06-why-initialization-needs-its-own-phase/" },
  { text: "L07. 给 agent 划清每次任务的边界", link: "/lectures/lecture-07-why-agents-overreach-and-under-finish/" },
  { text: "L08. 用功能清单约束 agent 该做什么", link: "/lectures/lecture-08-why-feature-lists-are-harness-primitives/" },
  { text: "L09. 防止 agent 提前宣告完成", link: "/lectures/lecture-09-why-agents-declare-victory-too-early/" },
  { text: "L10. 跑通完整流程才算真正验证", link: "/lectures/lecture-10-why-end-to-end-testing-changes-results/" },
  { text: "L11. 让 agent 的运行过程可观测", link: "/lectures/lecture-11-why-observability-belongs-inside-the-harness/" },
  { text: "L12. 每次会话结束前都做好交接", link: "/lectures/lecture-12-why-every-session-must-leave-a-clean-state/" }
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
  { text: "P01. 只写提示词让 agent 做，和定好规则再让它做，差多少", link: "/projects/project-01-baseline-vs-minimal-harness/" },
  { text: "P02. 让 agent 看懂项目、接住上次的工作", link: "/projects/project-02-agent-readable-workspace/" },
  { text: "P03. 让 agent 关掉再打开还能接着干", link: "/projects/project-03-multi-session-continuity/" },
  { text: "P04. 用运行反馈修正 agent 的行为", link: "/projects/project-04-incremental-indexing/" },
  { text: "P05. 让 agent 自己检查自己做的对不对", link: "/projects/project-05-grounded-qa-verification/" },
  { text: "P06. 搭建一套完整的 agent 工作环境", link: "/projects/project-06-runtime-observability-and-debugging/" }
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

const enLectureItems = [
  { text: "Lecture 01. Why Capable Agents Still Fail", link: "/en/lectures/lecture-01-why-capable-agents-still-fail/" },
  { text: "Lecture 02. What a Harness Actually Is", link: "/en/lectures/lecture-02-what-a-harness-actually-is/" },
  { text: "Lecture 03. Why the Repository Must Become the System of Record", link: "/en/lectures/lecture-03-why-the-repository-must-become-the-system-of-record/" },
  { text: "Lecture 04. Why One Giant Instruction File Fails", link: "/en/lectures/lecture-04-why-one-giant-instruction-file-fails/" },
  { text: "Lecture 05. Why Long-Running Tasks Lose Continuity", link: "/en/lectures/lecture-05-why-long-running-tasks-lose-continuity/" },
  { text: "Lecture 06. Why Initialization Needs Its Own Phase", link: "/en/lectures/lecture-06-why-initialization-needs-its-own-phase/" },
  { text: "Lecture 07. Why Agents Overreach and Under-Finish", link: "/en/lectures/lecture-07-why-agents-overreach-and-under-finish/" },
  { text: "Lecture 08. Why Feature Lists Are Harness Primitives", link: "/en/lectures/lecture-08-why-feature-lists-are-harness-primitives/" },
  { text: "Lecture 09. Why Agents Declare Victory Too Early", link: "/en/lectures/lecture-09-why-agents-declare-victory-too-early/" },
  { text: "Lecture 10. Why End-to-End Testing Changes Results", link: "/en/lectures/lecture-10-why-end-to-end-testing-changes-results/" },
  { text: "Lecture 11. Why Observability Belongs Inside the Harness", link: "/en/lectures/lecture-11-why-observability-belongs-inside-the-harness/" },
  { text: "Lecture 12. Why Every Session Must Leave a Clean State", link: "/en/lectures/lecture-12-why-every-session-must-leave-a-clean-state/" }
];

const enProjectItems = [
  { text: "Project 01. Baseline vs Minimal Harness", link: "/projects/project-01-baseline-vs-minimal-harness/" },
  { text: "Project 02. Agent-Readable Workspace", link: "/projects/project-02-agent-readable-workspace/" },
  { text: "Project 03. Scope Control and Grounded Verification", link: "/projects/project-03-multi-session-continuity/" },
  { text: "Project 04. Runtime Feedback and Structural Control", link: "/projects/project-04-incremental-indexing/" },
  { text: "Project 05. Evaluator Loops and Three-Role Upgrades", link: "/projects/project-05-grounded-qa-verification/" },
  { text: "Project 06. Benchmark, Cleanup, and Capstone Harness", link: "/projects/project-06-runtime-observability-and-debugging/" }
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
          { text: "Lectures", link: enLectureItems[0].link },
          { text: "Projects", link: enProjectItems[0].link },
          { text: "Library", link: "/en/resources" }
        ],
        sidebar: [
          {
            text: "Lectures",
            items: enLectureItems
          },
          {
            text: "Projects",
            items: enProjectItems
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
