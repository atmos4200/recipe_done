import type { DiagnosisKind } from "@/data/mockResult";

export type Field = {
  id: string;
  label: string;
  type: "text" | "textarea" | "select";
  placeholder?: string;
  options?: string[];
};

export type DiagnosisForm = {
  id: DiagnosisKind;
  eyebrow: string;
  title: string;
  description: string;
  submitLabel: string;
  fields: Field[];
};

export const diagnosisForms: DiagnosisForm[] = [
  {
    id: "love-type",
    eyebrow: "Love Type",
    title: "自分の恋愛タイプ診断",
    description: "恋愛で大切にしていることや連絡ペースから、あなたの恋愛傾向を仮診断します。",
    submitLabel: "恋愛タイプを診断する",
    fields: [
      { id: "nickname", label: "ニックネーム", type: "text", placeholder: "例：はる" },
      {
        id: "pace",
        label: "理想の連絡ペース",
        type: "select",
        options: ["毎日こまめに", "1日数回で十分", "必要なときに落ち着いて"],
      },
      { id: "value", label: "恋愛で大切にしたいこと", type: "textarea", placeholder: "例：安心感、尊重、自然体でいられること" },
    ],
  },
  {
    id: "compatibility",
    eyebrow: "Compatibility",
    title: "相手との相性診断",
    description: "あなたと気になる相手の関係性・会話の雰囲気から相性スコアを表示します。",
    submitLabel: "相性を診断する",
    fields: [
      { id: "relationship", label: "相手との関係", type: "select", options: ["友達", "職場・学校", "マッチングアプリ", "元恋人", "まだ話したばかり"] },
      { id: "mood", label: "最近の会話の雰囲気", type: "textarea", placeholder: "例：相手から質問も来るけど、誘うと少し迷っている感じ" },
      { id: "concern", label: "気になっていること", type: "text", placeholder: "例：脈ありか分からない" },
    ],
  },
  {
    id: "message",
    eyebrow: "Message Check",
    title: "LINE/DM文面の添削",
    description: "送る前のメッセージを、重すぎない・返しやすい文面に整えるための仮添削です。",
    submitLabel: "文面を添削する",
    fields: [
      { id: "draft", label: "送りたい文面", type: "textarea", placeholder: "例：昨日はありがとう！また時間あるときご飯行けたら嬉しいな" },
      { id: "tone", label: "希望のトーン", type: "select", options: ["自然体", "少し甘め", "友達っぽく", "誠実に"] },
      { id: "goal", label: "このメッセージの目的", type: "text", placeholder: "例：次の約束につなげたい" },
    ],
  },
];
