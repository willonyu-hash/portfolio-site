import type { ShowcaseItem } from "@/lib/content-types";

/**
 * Project content.
 * One object equals one project. Keep the field order stable for easier future editing.
 */
export const projects: ShowcaseItem[] = [
  {
    id: "sports-theme-planning",
    title: "运动方向主题企划与设计表达项目",
    subtitle: "面向内部提案与后续设计开发的方向整合",
    time: "2025",
    role: "方向策划 / 内容组织 / 设计转化",
    summary:
      "围绕运动方向重点主题，完成从趋势信息筛选、结构梳理到视觉表达转译的完整项目支持，帮助团队更高效地理解方向并推进后续开发。",
    details: [
      "结合趋势研究与项目目标搭建清晰的内容框架，明确主题逻辑、视觉重点与表达顺序。",
      "将研究语言转写为更具沟通效率的项目表达，减少内部理解偏差，提升提案完成度。",
      "在内容组织与页面表达上强化重点信息，使项目成果更适合会议展示、团队协作与后续延展。"
    ],
    tags: ["Direction Planning", "Editorial Structure", "Creative Translation"],
    coverImage: {
      src: "/media/images/project-season.svg",
      alt: "Project placeholder cover for sports theme planning"
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
    subtitle: "提升不同项目之间的表达一致性与方向清晰度",
    time: "2024",
    role: "内容框架搭建 / 命名逻辑 / 内部协同",
    summary:
      "针对既有项目在命名、表达和内容结构上的差异，建立更统一的趋势语言体系，帮助团队在方向理解和成果输出上保持一致。",
    details: [
      "梳理不同项目中的主题命名、视觉关键词与叙事结构，统一输出标准与表达逻辑。",
      "为后续提案和方向内容建立更稳定的模板骨架，提升协作效率与内容复用价值。",
      "减少不同成员对同一趋势结论的理解偏差，使研究成果更具连续性和专业感。"
    ],
    tags: ["Naming System", "Content Framework", "Team Alignment"],
    coverImage: {
      src: "/media/images/project-language.svg",
      alt: "Project placeholder cover for trend language system"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder for trend language system imagery"
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
    id: "proposal-storytelling-support",
    title: "趋势内容包装与提案表达优化",
    subtitle: "把研究结论转化为更具说服力的项目叙事",
    time: "2024",
    role: "故事线设计 / 内容编辑 / 视觉统筹",
    summary:
      "针对客户或内部提案场景，重构趋势内容的页面节奏与表达方式，让研究输出从信息堆叠升级为更容易理解和记住的叙事体验。",
    details: [
      "重写标题逻辑、重点顺序与视觉层级，让核心判断在移动端浏览和会议场景中都能被快速抓住。",
      "通过图文排序和内容压缩强化项目说服力，让关键信息出现得更早、更明确。",
      "提升整体呈现质量，使成果在专业度、完成度与视觉质感上更符合面试和汇报场景。"
    ],
    tags: ["Storytelling", "Proposal Support", "Presentation Quality"],
    coverImage: {
      src: "/media/images/project-story.svg",
      alt: "Project placeholder cover for proposal storytelling"
    },
    gallery: [
      {
        src: "/media/images/gallery-grid-a.svg",
        alt: "Gallery placeholder one reused for storytelling project"
      },
      {
        src: "/media/images/gallery-grid-c.svg",
        alt: "Gallery placeholder two reused for storytelling project"
      }
    ],
    featured: true
  }
];
