import type { ShowcaseItem } from "@/lib/content-types";

/**
 * Trend report content.
 * Replace these examples with your real report titles, dates, and visuals later.
 */
export const reports: ShowcaseItem[] = [
  {
    id: "report-sports-lifestyle-2025",
    title: "2025 春夏运动生活方式趋势报告",
    subtitle: "从市场信号到设计方向的系统化研究输出",
    time: "2025 Q1",
    role: "趋势研究 / 内容策划 / 方向表达",
    summary:
      "围绕运动生活方式的消费者变化、品牌动向与视觉趋势，提炼可服务后续设计开发与内容沟通的核心方向，并完成结构化趋势表达。",
    details: [
      "基于市场调研、品牌案例、社交平台视觉变化与消费语境变化，建立本季重点趋势主题与细分方向。",
      "将研究结果转化为更适合设计团队和业务团队理解的表达结构，包括主题命名、视觉关键词、情绪语气与应用建议。",
      "输出内容兼顾审美判断与实际使用场景，提升趋势结论在后续设计和沟通中的参考价值。"
    ],
    tags: ["Trend Report", "Sports Lifestyle", "Direction Strategy"],
    coverImage: {
      src: "/media/images/report-velocity.svg",
      alt: "Report placeholder cover for sports lifestyle report"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-b.svg",
        alt: "Gallery placeholder one for report imagery"
      },
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder two for report imagery"
      }
    ],
    featured: true
  },
  {
    id: "report-soft-performance",
    title: "Soft Performance 方向研究",
    subtitle: "恢复感、轻机能与情绪色彩的运动审美表达",
    time: "2024 Q4",
    role: "趋势研究 / 主题整理 / 内容编排",
    summary:
      "聚焦恢复型运动生活方式与柔和性能感审美，整理色彩、材质、场景与穿着情绪之间的关系，为方向判断与后续设计使用提供明确依据。",
    details: [
      "从视觉风格、材料触感与生活方式变化切入，提炼更适合运动方向内容表达的趋势切片。",
      "将研究信息压缩成更适合客户浏览与内部二次使用的页面结构，提升报告的可读性与沟通效率。",
      "在表达上兼顾高级感与可理解性，避免结论只停留在概念层面。"
    ],
    tags: ["Material Direction", "Color Mood", "Lifestyle Signal"],
    coverImage: {
      src: "/media/images/report-soft.svg",
      alt: "Report placeholder cover for soft performance report"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-a.svg",
        alt: "Gallery placeholder for soft performance imagery"
      }
    ],
    featured: false
  },
  {
    id: "report-urban-trail-signal",
    title: "Urban Trail Signal",
    subtitle: "户外语义进入城市运动日常的趋势观察",
    time: "2024 Q2",
    role: "研究整合 / 内容表达 / 视觉建议",
    summary:
      "关注城市运动穿着中对户外语义的吸收方式，整理出通勤、防护、层次感与机能外观之间的平衡趋势，用于支持方向判断与视觉转化。",
    details: [
      "建立细分场景与审美语言之间的对应关系，让趋势结论更有落点，也更便于后续设计使用。",
      "将复杂信号浓缩为结构清晰的关键页内容，提升报告在会议和内部讨论场景中的表达效率。",
      "帮助团队更快明确方向重心，减少提案和开发过程中的理解偏差。"
    ],
    tags: ["Urban Outdoor", "Sports Forecast", "Visual Translation"],
    coverImage: {
      src: "/media/images/report-urban.svg",
      alt: "Report placeholder cover for urban trail signal"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-b.svg",
        alt: "Gallery placeholder for urban trail imagery"
      }
    ],
    featured: true
  }
];
