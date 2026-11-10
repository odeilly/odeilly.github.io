---
slug: azure_roadmap
date: 2025-09-18
categories:
  - 技術
tags:
  - Azure
draft: true
---

# Azure 資格 学習ロードマップ

<!-- more -->

## ステップ 1. クラウドの基礎を固める（Fundamentals）

### 目標資格

- AZ-900: Microsoft Azure Fundamentals
- （興味に応じて）DP-900: Data Fundamentals / AI-900: AI Fundamentals

### 学習内容

- クラウドの基本概念（IaaS, PaaS, SaaS、スケーラビリティ、冗長化）
- Azure の主要サービス概要（VM、Storage、Virtual Network）
- サブスクリプションとコスト管理
- セキュリティ・コンプライアンスの基礎

### 学習リソース

- Microsoft Learn（無料、モジュール形式）
- 模擬試験（Whizlabs、Udemy など）
- Azure 無料アカウント（30日/¥22,500分クレジット）

## ステップ 2. 運用 or 開発の中級（Associate）

### 選択肢 1: 管理・運用寄り

- AZ-104: Azure Administrator Associate
  - VM 管理、ネットワーク設定、RBAC、監視、バックアップ

### 選択肢 2: 開発寄り

- AZ-204: Azure Developer Associate
  - Azure Functions、App Service、Cosmos DB、Key Vault、CI/CD

### 学習内容

- ポータル、CLI、PowerShell を実際に触る
- リソースのデプロイ（Bicep / ARM テンプレート）
- セキュリティ設定（Identity、Access Control）
- 自動化（DevOps の初歩）

### 学習リソース

- Hands-on Labs（Microsoft Learn のサンドボックス）
- GitHub Actions or Azure DevOps のサンプルリポジトリ
- 公式模擬試験

## ステップ 3. 専門性を広げる（Data/AI/Security）

### データ・分析志向

- DP-203: Data Engineer Associate
  - Data Lake、Synapse、Databricks、ETL パイプライン設計

### AI 志向

- AI-102: Azure AI Engineer Associate
  - Cognitive Services、OpenAI API、ML モデルのデプロイ

### セキュリティ志向

- SC-300: Identity and Access Administrator
  - Azure AD、条件付きアクセス、ゼロトラスト設計

## ステップ 4. アーキテクト/上級資格（Expert）

### 目標資格

- AZ-305: Solutions Architect Expert
  - 可用性設計、ハイブリッド構成、セキュリティ最適化
- AZ-400: DevOps Engineer Expert
  - CI/CD、IaC（Terraform/Bicep）、モニタリング戦略

### 学習内容

- システム全体設計（可用性・コスト・セキュリティ）
- 組織全体でのクラウド導入戦略
- 大規模開発の DevOps 文化

## 学習の進め方（モデルプラン）

1. **1か月目**
   - AZ-900 学習＋受験（クラウド全体像を掴む）
   - 並行して Azure 無料枠で VM/Storage を試す

2. **2〜4か月目**
   - Associate レベル（AZ-104 か AZ-204 を選択）
   - ハンズオンで実際にデプロイ／構築

3. **5〜7か月目**
   - 専門性（DP-203 または AI-102）を追加
   - データ分析/AI サービスを使ってミニプロジェクトを作る

4. **8か月目以降**
   - AZ-305 か AZ-400 に挑戦
   - 実務に近いシナリオを題材に学習

!!! note
    この流れなら、**1年以内に Associate + Specialty + Expert のラインまで到達**可能。
