import type { ShowcaseItem } from "@/lib/content-types";

/**
 * Project content.
 * Replace the second and third project titles when your final naming is confirmed.
 */
export const projects: ShowcaseItem[] = [
  {
    id: "taobao-tmall-trend-whitepaper",
    title: "淘宝天猫个案合作趋势白皮书",
    subtitle: "面向平台合作场景的趋势整合与方向表达项目",
    time: "2025",
    role: "趋势研究 / 内容策划 / 设计表达转化",
    summary:
      "围绕平台合作需求，完成趋势信息筛选、内容结构整理与方向表达支持，形成更适合业务沟通与后续设计转化的白皮书内容成果。",
    details: [
      "结合运动方向趋势研究、平台语境与合作需求，建立清晰的主题逻辑与内容框架。",
      "将研究信息转写为更适合提案、汇报与跨团队沟通的表达方式，提升成果的可读性与说服力。",
      "在视觉与内容组织上强化重点信息，使白皮书既具专业判断，也具后续转化价值。"
    ],
    tags: ["Trend Whitepaper", "Platform Collaboration", "Content Translation"],
    coverImage: {
      src: "/media/images/project-season.svg",
      alt: "Project placeholder cover for Taobao Tmall collaboration whitepaper"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-a.svg",
        alt: "Gallery placeholder one for whitepaper imagery"
      },
      {
        src: "/media/images/gallery-grid-b.svg",
        alt: "Gallery placeholder two for whitepaper imagery"
      }
    ],
    featured: true
  },
  {
    id: "project-title-pending-02",
    title: "项目标题待补充 02",
    subtitle: "待确认正式项目名称后替换",
    time: "2024",
    role: "内容框架搭建 / 命名逻辑 / 内部协同",
    summary:
      "该项目条目已保留结构，后续只需替换为你的真实项目标题、简介和素材，即可继续作为正式案例展示。",
    details: [
      "建议后续补充项目背景、你的职责、主要输出内容以及项目价值。",
      "如果该项目更偏趋势报告，可保留研究视角；如果更偏合作项目，可强化成果转化与协同作用。",
      "替换真实图片和标题后，这一项就可以直接用于面试展示。"
    ],
    tags: ["Title Pending", "Content Ready", "To Be Updated"],
    coverImage: {
      src: "/media/images/project-language.svg",
      alt: "Project placeholder cover for pending project two"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder for pending project two"
      }
    ],
    video: {
      type: "external",
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      title: "Example motion placeholder",
      poster: "/media/images/project-language.svg"
    },
    featured: false
  },
  {
    id: "project-title-pending-03",
    title: "项目标题待补充 03",
    subtitle: "待确认正式项目名称后替换",
    time: "2024",
    role: "故事线设计 / 内容编辑 / 视觉统筹",
    summary:
      "该项目条目作为第三个案例占位保留，便于你后续继续补齐真实项目信息，而无需改动组件或页面结构。",
    details: [
      "建议优先选择一个能体现趋势判断或设计表达转化能力的真实项目进行替换。",
      "如果该案例与 AI 实践或内容优化有关，也可以强化方法论和效率提升层面的价值。",
      "目前先保留结构完整，避免页面版式因为内容缺失而塌掉。"
    ],
    tags: ["Title Pending", "Structure Preserved", "Interview Ready"],
    coverImage: {
      src: "/media/images/project-story.svg",
      alt: "Project placeholder cover for pending project three"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-a.svg",
        alt: "Gallery placeholder one for pending project three"
      },
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder two for pending project three"
      }
    ],
    featured: true
  }
];
