import type { DiagnosisResult } from "@/data/mockResult";

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <p className="font-semibold text-stone-800">{label}</p>
        <p className="text-2xl font-bold text-pink-500">{value}</p>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-pink-100">
        <div className="h-full rounded-full bg-gradient-to-r from-pink-400 to-violet-400" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function ResultCard({ result }: { result: DiagnosisResult }) {
  return (
    <article className="rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-pink-100 backdrop-blur sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-500">Koiyomi Result</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-950 sm:text-5xl">{result.title}</h1>
      <p className="mt-4 text-lg leading-9 text-stone-600">{result.lead}</p>

      <div className="mt-8 rounded-3xl bg-gradient-to-br from-pink-100 via-white to-violet-100 p-5">
        <p className="text-sm font-semibold text-stone-500">恋愛タイプ</p>
        <h2 className="mt-2 text-2xl font-bold text-stone-900">{result.loveType}</h2>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Meter label="相性スコア" value={result.compatibilityScore} />
        <Meter label="脈あり度" value={result.interestLevel} />
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <section className="rounded-3xl bg-white/75 p-5">
          <h3 className="font-bold text-stone-900">注意点</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-600">
            {result.cautions.map((item) => <li key={item}>・{item}</li>)}
          </ul>
        </section>
        <section className="rounded-3xl bg-white/75 p-5">
          <h3 className="font-bold text-stone-900">次に取るべき行動</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-600">
            {result.nextActions.map((item) => <li key={item}>・{item}</li>)}
          </ul>
        </section>
        <section className="rounded-3xl bg-white/75 p-5">
          <h3 className="font-bold text-stone-900">送るべきメッセージ案</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-600">
            {result.messageSuggestions.map((item) => <li key={item}>「{item}」</li>)}
          </ul>
        </section>
      </div>
    </article>
  );
}
