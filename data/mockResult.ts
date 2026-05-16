export type DiagnosisKind = "love-type" | "compatibility" | "message";

export type DiagnosisResult = {
  kind: DiagnosisKind;
  title: string;
  lead: string;
  loveType: string;
  compatibilityScore: number;
  interestLevel: number;
  cautions: string[];
  nextActions: string[];
  messageSuggestions: string[];
};

const shared = {
  cautions: [
    "返信速度だけで気持ちを決めつけず、会話の中身と相手の生活リズムも見てみましょう。",
    "一度に距離を詰めすぎるより、相手が返しやすい短めの話題を選ぶのがおすすめです。",
  ],
  nextActions: [
    "直近で相手が話していた趣味・仕事・学校の話題をひとつ拾って質問する。",
    "週末や帰宅後など、相手が返しやすい時間帯に軽いメッセージを送る。",
    "次の会話で小さな共通点を見つけたら、15〜30分で済む予定に誘ってみる。",
  ],
  messageSuggestions: [
    "この前話してた〇〇、ちょっと気になって調べてみた！おすすめあったら教えてほしいな。",
    "最近忙しそうだけど無理してない？落ち着いたらまたゆっくり話そ。",
    "〇〇好きって言ってたよね。今度よかったら一緒に行ってみない？",
  ],
};

export const mockResults: Record<DiagnosisKind, DiagnosisResult> = {
  "love-type": {
    kind: "love-type",
    title: "恋愛タイプ診断の結果",
    lead: "あなたは、安心感を大切にしながら少しずつ距離を縮めるタイプです。",
    loveType: "やさしい観察者タイプ",
    compatibilityScore: 78,
    interestLevel: 72,
    ...shared,
  },
  compatibility: {
    kind: "compatibility",
    title: "相性診断の結果",
    lead: "ふたりは会話のテンポが合いやすく、自然体で関係を育てられる相性です。",
    loveType: "じっくり共感タイプ",
    compatibilityScore: 84,
    interestLevel: 68,
    ...shared,
  },
  message: {
    kind: "message",
    title: "LINE/DM添削の結果",
    lead: "今の文面は好印象です。少しだけ相手が返しやすい質問を足すと、会話が続きやすくなります。",
    loveType: "素直なアプローチタイプ",
    compatibilityScore: 76,
    interestLevel: 81,
    ...shared,
  },
};

export const defaultResult = mockResults["love-type"];
