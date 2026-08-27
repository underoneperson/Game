import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '猪猪大作战 | Unity Game Demo',
  description: '猪猪大作战 Unity 游戏 Demo 展示页，包含实机视频、项目说明与技术关键词。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
