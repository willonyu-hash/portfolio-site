import type { ContactContent } from "@/lib/content-types";

/**
 * Editing guide:
 * 1. Update `resumePath` after your final resume PDF file name is confirmed.
 * 2. Add social links later if needed. For now this file stays intentionally minimal.
 */
export const contact: ContactContent = {
  email: "1421825618@qq.com",
  note:
    "感谢浏览我的作品集。如需进一步了解我的趋势报告、项目经历或 AI 实践案例，欢迎通过邮件与我联系。简历文件名目前待定，后续确认后可直接补充下载入口。",
  resumePath: "/files/resume-placeholder.txt",
  resumeLabel: "Resume File Pending",
  links: [
    {
      label: "Email",
      value: "1421825618@qq.com",
      href: "mailto:1421825618@qq.com"
    }
  ]
};
