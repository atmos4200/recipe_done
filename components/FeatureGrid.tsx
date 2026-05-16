const features = [
  { title: "恋愛タイプ", text: "自分の恋愛傾向をやさしい言葉で整理。" },
  { title: "相性スコア", text: "相手との距離感を0〜100で仮表示。" },
  { title: "脈あり度", text: "会話や行動から今の可能性をチェック。" },
  { title: "次の行動", text: "送る文面や誘い方まで具体的に提案。" },
];

export function FeatureGrid() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur">
            <div className="mb-4 grid size-10 place-items-center rounded-2xl bg-pink-100 text-pink-500">✦</div>
            <h3 className="font-bold text-stone-900">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
