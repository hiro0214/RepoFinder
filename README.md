# RepoFinder

## 概要

GithubAPIを用いて、リポジトリの検索をすることができるアプリケーションを作成しました。

## 画面遷移フロー

```mermaid
sequenceDiagram
    participant User as ユーザー
    participant App as アプリ(フロント)
    participant API as GitHub API

    User ->> App: トップページにアクセス
    User ->> App: 検索フォームにキーワード入力
    App ->> API: /search/repositories?q={keyword}
    API -->> App: 検索結果（リポジトリ一覧）
    App -->> User: 一覧を表示

    User ->> App: リポジトリをクリック
    App ->> API: /repos/{owner}/{repo}
    API -->> App: リポジトリ詳細データ
    App -->> User: 詳細ページ表示（タイトル, owner, Star数 など）
```

## バージョン

| package   | version |
| --------- | ------- |
| node      | 22.18.0 |
| npm       | 11.5.2  |
| react     | 19.1.0  |
| next      | 15.5.0  |
| storybook | 9.1.3   |

## セットアップ

- リポジトリのクローン

```bash
$ git clone https://github.com/hiro0214/RepoFinder.git
```

- パッケージのインストール

```bash
$ npm ci
```

- ローカルサーバー起動

```bash
$ npm run dev
```

- アプリケーションビルド

```bash
$ npm run build
```

- storybook起動

```bash
$ npm run storybook
```

## リンク

より詳細な情報は下記にまとめました。

- [技術スタック詳細](./docs/DETAILS.md)
- [工夫した点](./docs/HIGHLIGHT.md)
