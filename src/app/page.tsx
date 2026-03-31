const skills = [
  "Next.js / React",
  "TypeScript",
  "UI Design",
  "SEO Basics",
];

const works = [
  {
    title: "Portfolio Site",
    summary:
      "自分の強みや制作実績を、読みやすさと世界観の両方を意識して伝えるためのベースサイトです。",
  },
  {
    title: "Landing Page",
    summary:
      "サービスの魅力を短時間で伝えるための情報設計と、問い合わせにつながる導線設計を想定しています。",
  },
  {
    title: "Blog / Notes",
    summary:
      "学んだことや制作の裏側を記事として蓄積し、検索流入と信頼づくりに活かすためのコンテンツ枠です。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(255,245,232,0.95)_30%,_#f3ecde_70%)] text-stone-900">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-6 rounded-[2rem] border border-stone-900/10 bg-white/70 p-6 shadow-[0_20px_80px_rgba(62,39,20,0.08)] backdrop-blur md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                Portfolio Starter
              </p>
              <h1 className="mt-3 font-[family:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
                あなたの名前が伝わる
                <br />
                ポートフォリオの土台
              </h1>
            </div>
            <div className="rounded-full border border-stone-900/10 bg-stone-900 px-4 py-2 text-sm text-stone-50">
              Next.js + TypeScript
            </div>
          </div>

          <p className="max-w-3xl text-base leading-8 text-stone-700 sm:text-lg">
            このサイトは、自己紹介・制作実績・連絡先を一つにまとめるためのスタート地点です。
            公開したあとも育てやすいように、最初から SEO の基本設定と更新しやすい構成で作っています。
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
              href="#works"
            >
              実績セクションを見る
            </a>
            <a
              className="rounded-full border border-stone-900/15 px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-white"
              href="#contact"
            >
              連絡先の置き場所を見る
            </a>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[2rem] border border-stone-900/10 bg-[#fffaf2] p-7 shadow-[0_20px_70px_rgba(93,55,22,0.08)]">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-800/70">
              About
            </p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-2xl font-semibold">
              自己紹介を書く場所
            </h2>
            <p className="mt-4 leading-8 text-stone-700">
              ここには「どんな仕事をしている人か」「何が得意か」「どんな制作に興味があるか」を
              2〜4文くらいで書くのがおすすめです。写真、肩書き、住んでいる地域、好きな技術などを加えると、
              人柄まで伝わりやすくなります。
            </p>
          </article>

          <aside className="rounded-[2rem] border border-stone-900/10 bg-stone-900 p-7 text-stone-50 shadow-[0_20px_70px_rgba(28,25,23,0.22)]">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
              Skills
            </p>
            <ul className="mt-5 space-y-3 text-lg">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section
          id="works"
          className="rounded-[2rem] border border-stone-900/10 bg-white/80 p-7 shadow-[0_20px_70px_rgba(62,39,20,0.07)]"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Works
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-[family:var(--font-display)] text-2xl font-semibold">
                制作実績セクション
              </h2>
              <p className="mt-2 max-w-2xl leading-8 text-stone-700">
                今はサンプルですが、実案件や自主制作に差し替えるだけでポートフォリオとして育てられます。
              </p>
            </div>
            <p className="text-sm text-stone-500">
              各カードに画像・担当範囲・URL を追加していきましょう。
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {works.map((work) => (
              <article
                key={work.title}
                className="rounded-[1.5rem] border border-stone-900/10 bg-stone-50 p-5"
              >
                <div className="rounded-2xl bg-[linear-gradient(135deg,_#d6c5a8,_#f8ede1,_#fffdf8)] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                    Sample Project
                  </p>
                  <h3 className="mt-3 font-[family:var(--font-display)] text-xl font-semibold">
                    {work.title}
                  </h3>
                </div>
                <p className="mt-4 leading-7 text-stone-700">{work.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-stone-900/10 bg-white/75 p-7">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              SEO
            </p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-2xl font-semibold">
              検索に出てきやすくするための初期設定
            </h2>
            <p className="mt-4 leading-8 text-stone-700">
              このプロジェクトには title・description・OGP・robots.txt・sitemap.xml
              の土台を入れています。公開後に独自ドメインを設定し、Google Search Console
              に登録すると、検索に載る準備がぐっと進みます。
            </p>
          </article>

          <article
            id="contact"
            className="rounded-[2rem] border border-stone-900/10 bg-[#1f1812] p-7 text-stone-50"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
              Contact
            </p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-2xl font-semibold">
              連絡先セクション
            </h2>
            <p className="mt-4 leading-8 text-stone-300">
              メールアドレス、X、GitHub、Instagram、Wantedly など、見てほしい導線をここに置きます。
              実際に公開するときは、ボタンやフォームに差し替えていきましょう。
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}
