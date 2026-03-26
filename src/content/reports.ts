import type { ShowcaseItem } from "@/lib/content-types";

/**
 * Trend report examples.
 * Replace titles, dates, and media with real report materials when ready.
 */
export const reports: ShowcaseItem[] = [
  {
    id: "report-velocity-reset",
    title: "Velocity Reset",
    subtitle: "2025 运动生活方式趋势研究示例",
    time: "2025 Q1",
    role: "主导研究 / 方向整理 / 提案表达",
    summary:
      "围绕都市运动、功能通勤与恢复型生活方式的交叉变化，整理出更适合下一阶段产品与内容开发的趋势方向。",
    details: [
      "追踪品牌调性变化、消费者着装场景和材质情绪，形成主题判断。",
      "提炼可被设计团队快速使用的视觉关键词与方向说明。",
      "为后续款式、图案、配色与营销沟通提供统一依据。"
    ],
    tags: ["Trend Report", "Sports Lifestyle", "Direction Forecast"],
    coverImage: {
      src: "/media/images/report-velocity.svg",
      alt: "Report placeholder cover for velocity reset"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-b.svg",
        alt: "Gallery placeholder two for report imagery"
      },
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder three for report imagery"
      }
    ],
    featured: true
  },
  {
    id: "report-soft-performance",
    title: "Soft Performance",
    subtitle: "恢复感与轻机能并行的运动审美方向",
    time: "2024 Q4",
    role: "趋势研究 / 内容策划",
    summary:
      "聚焦柔和性能感、舒缓色彩和慢节奏运动场景，探索运动服装在心理疗愈与轻机能审美中的新表达。",
    details: [
      "将趋势观察拆分成情绪色板、材质建议和穿着场景描述。",
      "提升内容可读性，让报告更适合客户快速浏览和内部二次使用。",
      "兼顾审美表达与商业沟通，避免结论过于悬浮。"
    ],
    tags: ["Color Mood", "Material Direction", "Wellness"],
    coverImage: {
      src: "/media/images/report-soft.svg",
      alt: "Report placeholder cover for soft performance"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-a.svg",
        alt: "Gallery placeholder one for report imagery"
      }
    ],
    featured: false
  },
  {
    id: "report-urban-trail",
    title: "Urban Trail Signal",
    subtitle: "户外语义进入城市运动日常的趋势切片",
    time: "2024 Q2",
    role: "研究整合 / 内容表达 / 视觉建议",
    summary:
      "关注城市运动穿着中对户外语义的吸收方式，整理出通勤、防护、层次感和机能外观之间的平衡趋势。",
    details: [
      "建立细分场景与审美语言的对应关系，让方向结论更有落点。",
      "将复杂趋势信号浓缩为更便于讨论和分享的关键页结构。",
      "帮助后续项目明确风格重心，避免方向发散。"
    ],
    tags: ["Urban Outdoor", "Sports Forecast", "Styling Signal"],
    coverImage: {
      src: "/media/images/report-urban.svg",
      alt: "Report placeholder cover for urban trail"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-b.svg",
        alt: "Gallery placeholder two reused for report imagery"
      }
    ],
    featured: true
  }
];
