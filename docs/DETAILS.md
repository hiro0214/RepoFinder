# 技術スタック詳細

## 技術構成

### フロントエンド

- React
- Next.js（App Router）
- CSS Modules ➡️ コンポーネントのスタイリング
- React Hook Form ➡️ フォーム管理
- Zod ➡️ 型安全なバリデーション

### API

- Github API

### Linter / Formatter

- Biome ➡️ ts/tsxのlint & format
- Stylelint ➡️ CSSのlint
- Prettier ➡️ CSSのformat
- Lefthook ➡️ コミット前にlint/formatを自動実行

### テスト

- Vitest ➡️ ユニットテスト
- Storybook ➡️ UIコンポーネントのテスト

## ディレクトリ構成

アプリケーション全体のディレクトリ構成は下記になっています。

```
src
├─ app               # App Router配下。ページやレイアウトを管理
│  ├─ _components    # appディレクトリ配下用のUIコンポーネント
│  ├─ (main)         # メインのルーティング用ディレクトリ
│  │  ├─ (top)       # トップページ
│  │  └─ repos       # 詳細ページ
│  ├─ error.tsx      # グローバルエラーページ
│  ├─ layout.tsx     # 共通レイアウト
│  └─ not-found.tsx  # 404ページ
│
├─ components    # 再利用可能なUIコンポーネント
│  ├─ atoms      # 最小単位のコンポーネント
│  └─ molucules  # 複合コンポーネント
│
├─ services  # APIクライアント
│
├─ styles    # グローバルスタイル
│
└─ utils       # 汎用的なユーティリティディレクトリ
   ├─ configs  # 定数などの設定ファイル
   ├─ helpers  # 補助関数
   └─ hooks    # カスタムフック
```

また、(main)直下のページディレクトリの構成は下記をベースにしています。\
※トップページのSearchFormをサンプルにしています。

```
(top)
├─ _components    # ページ専用のコンポーネントディレクトリ
│  └─ SearchForm  # 検索フォームコンポーネント
│     ├─ _internal                      # コンポーネント内部の実装詳細
│     │  ├─ Container.stories.tsx       # ContainerのStorybook定義
│     │  ├─ Container.tsx               # fetchやロジックを持つコンポーネント（Server / Client）
│     │  ├─ Presentational.stories.tsx  # PresentationalのStorybook定義
│     │  ├─ Presentational.tsx          # UIを持つコンポーネント（Client Only）
│     │  ├─ schema.ts                   # Zodによるバリデーションスキーマ
│     │  ├─ style.module.scss           # コンポーネント用のスタイル
│     │  └─ useSearchForm.ts            # Container.tsxで使用するカスタムフック
│     └─ index.tsx                      # 公開用エントリーポイント（外部からはここをimport）
├─ page.tsx           # ルーティング用のファイル
└─ style.module.scss  # ページ全体のスタイル
```

## 設計思想

本アプリケーションは、長期的な保守性と拡張性を重視して設計しました。

### 責務分離

コンポーネント設計の方針として、Container/Presentationalパターンを採用し、\
ロジック・データ取得（Container）とUI部分（Presentational）を分離。\
これにより、ルーティング・ロジック・UIの責務を明確化し、保守性と拡張性を高めた。\
また、app、components、services、utilsとディレクトリを分けていることで役割を明確にし、規模が大きくなっても見通しやすくなるように設計。

### UIコンポーネント設計

UIコンポーネントをAtoms/Moluculesに分割し、粒度を意識した再利用性の高い設計を実現。\
UIの変更が必要な場合でも影響範囲が限定され、規模拡大にも対応可能。\
また、スタイリングにCSS Modulesを採用し、自作でコンポーネントを作成していることで、ライブラリに依存しない柔軟なコンポーネントを作成できるようにした。

### Linterによるコード品質

Linter（Biome、Stylelint）と Formatter（Biome、Prettier）を導入し、Lefthookによりコミット前に自動実行。\
ヒューマンエラーを防ぎ、チーム開発でも一定品質を維持できる仕組みを整備。

## テスト

開発効率と品質を高めるため、ロジックにはVitest、UIにはStorybook（+インタラクションテスト）と、責務ごとにテストを分離して実施。

### Vitest（ユニットテスト）

Node.js上で実行し、主にservicesのAPIクライアントを対象にテスト。\
リクエストの成功パターン、失敗パターンをテストすることで、意図しないバグを早期に検知できるようにしている。

```bash
$ npm run test-vitest
```

### Storybook（UIテスト）

Storybook上でstoriesを活用し、コンポーネント単位での表示や動作を検証。\
状態やパターンごとにUIを体系的に確認できるため、見た目の崩れやパターン漏れを防止できる。\
また、Play Functionを用いてインタラクションテストも導入し、ユーザー操作をシミュレーションすることで、動作が期待通りかを確認できるようにしている。

```bash
$ npm run test-storybook
```
