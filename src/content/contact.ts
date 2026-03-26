import type { ContactContent } from "@/lib/content-types";

/**
 * Editing guide:
 * 1. Replace the email, links, and resume path with your real details.
 * 2. Keep this section practical. It should help interviewers contact you quickly.
 */
export const contact: ContactContent = {
  email: "yourname@example.com",
  note:
    "感谢浏览我的作品集。如需进一步了解我的趋势报告、项目经历或 AI 实践案例，欢迎通过邮件与我联系，也可下载简历获取更完整的信息。",
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
