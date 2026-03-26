# Content Maintenance Guide

This project is intentionally content-driven, so future updates should mostly happen in the data files instead of the React components.

## Edit These First

If you only want to update text or media, prioritize:

1. `src/content/profile.ts`
2. `src/content/projects.ts`
3. `src/content/reports.ts`
4. `src/content/ai-cases.ts`
5. `src/content/contact.ts`

## Add a New Project

1. Open `src/content/projects.ts`.
2. Copy one existing object inside the `projects` array.
3. Change `id`, `title`, `subtitle`, `time`, `role`, `summary`, `details`, and `tags`.
4. Put your images into `public/media/images`.
5. Update `coverImage.src` and the `gallery` paths.
6. If you have a short video, add a `video` object. If not, delete that field.
7. Set `featured: true` if you want it near the top.

## Replace Images and Videos

- Images:
  - Put image files in `public/media/images`
  - Use paths like `/media/images/your-file-name.jpg`
- Videos:
  - Put local videos in `public/media/videos`
  - Use paths like `/media/videos/your-video.mp4`
  - Or use a direct external MP4 URL

## Resume File

Put your actual resume inside `public/files`, then update `resumePath` in `src/content/contact.ts`.
