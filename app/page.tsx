const highlights = [
  {
    label: '核心体验',
    value: '快节奏对抗、角色移动、场景互动与胜负反馈',
  },
  {
    label: '演示重点',
    value: '完整展示实际运行画面，适合面试时直接播放讲解',
  },
  {
    label: '项目定位',
    value: 'Unity 游戏 Demo，用于展示玩法实现与项目完成度',
  },
];

const responsibilities = [
  '玩法原型与核心交互实现',
  '角色控制、反馈表现与演示流程整理',
  'Unity 场景搭建、调试与 Demo 输出',
];

const tech = ['Unity', 'C#', 'Gameplay', 'Animation', 'UI Flow'];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#171717]">
      <header className="border-b border-[#171717]/10 bg-[#f7f1e8]/95">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="text-sm font-semibold">
            猪猪大作战
          </a>
          <div className="flex items-center gap-4 text-sm text-[#5e554a]">
            <a href="#demo" className="transition hover:text-[#171717]">
              Demo
            </a>
            <a href="#details" className="transition hover:text-[#171717]">
              项目说明
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-5 pb-10 pt-8 sm:px-8 lg:pb-14 lg:pt-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="mb-4 text-sm font-semibold text-[#b53a27]">
              Unity Game Demo
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
              猪猪大作战
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4d463f]">
              一个面向面试展示的游戏 Demo 项目页。打开页面即可观看实机演示，并快速了解项目定位、实现内容和技术关键词。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#demo"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-[#171717] px-5 text-sm font-semibold text-white transition hover:bg-[#2b2b2b]"
              >
                观看演示
              </a>
              <a
                href="#details"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#171717]/20 px-5 text-sm font-semibold text-[#171717] transition hover:border-[#171717]/45"
              >
                查看项目说明
              </a>
            </div>
          </div>

          <div id="demo" className="rounded-lg border border-[#171717]/12 bg-[#1c1715] p-2 shadow-[0_24px_70px_rgb(23_23_23/18%)]">
            <div className="aspect-video overflow-hidden rounded-md bg-black">
              <video
                className="h-full w-full object-contain"
                controls
                poster="/demo-poster.jpg"
                preload="metadata"
                playsInline
                src="/demo-video-web.mp4"
              >
                你的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#171717]/10 bg-[#fefbf5]">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-6 sm:grid-cols-3 sm:px-8">
          {highlights.map((item) => (
            <article key={item.label} className="rounded-lg border border-[#171717]/10 bg-white p-5">
              <h2 className="text-sm font-bold text-[#b53a27]">{item.label}</h2>
              <p className="mt-3 text-base leading-7 text-[#403a34]">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="details" className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold text-[#0c7668]">Project Notes</p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">适合面试现场快速讲解的作品页</h2>
          <p className="mt-5 leading-8 text-[#4d463f]">
            这个页面把重点集中在实机视频和项目贡献上，面试官不需要下载文件或安装游戏，也能直接看到 Demo 效果。
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <article className="rounded-lg border border-[#171717]/10 bg-[#fefbf5] p-5">
            <h3 className="text-lg font-bold">负责内容</h3>
            <ul className="mt-4 space-y-3 text-[#403a34]">
              {responsibilities.map((item) => (
                <li key={item} className="leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-[#171717]/10 bg-[#e9f6f2] p-5">
            <h3 className="text-lg font-bold">技术关键词</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span key={item} className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-[#155f54]">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <footer className="border-t border-[#171717]/10 bg-[#171717] px-5 py-7 text-white sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">猪猪大作战 Demo 展示</p>
          <p className="text-sm text-white/70">把这里换成你的姓名、邮箱或 GitHub 链接后即可投递。</p>
        </div>
      </footer>
    </main>
  );
}
