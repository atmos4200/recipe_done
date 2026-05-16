import type { DiagnosisForm } from "@/lib/forms";

const accentClass: Record<DiagnosisForm["id"], string> = {
  "love-type": "from-pink-500 to-rose-400",
  compatibility: "from-violet-500 to-fuchsia-400",
  message: "from-stone-800 to-pink-500",
};

export function DiagnosisFormCard({ form }: { form: DiagnosisForm }) {
  return (
    <form id={form.id === "love-type" ? "type" : form.id} action="/result" className="flex h-full flex-col rounded-[1.75rem] border border-white/80 bg-white/80 p-5 shadow-xl shadow-pink-100/70 backdrop-blur">
      <input type="hidden" name="kind" value={form.id} />
      <div className={`mb-5 h-1.5 w-24 rounded-full bg-gradient-to-r ${accentClass[form.id]}`} />
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-500">{form.eyebrow}</p>
      <h3 className="mt-2 text-2xl font-bold text-stone-900">{form.title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-600">{form.description}</p>
      <div className="mt-6 flex flex-1 flex-col gap-4">
        {form.fields.map((field) => (
          <label key={field.id} className="block">
            <span className="text-sm font-semibold text-stone-700">{field.label}</span>
            {field.type === "textarea" ? (
              <textarea name={field.id} rows={4} placeholder={field.placeholder} className="mt-2 w-full rounded-2xl border border-pink-100 bg-white/90 px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100" />
            ) : field.type === "select" ? (
              <select name={field.id} defaultValue="" className="mt-2 w-full rounded-2xl border border-pink-100 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-100">
                <option value="" disabled>選択してください</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input name={field.id} type="text" placeholder={field.placeholder} className="mt-2 w-full rounded-2xl border border-pink-100 bg-white/90 px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100" />
            )}
          </label>
        ))}
      </div>
      <button type="submit" className="mt-6 rounded-full bg-stone-900 px-5 py-3 font-semibold text-white shadow-lg shadow-stone-200 transition hover:-translate-y-0.5 hover:bg-pink-500">
        {form.submitLabel}
      </button>
    </form>
  );
}
