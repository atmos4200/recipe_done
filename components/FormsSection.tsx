import { diagnosisForms } from "@/lib/forms";
import { DiagnosisFormCard } from "./DiagnosisFormCard";
import { SectionHeader } from "./SectionHeader";

export function FormsSection() {
  return (
    <section id="forms" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="MVP Forms"
          title="3つの診断をまずは仮結果で体験"
          description="入力内容は保存せず、送信後は診断種類に応じたサンプル結果を表示します。API接続・DB保存・Stripe課金は後から差し込めるようフォーム単位で分離しています。"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {diagnosisForms.map((form) => (
            <DiagnosisFormCard key={form.id} form={form} />
          ))}
        </div>
      </div>
    </section>
  );
}
