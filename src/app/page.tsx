const animatedWords = ["Robotics", "Design", "Prototyping", "Systems"];

const featuredProjects = [
  {
    title: "Autonomous Interface Study",
    category: "Robotics / Interface",
    description:
      "センサー入力と画面設計をつなぎ、使う人の判断負荷を下げるための研究・試作プロジェクト。",
    metrics: "8 weeks / solo",
    tags: ["UX design", "Control logic", "Prototyping"],
  },
  {
    title: "Interactive Device Prototype",
    category: "Technical Development",
    description:
      "物理デバイスの挙動設計と試作検証を重ね、展示環境でも安定して動く構成を探った開発。",
    metrics: "3 iterations",
    tags: ["Hardware", "Testing", "Exhibition"],
  },
  {
    title: "Process-Oriented Portfolio",
    category: "Web / Documentation",
    description:
      "成果物だけでなく、背景・判断・改善まで読めるように再設計したポートフォリオアーカイブ。",
    metrics: "Design system",
    tags: ["Next.js", "Editorial UI", "SEO"],
  },
  {
    title: "Team Build Coordination",
    category: "Collaboration",
    description:
      "担当範囲を明確に分けつつ、全体体験が崩れないように設計と連携のルールを整えた制作。",
    metrics: "5 members",
    tags: ["Planning", "Implementation", "Review"],
  },
];

const designPrinciples = [
  {
    title: "Structured Thinking",
    body: "背景、目的、判断、実装、結果の順で整理し、斜め読みでも構造がつかめるようにする。",
  },
  {
    title: "Quiet Precision",
    body: "装飾よりも、枠線、整列、余白、コントラストで精密さをつくる。",
  },
  {
    title: "Readable Depth",
    body: "技術に詳しくない人にも全体像が伝わり、詳しい人には設計の中身が見える密度に整える。",
  },
];

const skillGroups = [
  {
    name: "Design",
    note: "体験の流れと情報整理を設計するための道具",
    items: ["UI design", "Wireframing", "Information architecture", "Visual systems"],
  },
  {
    name: "Development",
    note: "Web実装と動作確認を支える基礎技術",
    items: ["HTML / CSS", "JavaScript", "React / Next.js", "Git / GitHub"],
  },
  {
    name: "Prototype / Research",
    note: "試作と検証を繰り返しながら成立条件を探る領域",
    items: ["Robotics", "Technical prototyping", "Testing", "Documentation"],
  },
];

const contactLinks = [
  { label: "GitHub", value: "実際のURLに差し替え" },
  { label: "Mail", value: "連絡用メールアドレスを記載" },
  { label: "Activity", value: "発表資料・ノート・SNSなど" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(120,166,214,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(96,125,170,0.12),_transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.55),transparent_92%)]" />

      <section className="relative border-b border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-12 pt-6 sm:px-10 lg:px-12 lg:pb-18">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 pb-5 text-sm text-muted">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(120,166,214,0.55)]" />
              <span className="tracking-[0.26em] uppercase">Kotaro Portfolio</span>
            </div>
            <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] sm:text-[0.78rem]">
              <a className="transition hover:text-white" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-white" href="#about">
                About
              </a>
              <a className="transition hover:text-white" href="#skills">
                Skills
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <div className="grid gap-8 pt-10 lg:grid-cols-[1.4fr_0.8fr] lg:pt-16">
            <div className="rounded-[2rem] border border-white/10 bg-panel/90 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur sm:p-9">
              <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">
                Robotics / Technical Development / Portfolio
              </p>
              <div className="mt-5 max-w-4xl">
                <h1 className="font-[family:var(--font-display)] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                  小太郎
                </h1>
                <div className="mt-4 flex min-h-[3.25rem] items-start gap-3 overflow-hidden sm:min-h-[4rem]">
                  <span className="mt-1 text-lg text-muted sm:text-xl">works across</span>
                  <div className="hero-word-window">
                    <div className="hero-word-track">
                      {[...animatedWords, animatedWords[0]].map((word, index) => (
                        <span
                          key={`${word}-${index}`}
                          className="block font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-8 max-w-2xl text-base leading-8 text-muted-strong sm:text-lg">
                ロボティクス、技術開発、インターフェース設計を横断しながら、
                作品の背景と判断過程まで伝わるアウトプットを目指しています。
                派手さよりも、構造の明快さと静かな完成度を重視しています。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center rounded-full border border-accent/30 bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:translate-y-[-1px] hover:bg-accent-bright"
                  href="#projects"
                >
                  Featured Projects
                </a>
                <a
                  className="inline-flex items-center rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/24 hover:bg-white/4"
                  href="#about"
                >
                  About This Portfolio
                </a>
              </div>
            </div>

            <aside className="grid gap-5">
              <div className="rounded-[2rem] border border-white/10 bg-panel-subtle p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">Focus</p>
                <ul className="mt-5 space-y-4">
                  {designPrinciples.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-2xl border border-white/7 bg-white/[0.03] px-4 py-4"
                    >
                      <p className="text-sm font-semibold tracking-[0.02em] text-white">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(120,166,214,0.1),rgba(255,255,255,0.03))] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-accent-soft">Scroll</p>
                <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
                  代表作、背景、スキル、連絡先までを一続きで読めるように設計しています。
                </p>
                <div className="mt-6 h-14 w-7 rounded-full border border-white/12 p-1.5">
                  <div className="scroll-indicator h-3 w-3 rounded-full bg-accent" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="projects" className="relative">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-14 sm:px-10 lg:px-12 lg:py-18">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Featured Projects</p>
              <h2 className="section-title">
                作品に視線が集まるよう、
                <br />
                枠と余白を整えて並べる
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted">
              代表作は 3〜6 件に絞り、背景・設計意図・実装の強みが短時間で見える順に配置します。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-[2rem] border border-white/9 bg-panel-subtle p-5 transition duration-300 hover:translate-y-[-2px] hover:border-accent/28 hover:bg-white/[0.045] sm:p-6"
              >
                <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-[linear-gradient(135deg,rgba(120,166,214,0.16),rgba(255,255,255,0.03),rgba(120,166,214,0.08))] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-accent-soft">
                      {project.category}
                    </p>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted">
                      {project.metrics}
                    </p>
                  </div>
                  <h3 className="mt-10 max-w-md font-[family:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-8 text-muted-strong">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs tracking-[0.12em] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/8 bg-panel-deep/85">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-14 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-18">
          <article className="rounded-[2rem] border border-white/9 bg-panel p-7">
            <p className="section-kicker">About</p>
            <h2 className="section-title">
              背景、姿勢、作り方が
              <br />
              読み手に残るように書く
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-muted-strong">
              <p>
                ここには現在の立場と、どのようなテーマに取り組んでいるかを簡潔に書きます。
                ロボティクス、技術開発、Web制作など領域が複数ある場合も、何を判断軸にして作っているかを先に示すと伝わりやすくなります。
              </p>
              <p>
                たとえば、使いやすさを優先するのか、構造の明快さを重視するのか、
                試作と検証をどれだけ大切にしているかといった姿勢は、作品一覧の前後で効いてきます。
              </p>
              <p>
                長い自分語りではなく、背景、考え方、これから深めたい領域の 3 点に絞ると、誠実で読みやすいセクションになります。
              </p>
            </div>
          </article>

          <aside className="grid gap-5">
            <div className="rounded-[2rem] border border-white/9 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.26em] text-muted">Reading Guide</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                <li>何を作る人なのか</li>
                <li>どう考えて設計するのか</li>
                <li>どの役割で価値を出せるのか</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/9 bg-[linear-gradient(180deg,rgba(120,166,214,0.08),rgba(255,255,255,0.02))] p-6">
              <p className="text-xs uppercase tracking-[0.26em] text-accent-soft">Portrait / Diagram</p>
              <div className="mt-4 flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-dashed border-white/12 bg-background-soft text-sm text-muted">
                写真や構成図を控えめに置く領域
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="skills">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-14 sm:px-10 lg:px-12 lg:py-18">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Skills / Tools</p>
              <h2 className="section-title">
                ただ並べるのでなく、
                <br />
                設計と実装の関係が見える整理にする
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted">
              使える技術を一覧にするだけでなく、どの工程で役立つ技術なのかを分けて見せると、役割のイメージが伝わりやすくなります。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.name}
                className="rounded-[2rem] border border-white/9 bg-panel-subtle p-6"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-accent-soft">
                  {group.name}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">{group.note}</p>
                <ul className="mt-6 grid gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-14 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-20">
          <article className="rounded-[2rem] border border-white/9 bg-panel p-7">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">
              最後は余白を残して、
              <br />
              静かに終える
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-strong">
              連絡先は多すぎない方が見やすく、返答できる窓口に絞る方が誠実です。
              GitHub、メール、活動記録への導線だけでも十分に機能します。
            </p>
          </article>

          <div className="grid gap-4">
            {contactLinks.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.7rem] border border-white/9 bg-white/[0.03] px-5 py-5"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-muted">{item.label}</p>
                <p className="mt-3 text-sm leading-7 text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
