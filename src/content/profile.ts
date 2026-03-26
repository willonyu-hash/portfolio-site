import type { ProfileContent } from "@/lib/content-types";

/**
 * Editing guide:
 * 1. Replace `name` with your real Chinese or English name.
 * 2. Replace the email and social links in `contact.ts`.
 * 3. Keep the profile text concise. This site is for interview scanning, not autobiography.
 */
export const profile: ProfileContent = {
  name: "YOUR NAME",
  englishName: "Fashion Trend Designer",
  headline: "运动趋势研究、方向策划与设计表达转化",
  currentTitle: "趋势中心运动方向设计师",
  location: "Shanghai, China",
  intro:
    "目前任职于服装趋势公司趋势中心运动部门，长期聚焦运动方向的趋势研究、内容策划与设计表达。我的工作重点，不只是发现趋势信号，而是将信息整理为更清晰、可执行、可沟通的方向成果。",
  statement:
    "我擅长在趋势判断、内容结构与设计表达之间建立稳定的方法链路，也持续将 AI 应用于创意辅助、调研提效与内容整理，以提升研究质量和输出效率。",
  bio: [
    "我主要负责运动方向相关的趋势研究、主题策划、内容表达与成果转化。相比单纯的信息搜集，我更关注如何把复杂信号梳理成可被团队理解、讨论和使用的方向语言。",
    "在实际工作中，我会围绕市场变化、品牌动向、消费者语境与视觉风格建立主题逻辑，并通过更清晰的内容结构与叙事节奏，把研究结果转化为更具说服力的项目输出。",
    "我的优势在于兼顾趋势判断、审美表达与沟通效率，也会把 AI 作为工作流中的辅助工具，用于资料整理、信息提炼与表达优化，但核心结论与方向判断始终由专业经验驱动。"
  ],
  expertise: [
    "Trend Research",
    "Sports Direction",
    "Content Planning",
    "Design Translation",
    "Editorial Structuring",
    "AI-enabled Workflow"
  ],
  quickFacts: [
    {
      label: "Focus",
      value: "运动趋势研究 / 方向策划 / 内容表达"
    },
    {
      label: "Strength",
      value: "从趋势判断到成果转化的完整表达能力"
    },
    {
      label: "Value",
      value: "兼顾研究深度、视觉质量与沟通效率"
    }
  ],
  heroMedia: {
    src: "/media/images/hero-editorial.svg",
    alt: "Editorial style placeholder hero image",
    caption: "建议替换为一张更具人物气质、运动语境或趋势判断力的主视觉图片。"
  }
};
