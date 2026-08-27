const projects = [
  {
    id: 'rts',
    title: '猪猪大作战 / Mobile RTS',
    subtitle: 'Unity 2022.3 + DOTS + URP',
    summary:
      '移动端横屏 RTS 面试作品，围绕 ECS 架构、Flow Field 群体寻路、程序化地形、战争迷雾、兵营产兵和道具经济构建。',
    video: '/demo-video-web.mp4',
    poster: '/demo-poster.jpg',
    tags: ['DOTS', 'Entities 1.0', 'Flow Field', 'URP', 'Hybrid Rendering'],
    points: [
      '使用 ECS System 承担单位移动、地形生成、兵营产兵、战斗接触销毁等批处理逻辑。',
      'Flow Field 支持多单位共享寻路结果，并处理障碍边界、阵型停车和重复指令抖动。',
      '保留 MonoBehaviour 层处理摄像机、输入、UI、动画桥接和低频经济服务，边界清晰。',
    ],
  },
  {
    id: 'scraporbit',
    title: 'ScrapOrbit / 轨道清道夫',
    subtitle: 'First Playable Vertical Slice',
    summary:
      '太空废料生存动作 Demo，包含磁吸废料、轨道环绕、释放投掷、自动攻击、敌人波次、升级选择和运行时 UI。',
    video: '/scraporbit-web.mp4',
    poster: '/scraporbit-poster.jpg',
    icon: '/scraporbit-icon.png',
    tags: ['Gameplay Prototype', 'UI Toolkit', 'Upgrade System', 'Save Data', 'EditMode Tests'],
    points: [
      '从 Bootstrap 场景程序化创建可玩的 vertical slice，不依赖外部复杂美术资源也能直接运行。',
      '实现玩家移动、圆形软边界、磁吸废料、投掷伤害、经验收集和 24 个升级定义。',
      '搭建菜单、HUD、暂停、结算、升级选择、触控控件，并加入确定性随机、JSON 存档和测试。',
    ],
  },
];

const skills = [
  'Unity Gameplay',
  'C# Systems',
  'DOTS / ECS',
  'Flow Field Pathfinding',
  'Runtime UI',
  'Performance-minded Architecture',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f7f5] text-[#141515]">
      <header className="sticky top-0 z-10 border-b border-[#141515]/10 bg-[#f4f7f5]/92 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="text-sm font-black tracking-wide">
            Unity Portfolio
          </a>
          <div className="flex items-center gap-4 text-sm font-semibold text-[#52605a]">
            <a href="#projects" className="transition hover:text-[#141515]">
              Projects
            </a>
            <a href="#focus" className="transition hover:text-[#141515]">
              Focus
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-8 lg:pb-16 lg:pt-14">
        <div className="grid items-end gap-9 lg:grid-cols-[1fr_0.78fr]">
          <div>
            <p className="mb-4 text-sm font-black text-[#c2472d]">Unity Gameplay / Systems Portfolio</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
              面向面试展示的个人游戏作品集
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#3f4b45]">
              这里集中展示两个 Unity 项目：偏系统架构和群体控制的移动端 RTS，以及偏玩法原型和完整可玩切片的 ScrapOrbit。面试官打开页面即可看视频、扫技术点、进入项目讲解。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-[#141515] px-5 text-sm font-bold text-white transition hover:bg-[#2a2d2b]"
              >
                查看作品
              </a>
              <a
                href="#focus"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#141515]/18 px-5 text-sm font-bold text-[#141515] transition hover:border-[#141515]/42"
              >
                技术重点
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-[#141515]/10 bg-white p-5 shadow-[0_20px_60px_rgb(20_21_21/9%)]">
            <p className="text-sm font-black text-[#0d7566]">Portfolio Scope</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-[#fff1de] p-4">
                <p className="text-3xl font-black">2</p>
                <p className="mt-1 text-sm font-semibold text-[#6b5440]">Playable demos</p>
              </div>
              <div className="rounded-lg bg-[#e8f3ff] p-4">
                <p className="text-3xl font-black">Unity</p>
                <p className="mt-1 text-sm font-semibold text-[#42566b]">2022.3 projects</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.slice(0, 4).map((skill) => (
                <span key={skill} className="rounded-lg bg-[#eef2ef] px-3 py-2 text-sm font-bold text-[#38423d]">
                  {skill}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="projects" className="border-y border-[#141515]/10 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-black text-[#c2472d]">Selected Projects</p>
              <h2 className="text-3xl font-black sm:text-4xl">作品演示</h2>
            </div>
            <p className="max-w-xl leading-7 text-[#52605a]">
              每个项目都保留视频演示和面试讲解要点，重点放在我做了什么、为什么这样做、能体现什么工程能力。
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="grid gap-5 rounded-lg border border-[#141515]/10 bg-[#f4f7f5] p-4 sm:p-5 lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div className="overflow-hidden rounded-lg bg-[#111]">
                  <video
                    className="aspect-video h-full w-full object-contain"
                    controls
                    poster={project.poster}
                    preload="metadata"
                    playsInline
                    src={project.video}
                  >
                    你的浏览器不支持视频播放。
                  </video>
                </div>

                <div className="flex flex-col justify-between gap-5 p-1">
                  <div>
                    <div className="flex items-center gap-3">
                      {project.icon ? (
                        <img src={project.icon} alt="" className="h-12 w-12 rounded-lg object-cover" />
                      ) : null}
                      <div>
                        <p className="text-sm font-black text-[#0d7566]">{project.subtitle}</p>
                        <h3 className="text-2xl font-black leading-tight">{project.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 leading-7 text-[#3f4b45]">{project.summary}</p>
                    <ul className="mt-4 space-y-2 text-[#3f4b45]">
                      {project.points.map((point) => (
                        <li key={point} className="leading-7">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-[#38423d]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="focus" className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-black text-[#0d7566]">Interview Focus</p>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">可展开讲的技术重点</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill} className="rounded-lg border border-[#141515]/10 bg-white p-5">
                <p className="text-lg font-black">{skill}</p>
                <p className="mt-3 leading-7 text-[#52605a]">
                  结合项目代码和演示视频讲实现取舍、系统边界、性能风险与调试经验。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#141515]/10 bg-[#141515] px-5 py-7 text-white sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black">Unity Gameplay Portfolio</p>
          <p className="text-sm text-white/70">后续可替换为姓名、邮箱、GitHub、Bilibili 或作品下载链接。</p>
        </div>
      </footer>
    </main>
  );
}
