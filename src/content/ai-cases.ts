import type { ShowcaseItem } from "@/lib/content-types";

/**
 * AI case content.
 * Keep the focus on real workflow value instead of vague technology enthusiasm.
 */
export const aiCases: ShowcaseItem[] = [
  {
    id: "ai-research-workflow",
    title: "AI 辅助趋势研究与信号整理工作流",
    subtitle: "用于提升调研效率、资料归档与内容提炼质量",
    time: "Ongoing",
    role: "工作流设计 / 内容整理 / 结果校验",
    summary:
      "将 AI 应用于趋势研究前期的信息归类、关键词提炼与资料整理，缩短重复性处理时间，同时保留核心判断与审美筛选的人工作用。",
    details: [
      "为竞品信息、趋势图像、社媒观察与关键词信号建立统一整理模板，提升前期资料处理效率。",
      "将 AI 输出限制在辅助整理和初步提炼层，关键结论与方向判断仍由人工完成，避免内容失真。",
      "帮助研究流程更快进入可讨论状态，也让后续提案与内容转化更顺畅。"
    ],
    tags: ["AI Workflow", "Research Efficiency", "Knowledge Structuring"],
    coverImage: {
      src: "/media/images/ai-workflow.svg",
      alt: "AI workflow placeholder cover"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder for AI workflow imagery"
      }
    ],
    featured: true
  },
  {
    id: "ai-proposal-editing",
    title: "AI 提案表达辅助案例",
    subtitle: "用于标题打磨、结构压缩与重点提炼",
    time: "2025",
    role: "内容润色 / 结构优化 / 编辑支持",
    summary:
      "将 AI 作为内容编辑助手，用于方案页标题、段落压缩与要点提炼，提高提案表达的清晰度与完成效率。",
    details: [
      "根据不同提案阶段设置不同提示结构，确保输出更贴近项目语境，而不是一股塑料味模板文案。",
      "只把 AI 用于压缩、归纳和表达辅助，不替代最终方向判断与内容主张。",
      "适合时间紧张但仍需保持页面质量和沟通效率的提案场景。"
    ],
    tags: ["Prompt Design", "Proposal Editing", "Communication Support"],
    coverImage: {
      src: "/media/images/ai-editorial.svg",
      alt: "AI editorial placeholder cover"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-a.svg",
        alt: "Gallery placeholder for AI proposal imagery"
      }
    ],
    video: {
      type: "external",
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      title: "Example placeholder video for AI proposal editing",
      poster: "/media/images/ai-editorial.svg"
    },
    featured: false
  },
  {
    id: "ai-mini-tool-prototype",
    title: "研究资料整理小工具 Demo",
    subtitle: "面向归类、标签化与内容管理的轻量实践",
    time: "Prototype",
    role: "需求定义 / 逻辑设计 / 结果测试",
    summary:
      "围绕日常研究中高频但低附加值的整理动作，尝试将归类、标签和初步结构化流程抽象成更可重复的小工具逻辑。",
    details: [
      "重点不在炫耀技术，而在于提升资料筛选与整理动作的稳定性和可复用性。",
      "适合作为面试场景中展示 AI 理解能力与实际工作转化能力的补充案例。",
      "清楚体现从问题识别、流程拆解到工具思路搭建的完整路径。"
    ],
    tags: ["Mini Tool", "Workflow Thinking", "Applied AI"],
    coverImage: {
      src: "/media/images/ai-tool.svg",
      alt: "AI mini tool placeholder cover"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-b.svg",
        alt: "Gallery placeholder one for AI tool imagery"
      },
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder two for AI tool imagery"
      }
    ],
    featured: true
  }
];
