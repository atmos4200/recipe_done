import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { ResultCard } from "@/components/ResultCard";
import { defaultResult, mockResults, type DiagnosisKind } from "@/data/mockResult";

function getResult(kind?: string) {
  if (kind && kind in mockResults) {
    return mockResults[kind as DiagnosisKind];
  }

  return defaultResult;
}

export default async function ResultPage({ searchParams }: { searchParams: Promise<{ kind?: string }> }) {
  const { kind } = await searchParams;
  const result = getResult(kind);

  return (
    <AppShell>
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <ResultCard result={result} />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/#forms" className="rounded-full bg-pink-500 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-pink-600">
              別の診断を試す
            </Link>
            <Link href="/" className="rounded-full border border-pink-200 bg-white/75 px-6 py-3 text-center font-semibold text-stone-800 transition hover:-translate-y-0.5 hover:text-pink-500">
              トップに戻る
            </Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
