import type { ShowcaseItem } from "@/lib/content-types";

/**
 * AI case examples.
 * Use these entries to show how AI supports research, communication, and execution.
 */
export const aiCases: ShowcaseItem[] = [
  {
    id: "ai-research-summarizer",
    title: "AI 趋势信号整理工作流",
    subtitle: "把分散素材快速归档为可讨论的判断线索",
    time: "Ongoing",
    role: "工作流设计 / Prompt 结构 / 结果校验",
    summary:
      "通过 AI 辅助整理竞品、趋势图像、社媒观察与关键词信号，缩短前期资料筛选和总结时间。",
    details: [
      "为不同来源的信息建立统一整理模板，减少研究过程中的重复劳动。",
      "把 AI 输出限制在辅助整理和提炼层，关键判断仍由人工完成。",
      "提升素材归档速度，同时保持内容语义和审美判断的稳定性。"
    ],
    tags: ["AI Workflow", "Research Ops", "Knowledge Structuring"],
    coverImage: {
      src: "/media/images/ai-workflow.svg",
      alt: "AI workflow placeholder cover"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder three for AI case"
      }
    ],
    featured: true
  },
  {
    id: "ai-deck-polish",
    title: "AI 提案表达辅助案例",
    subtitle: "用于标题打磨、结构压缩与重点提炼",
    time: "2025",
    role: "内容润色 / 结构优化 / 编辑支持",
    summary:
      "将 AI 作为内容编辑助手，用于方案页标题、要点精简和长段内容压缩，提高提案表达的清晰度。",
    details: [
      "为不同阶段设置不同提示词模板，避免一股脑把表达做成塑料味。",
      "只让 AI 做压缩和归纳，不替代最终结论与方向判断。",
      "适合时间紧张但又不能牺牲页面质量的提案场景。"
    ],
    tags: ["Prompt Design", "Proposal Editing", "Efficiency"],
    coverImage: {
      src: "/media/images/ai-editorial.svg",
      alt: "AI editorial placeholder cover"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-a.svg",
        alt: "Gallery placeholder one for AI case"
      }
    ],
    video: {
      type: "external",
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      title: "Example placeholder video for AI case",
      poster: "/media/images/ai-editorial.svg"
    },
    featured: false
  },
  {
    id: "ai-mini-tool",
    title: "小型内容整理 Demo",
    subtitle: "面向研究资料归类和标签化的轻量工具想法",
    time: "Prototype",
    role: "需求定义 / 逻辑设计 / 结果测试",
    summary:
      "将日常高频但低附加值的整理动作抽象成更可重复的小工具逻辑，用于提升研究协作效率。",
    details: [
      "重点不是炫技，而是让资料筛选和分类动作更稳定。",
      "适合作为面试时展示 AI 理解能力和实际工作转化能力的补充案例。",
      "能清楚体现从问题识别到工具设计的思路。"
    ],
    tags: ["Mini Tool", "Workflow Thinking", "AI Application"],
    coverImage: {
      src: "/media/images/ai-tool.svg",
      alt: "AI tool placeholder cover"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-b.svg",
        alt: "Gallery placeholder two for AI case"
      },
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder three reused for AI case"
      }
    ],
    featured: true
  }
];
