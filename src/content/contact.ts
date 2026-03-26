import type { ContactContent } from "@/lib/content-types";

/**
 * Editing guide:
 * - Replace `email` and the links below with your real contact details.
 * - Put your real resume file inside `/public/files` and update `resumePath`.
 */
export const contact: ContactContent = {
  email: "yourname@example.com",
  note:
    "欢迎联系我获取完整简历、趋势报告样张或项目材料。建议优先替换这里的邮箱、社媒和简历文件路径。",
  resumePath: "/files/resume-placeholder.txt",
  resumeLabel: "Download Resume",
  links: [
    {
      label: "Email",
      value: "yourname@example.com",
      href: "mailto:yourname@example.com"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/yourname",
      href: "https://linkedin.com/in/yourname"
    },
    {
      label: "Behance",
      value: "behance.net/yourname",
      href: "https://behance.net/yourname"
    },
    {
      label: "WeChat",
      value: "your_wechat_id",
      href: "#contact"
    }
  ]
};
