import Link from "next/link";

const stats = ["恋愛タイプ", "相性スコア", "脈あり度", "送る文面"];

export function Hero() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="absolute inset-x-0 top-12 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-pink-200/40 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex rounded-full border border-pink-200 bg-white/70 px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm">
            20代の恋に、やさしい占いナビ
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-stone-950 sm:text-6xl">
            恋の迷いを、
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">次の一歩</span>
            に変える。
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-stone-600">
            コイヨミは、恋愛タイプ・相性・LINE/DM文面をスマホで気軽に診断できる恋愛占いアプリです。AI APIや課金機能をあとから追加しやすいMVPとして構成しています。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#forms" className="rounded-full bg-pink-500 px-6 py-3 text-center font-semibold text-white shadow-xl shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-pink-600">
              診断をはじめる
            </Link>
            <Link href="/result" className="rounded-full border border-pink-200 bg-white/75 px-6 py-3 text-center font-semibold text-stone-800 transition hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-600">
              結果サンプルを見る
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-2xl shadow-pink-100 backdrop-blur">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-pink-100 via-white to-violet-100 p-5">
            <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
              <p className="text-sm font-semibold text-pink-500">今日のコイヨミ</p>
              <h2 className="mt-3 text-2xl font-bold text-stone-900">やさしい観察者タイプ</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">相手の変化に気づける一方で、考えすぎて動けなくなることも。短い質問で会話の余白を残すのが吉。</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <div key={stat} className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-xs text-stone-500">{stat}</p>
                    <p className="mt-1 text-xl font-bold text-stone-900">{index === 1 ? "78" : index === 2 ? "72" : "◎"}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
