type RoadmapEntry = {
  label: string;
  title: string;
  body: string;
  note: string;
};

type Project = {
  slug: string;
  name: string;
  type: string;
  oneLine: string;
  background: string;
  concept: string;
  period: string;
  role: string[];
  process: string[];
  tech: string[];
  innovations: string[];
  results: string[];
  links: { label: string; href: string }[];
  strengths: string[];
  visuals: string[];
};

const animatedWords = ["Robotics", "Media Art", "Web", "Prototyping"];

const quickFacts = [
  "渡邉 幸大朗",
  "慶應義塾大学 総合政策学部",
  "立命館守山中学校・高等学校 出身",
];

const roadmap: RoadmapEntry[] = [
  {
    label: "Middle / High School",
    title: "立命館守山で、制作と発信の土台を広げる",
    body:
      "立命館守山中学校・高等学校で学びながら、企画、表現、発信を横断して取り組む土台をつくった。作品そのものだけでなく、どう伝えるかにも関心を持つようになった。",
    note: "Ritsumeikan Moriyama",
  },
  {
    label: "Web",
    title: "情報を整理して届ける Web 制作に取り組む",
    body:
      "イベントや展示の背景、遊び方、スケジュールを短時間で伝えるためのサイト制作を経験。内容を読みやすく整理し、世界観と実用性を両立させることを意識してきた。",
    note: "Information design / Frontend",
  },
  {
    label: "2026.01 - 03",
    title: "Ma LAB と「声の行方」で、展示と発信を接続する",
    body:
      "高校生 7 人のチーム Ma LAB で体験型メディアアート展示「声の行方」を推進。展示、発信、クラウドファンディングを一つの流れとして捉え、一般公開までつなげた。",
    note: "Project leader / Team of 7",
  },
  {
    label: "Now",
    title: "慶應義塾大学総合政策学部で、ロボティクスと技術開発を深める",
    body:
      "現在は慶應義塾大学総合政策学部で、ロボティクス、技術開発、Web 制作を横断しながら、設計と実装の両方を深めていきたいと考えている。",
    note: "Keio SFC / 1st year",
  },
];

const projectCards = [
  {
    title: "声の行方",
    category: "Media Art",
    description:
      "声を光・音・映像に変換し、行動につながる対話の余白を体験化するメディアアート展示。",
    metrics: "2026.01 - 03 / Team of 7",
  },
  {
    title: "声の行方 公式サイト",
    category: "Web Design / Information",
    description:
      "展示概要、背景、展示情報、支援導線を一つの流れに整理した特設サイト。",
    metrics: "Live site",
  },
  {
    title: "給食タイムからの脱出",
    category: "Event Website",
    description:
      "謎解き公演の楽しさを保ちながら、遊び方やスケジュールを迷わず読めるように整理したサイト。",
    metrics: "Story + Schedule",
  },
];

const projects: Project[] = [
  {
    slug: "koe-no-yukue-art",
    name: "声の行方",
    type: "Media Art / Team Project",
    oneLine:
      "声を光・音・映像に変換し、対話と行動のあいだを体験化するメディアアート展示。",
    background:
      "SNS や話し合いの場で生まれる声が、次の行動につながらず流れていく違和感から生まれた作品。オンラインでは声が流れ、対面では人が集まりにくい。その「あいだ」を空間として立ち上げることが出発点になっている。",
    concept:
      "来場者の声や言葉を、光・音・映像として空間に現れさせ、互いに影響し合いながら消えていく体験へ変換する。『声を出す』ことの価値を取り戻し、対話と共創のきっかけをつくることを目指している。",
    period:
      "2026年1月26日〜1月28日 一次展示 / 2026年1月26日〜2月28日 クラウドファンディング / 2026年3月15日〜3月17日 二次展示",
    role: [
      "Ma LAB 代表",
      "プロジェクトリーダー",
      "高校生 7 人によるチーム制作",
    ],
    process: [
      "一次展示を校内向けに実施し、限られた環境の中で作品体験を成立させた。",
      "クラウドファンディングを実施し、機材導入や改修のための資金を集めた。",
      "二次展示では、音響・映像・空間演出を拡張し、一般来場者向けに作品体験の密度を引き上げた。",
    ],
    tech: [
      "立体音響（複数スピーカー）",
      "フルカラー LED",
      "プロジェクションマッピング",
      "カメラ追従による反応",
      "声・文字データのリアルタイム変換",
    ],
    innovations: [
      "『声が生まれる → 空間に変換される → 影響し合う → 消えていく』という流れを、体験として順序立てて設計している。",
      "オンラインとオフラインの断絶を、説明ではなく体験として感じられる構成にしている。",
      "一次展示で成立条件を見極め、二次展示で空間演出と機材面を強化する二段階の進め方を取っている。",
    ],
    results: [
      "CAMPFIRE で目標 300,000 円に対して 339,500 円を集め、113% を達成した。",
      "支援者は 13 人。展示の拡張に必要な機材強化や制作費に充てられた。",
      "校内展示と一般公開の二段階で作品を公開し、展示と発信の両方を成立させた。",
    ],
    links: [
      {
        label: "作品サイト",
        href: "https://malab-ritsumori.netlify.app/",
      },
      {
        label: "クラウドファンディング",
        href: "https://camp-fire.jp/projects/916611/view",
      },
    ],
    strengths: [
      "テーマを体験へ翻訳する構想力",
      "チームを率いて公開まで進める推進力",
      "展示と発信を一続きで設計する視点",
    ],
    visuals: [
      "展示の全景写真を追加予定",
      "来場者が体験している様子の写真を追加予定",
      "空間演出の詳細写真を追加予定",
    ],
  },
  {
    slug: "koe-no-yukue-site",
    name: "声の行方 公式サイト",
    type: "Website / Information Design",
    oneLine:
      "展示概要、背景、展示情報、支援導線を一つの流れに整理した『声の行方』の特設サイト。",
    background:
      "メディアアート作品は世界観だけでなく、展示日程、会場、予約、支援、取材窓口まで分かりやすく伝える必要があった。来場者、支援者、取材関係者のそれぞれが必要な情報へ迷わず到達できる構成が求められた。",
    concept:
      "作品の雰囲気を壊さずに、作品概要、展示情報、活動風景、支援、取材という複数の導線を一画面の流れとして整理する。アート作品のための特設サイトでありながら、必要情報はすぐに取れる設計を目指した。",
    period: "展示とクラウドファンディングの公開期間に合わせて制作・運用",
    role: [
      "Web サイト制作",
      "情報設計",
      "UI の整理と公開導線の構成",
    ],
    process: [
      "ファーストビューで作品の一文コンセプトと展示情報を提示し、概要へ自然に入れる流れをつくった。",
      "作品背景、体験内容、展示情報、支援、取材窓口までを順番に読める構成に整理した。",
      "クラウドファンディングや SNS、取材資料など、外部導線をサイト内のトーンを崩さずにつないだ。",
    ],
    tech: [
      "静的 Web サイトとして公開",
      "展示情報、支援導線、SNS 導線を一画面に集約",
      "Netlify 上で公開中",
    ],
    innovations: [
      "作品紹介と運営情報の両方を扱うため、情報の温度差が出すぎないようにセクションの順序を整えている。",
      "『世界観を伝えるページ』と『来場に必要な情報』のどちらも成立するよう、視線の流れを意識している。",
      "支援や取材のような実務的な導線も、作品サイト全体の空気感から浮かないように整理している。",
    ],
    results: [
      "作品概要、展示情報、支援、取材窓口までを一貫した導線として公開できた。",
      "『声の行方』の背景を外部に説明するための基盤として機能している。",
      "現在も公開されており、作品のアーカイブとしても読める構成になっている。",
    ],
    links: [
      {
        label: "公開サイト",
        href: "https://malab-ritsumori.netlify.app/",
      },
    ],
    strengths: [
      "世界観と実用情報を両立させる情報設計力",
      "読みやすさを保ちながら個性を残す UI 設計",
      "展示・広報・支援をつなぐ Web 制作力",
    ],
    visuals: [
      "PC 表示のスクリーンショットを追加予定",
      "モバイル表示のスクリーンショットを追加予定",
      "支援導線や展示情報セクションの詳細画像を追加予定",
    ],
  },
  {
    slug: "kyusyokutime-site",
    name: "お腹が鳴り止まない給食タイムからの脱出",
    type: "Website / Event Promotion",
    oneLine:
      "謎解き公演の世界観と参加導線を、楽しく読みやすく整理したイベント告知サイト。",
    background:
      "謎解き公演では、ストーリーの楽しさを伝えながら、参加形式、遊び方、スケジュール、料金を分かりやすく整理する必要がある。楽しさだけに寄せると情報が埋もれ、情報だけに寄せると世界観が弱くなるため、その両立が課題になる。",
    concept:
      "『給食当番がストライキした』という印象的な導入を入り口にしつつ、プレイ形式、過去公演の様子、遊び方、スケジュール、チケット情報へ自然に読み進められる構成にする。遊び心を残しながら、必要情報は迷わず取れるサイトを目指した。",
    period: "2月1日の公演情報に合わせて公開",
    role: [
      "Web サイト制作",
      "情報整理",
      "ストーリーと案内情報の両立",
    ],
    process: [
      "最初にストーリーを見せて、公演の雰囲気を短時間で伝える構成にした。",
      "その後にプレイ形式や過去公演の様子を置き、参加イメージを持てる順序に整理した。",
      "最後に遊び方、スケジュール、チケット情報をまとめ、参加判断に必要な情報を取りやすくした。",
    ],
    tech: [
      "静的 Web サイトとして公開",
      "画像ギャラリーと案内情報を組み合わせた構成",
      "Netlify 上で公開中",
    ],
    innovations: [
      "子ども向けの楽しい空気感を保ちながら、案内ページとして読みにくくならないバランスを取っている。",
      "ストーリー、プレイ形式、参加方法の順に情報を並べることで、感情と実用の両方に対応している。",
      "過去公演の様子を見せることで、参加前の不安を減らしやすい構成にしている。",
    ],
    results: [
      "公演の世界観、参加方法、日時、料金を一つのページで整理して見せられる形にした。",
      "ストーリー性のあるイベントでも、必要な案内情報を崩さずに掲載できている。",
      "現在も公開されており、イベント紹介の実例として見せられる。",
    ],
    links: [
      {
        label: "公開サイト",
        href: "https://kanananona-kyusyokutime.netlify.app/",
      },
    ],
    strengths: [
      "遊び心のあるテーマを整理して見せる構成力",
      "世界観と可読性を両立する Web デザイン力",
      "イベント情報を迷わず届ける情報整理力",
    ],
    visuals: [
      "トップ画面のスクリーンショットを追加予定",
      "プレイ形式セクションのスクリーンショットを追加予定",
      "過去公演ギャラリーのスクリーンショットを追加予定",
    ],
  },
];

const focusAreas = [
  {
    title: "Robotics / Technical Development",
    body:
      "装飾ではなく、仕組み、制御、成立条件の整理で技術的な強さをつくることに関心があります。",
  },
  {
    title: "Media Art / Experience Design",
    body:
      "作品の背景や問いを、体験の流れとして伝える構成を重視しています。",
  },
  {
    title: "Web / Information Design",
    body:
      "読み手が短時間で判断できるよう、情報の順序と導線を設計することを大切にしています。",
  },
];

const contactNotes = [
  "GitHub は今後追加予定",
  "メールアドレスは掲載用のものを後で追加予定",
  "公開済みの作品リンクは各プロジェクト欄から確認できます",
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
              <span className="tracking-[0.26em] uppercase">Watanabe Kotaro</span>
            </div>
            <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] sm:text-[0.78rem]">
              <a className="transition hover:text-white" href="#roadmap">
                Roadmap
              </a>
              <a className="transition hover:text-white" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-white" href="#about">
                About
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <div className="grid gap-8 pt-10 lg:grid-cols-[1.36fr_0.84fr] lg:pt-16">
            <div className="rounded-[2rem] border border-white/10 bg-panel/90 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur sm:p-9">
              <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">
                Robotics / Media Art / Web
              </p>
              <div className="mt-5 max-w-4xl">
                <h1 className="font-[family:var(--font-display)] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                  渡邉 幸大朗
                </h1>
                <div className="mt-4 flex min-h-[3.25rem] items-start gap-3 overflow-hidden sm:min-h-[4rem]">
                  <span className="mt-1 text-lg text-muted sm:text-xl">building through</span>
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
                慶應義塾大学総合政策学部 1 年。立命館守山中学校・高等学校を経て、
                ロボティクス、技術開発、メディアアート、Web 制作を横断しながら、
                背景や判断の見えるアウトプットをつくることを大切にしています。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center rounded-full border border-accent/30 bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:translate-y-[-1px] hover:bg-accent-bright"
                  href="#projects"
                >
                  Selected Works
                </a>
                <a
                  className="inline-flex items-center rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/24 hover:bg-white/4"
                  href="#roadmap"
                >
                  View Roadmap
                </a>
              </div>
            </div>

            <aside className="grid gap-5">
              <div className="rounded-[2rem] border border-white/10 bg-panel-subtle p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">Quick Facts</p>
                <ul className="mt-5 space-y-4">
                  {quickFacts.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/7 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-muted-strong"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(120,166,214,0.1),rgba(255,255,255,0.03))] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-accent-soft">Focus</p>
                <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
                  作品そのものだけでなく、どう考えてつくったかまで読めるポートフォリオを目指しています。
                </p>
                <div className="mt-6 h-14 w-7 rounded-full border border-white/12 p-1.5">
                  <div className="scroll-indicator h-3 w-3 rounded-full bg-accent" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="roadmap">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-14 sm:px-10 lg:px-12 lg:py-18">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Roadmap</p>
              <h2 className="section-title">
                これまでの流れが
                <br />
                ざっくり分かるロードマップ
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted">
              中高での制作の土台から、Web 制作、展示プロジェクト、そして大学で深めたい領域までを一続きで見せる構成です。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {roadmap.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/9 bg-panel-subtle p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.26em] text-accent-soft">
                    {item.label}
                  </p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-4 font-[family:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-muted-strong">{item.body}</p>
                <div className="mt-5 inline-flex rounded-full border border-white/10 px-3 py-1.5 text-xs tracking-[0.14em] text-muted">
                  {item.note}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-panel-deep/85">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-14 sm:px-10 lg:px-12 lg:py-18">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Selected Works</p>
              <h2 className="section-title">
                まず見せたい 3 つの代表作
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted">
              アート作品、展示サイト、イベントサイトの 3 つを並べ、企画・体験設計・情報整理の幅が見えるようにしています。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projectCards.map((project) => (
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-14 sm:px-10 lg:px-12 lg:py-18">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-panel-subtle"
            >
              <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 lg:border-r lg:border-b-0 lg:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.24em] text-accent-soft">
                    {project.type}
                  </p>
                  <h3 className="mt-3 font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-white">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-muted-strong">
                    {project.oneLine}
                  </p>

                  <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/15 bg-background-soft p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted">
                      Main Visual
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-strong">
                      {project.visuals.map((visual) => (
                        <li key={visual}>{visual}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 grid gap-4">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-muted">
                        制作期間
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted-strong">
                        {project.period}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-muted">
                        担当領域
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-strong">
                        {project.role.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-muted">
                        公開物
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs tracking-[0.12em] text-foreground transition hover:border-accent/35 hover:text-accent-soft"
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <section className="rounded-[1.5rem] border border-white/8 bg-background-soft p-5">
                      <p className="text-sm uppercase tracking-[0.24em] text-muted">
                        背景・目的
                      </p>
                      <p className="mt-4 text-sm leading-8 text-muted-strong">
                        {project.background}
                      </p>
                    </section>

                    <section className="rounded-[1.5rem] border border-white/8 bg-background-soft p-5">
                      <p className="text-sm uppercase tracking-[0.24em] text-muted">
                        コンセプト
                      </p>
                      <p className="mt-4 text-sm leading-8 text-muted-strong">
                        {project.concept}
                      </p>
                    </section>

                    <section className="rounded-[1.5rem] border border-white/8 bg-background-soft p-5 md:col-span-2">
                      <p className="text-sm uppercase tracking-[0.24em] text-muted">
                        制作プロセス
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-8 text-muted-strong">
                        {project.process.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="rounded-[1.5rem] border border-white/8 bg-background-soft p-5">
                      <p className="text-sm uppercase tracking-[0.24em] text-muted">
                        技術構成
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-8 text-muted-strong">
                        {project.tech.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="rounded-[1.5rem] border border-white/8 bg-background-soft p-5">
                      <p className="text-sm uppercase tracking-[0.24em] text-muted">
                        工夫した点
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-8 text-muted-strong">
                        {project.innovations.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="rounded-[1.5rem] border border-white/8 bg-background-soft p-5">
                      <p className="text-sm uppercase tracking-[0.24em] text-muted">
                        結果・成果
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-8 text-muted-strong">
                        {project.results.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="rounded-[1.5rem] border border-sky-300/12 bg-sky-300/[0.06] p-5">
                      <p className="text-sm uppercase tracking-[0.24em] text-sky-200/75">
                        このプロジェクトで伝わる強み
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-8 text-sky-50">
                        {project.strengths.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/8 bg-panel-deep/85">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-14 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-18">
          <article className="rounded-[2rem] border border-white/9 bg-panel p-7">
            <p className="section-kicker">About</p>
            <h2 className="section-title">
              ロボティクス、技術開発、Web を
              <br />
              一つの流れで捉える
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-muted-strong">
              <p>
                制作では、見た目だけでなく『なぜこの形にしたのか』が伝わることを重視しています。
                作品、展示、Web サイトのどれであっても、背景、目的、判断、結果が読み取れる構成にしたいと考えています。
              </p>
              <p>
                ロボティクス感は、派手な未来表現よりも、構造の明快さ、試作と改善、整った情報設計で出したいタイプです。
                静かでも、細部まで詰めてあることが伝わるデザインに惹かれます。
              </p>
              <p>
                これからは、大学での学びと並行して、ロボティクス、技術開発、制作プロセスの見えるアウトプットをさらに深めていきたいです。
              </p>
            </div>
          </article>

          <aside className="grid gap-5">
            {focusAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/9 bg-white/[0.03] p-6"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-accent-soft">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-14 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-20">
          <article className="rounded-[2rem] border border-white/9 bg-panel p-7">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">
              最後は静かに、
              <br />
              読み手が次の行動を取りやすくする
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-strong">
              連絡先はこれから整備していく前提で、今は公開済みの作品をしっかり見せる構成にしています。
              GitHub やメールアドレスを追加すると、ポートフォリオとしてさらに完成度が上がります。
            </p>
          </article>

          <div className="grid gap-4">
            {contactNotes.map((item) => (
              <div
                key={item}
                className="rounded-[1.7rem] border border-white/9 bg-white/[0.03] px-5 py-5"
              >
                <p className="text-sm leading-7 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
