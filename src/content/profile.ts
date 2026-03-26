import type { ProfileContent } from "@/lib/content-types";

/**
 * Editing guide:
 * 1. Replace the text below with your real profile copy.
 * 2. `heroMedia.src` should point to a file inside `/public`.
 * 3. Keep `quickFacts` short. They work best as fast proof points on mobile.
 */
export const profile: ProfileContent = {
  name: "YOUR NAME",
  englishName: "Fashion Trend Designer",
  headline: "运动趋势研究、内容策划与设计转化",
  currentTitle: "趋势中心运动方向设计师",
  location: "Shanghai, China",
  intro:
    "聚焦运动方向的趋势洞察、内容策略与设计转化，把分散的市场信号整理成更有判断力、更容易落地的趋势表达。",
  statement:
    "我擅长在趋势研究、运动品类内容策划与视觉转化之间建立稳定的方法链路，也持续把 AI 工作流纳入研究和提案效率中。",
  bio: [
    "目前服务于服装趋势公司的趋势中心运动部门，负责趋势研究、运动方向内容策划与设计转化相关工作。",
    "工作重点不只是搜集灵感，而是把信号筛选、语义归纳、趋势表达与商业沟通串成一套更可信的叙事结构。",
    "我关注设计判断力、内容表达质量与执行效率的平衡，也会通过 AI 工具优化研究流程、素材整理和方案产出。"
  ],
  expertise: [
    "Trend Forecasting",
    "Sports Direction Planning",
    "Design Translation",
    "Editorial Storytelling",
    "AI Workflow Design",
    "Cross-team Communication"
  ],
  quickFacts: [
    {
      label: "Focus",
      value: "Sports trend / Content planning / Design conversion"
    },
    {
      label: "Strength",
      value: "从趋势洞察到表达框架的完整转译能力"
    },
    {
      label: "Approach",
      value: "Research-driven, editorial, and commercially aware"
    }
  ],
  heroMedia: {
    src: "/media/images/hero-editorial.svg",
    alt: "Editorial style placeholder hero image",
    caption: "Replace this placeholder with a strong personal cover image."
  }
};
