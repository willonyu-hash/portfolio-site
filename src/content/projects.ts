import type { ShowcaseItem } from "@/lib/content-types";

/**
 * How to edit this file:
 * - One object equals one project.
 * - Keep the field order unchanged. It is easier to maintain later.
 * - Put images in `/public/media/images` and local videos in `/public/media/videos`.
 * - Set `featured: true` for the items you want to highlight first.
 */
export const projects: ShowcaseItem[] = [
  {
    id: "sports-season-concept",
    title: "季度运动主题企划与视觉转化",
    subtitle: "从趋势信号到可执行内容方向的完整整合",
    time: "2025",
    role: "趋势研究 / 内容策划 / 设计转化",
    summary:
      "围绕新一季运动生活方式主题，完成趋势信号筛选、故事线搭建、视觉关键词定义与方向表达整理。",
    details: [
      "基于市场信号、品牌动向、消费者偏好与社交平台视觉变化，建立核心主题与分支方向。",
      "将研究结论转写为更适合内部沟通和设计团队使用的内容语言，减少提案后的理解偏差。",
      "输出可用于后续延展的色彩、面料、版型、情绪图与视觉语气建议。"
    ],
    tags: ["Sportswear", "Theme Planning", "Visual Direction"],
    coverImage: {
      src: "/media/images/project-season.svg",
      alt: "Project placeholder cover for a seasonal sports concept"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-a.svg",
        alt: "Gallery placeholder one for project imagery"
      },
      {
        src: "/media/images/gallery-grid-b.svg",
        alt: "Gallery placeholder two for project imagery"
      }
    ],
    featured: true
  },
  {
    id: "trend-language-system",
    title: "运动方向趋势语言体系整理",
    subtitle: "让不同项目输出保持统一语气与判断标准",
    time: "2024",
    role: "内容框架搭建 / 方向命名 / 内部协同",
    summary:
      "为运动方向内容建立更一致的表达逻辑，包括主题命名规则、视觉关键词结构和提案叙事顺序。",
    details: [
      "梳理既有项目中命名、表达和排版逻辑的不一致问题，统一输出标准。",
      "为后续项目提供更稳定的模板骨架，让内容协作效率更高。",
      "降低不同团队成员对同一趋势结论的理解偏差。"
    ],
    tags: ["Naming System", "Editorial Structure", "Collaboration"],
    coverImage: {
      src: "/media/images/project-language.svg",
      alt: "Project placeholder cover for trend language system"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder three for project imagery"
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
    id: "active-lifestyle-storytelling",
    title: "Active Lifestyle 方向内容包装",
    subtitle: "把趋势结论翻译成更具说服力的项目叙事",
    time: "2024",
    role: "故事线设计 / 内容编辑 / 视觉统筹",
    summary:
      "为面向客户或内部提案的内容包重构结构，让趋势表达从信息罗列升级为更容易理解和记住的叙事体验。",
    details: [
      "重写页面节奏、标题逻辑与视觉层级，让重点内容能在移动端和会议场景中被快速抓住。",
      "配合图片和案例排序，使关键判断点出现得更早、更明确。",
      "强化项目呈现质量，提升方案的专业感和完成度。"
    ],
    tags: ["Storytelling", "Proposal Design", "Content Quality"],
    coverImage: {
      src: "/media/images/project-story.svg",
      alt: "Project placeholder cover for storytelling work"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-a.svg",
        alt: "Gallery placeholder one reused for project imagery"
      },
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder three reused for project imagery"
      }
    ],
    featured: true
  }
];
