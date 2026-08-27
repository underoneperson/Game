import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Unity Gameplay Portfolio',
  description: '个人 Unity 游戏作品集，展示移动端 RTS 与 ScrapOrbit 两个可播放 Demo。',
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
