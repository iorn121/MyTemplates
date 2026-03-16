# astro-prototype-template

Astro + React + Tailwind + nanostores + View Transitions を統合したプロトタイプ開発用テンプレート。

## Stack

- [Astro](https://astro.build/) v5 — ページルーティング / View Transitions / コンテンツコレクション
- [React](https://react.dev/) v18 — インタラクティブなUIコンポーネント（Islands）
- [Tailwind CSS](https://tailwindcss.com/) v3 — ユーティリティファーストなスタイリング
- [nanostores](https://github.com/nanostores/nanostores) — アイランド間の軽量状態管理
- [Framer Motion](https://www.framer.com/motion/) — アニメーション
- [Lucide React](https://lucide.dev/) — アイコン

## Usage

```bash
npm install
npm run dev
```

## Scripts

| コマンド            | 内容                            |
| ------------------- | ------------------------------- |
| `npm run dev`       | 開発サーバー起動                |
| `npm run build`     | 静的ファイルをビルド            |
| `npm run preview`   | ビルド結果をプレビュー          |
| `npm run lint`      | ESLintでコードチェック          |
| `npm run format`    | Prettierでフォーマット          |
| `npm run typecheck` | 型チェック（astro check + tsc） |

## Structure

```
src/
├── content/
│   ├── config.ts       # コンテンツコレクションの型定義
│   └── questions/      # Markdownコンテンツ置き場
├── layouts/
│   └── Layout.astro    # View Transitions込みの共通レイアウト
├── pages/
│   └── index.astro     # トップページ
├── store/
│   └── global.ts       # nanostoresによるグローバル状態
└── styles/
    └── global.css      # Tailwindベース + カスタムアニメーション
```

## GitHub Template として使う

1. GitHubのリポジトリ設定で **"Template repository"** を有効にする
2. 新規プロジェクト作成時に **"Use this template"** を選択
3. `npm install` して開発開始
