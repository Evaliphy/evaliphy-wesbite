# Evaliphy (Beta) - Simplify End-to-End AI Testing | Open Source | No Lock-In

Evaliphy simplifies end-to-end AI testing by treating your AI system like a black box.

Instead of research-focused frameworks or fine-tuning pipelines, Evaliphy lets you:
- Test your real AI API (black-box, no internals)
- Write assertions in TypeScript
- Run in CI like your other tests
- Get human-readable reports with actionable reasoning

No Python. No ML overhead. No vendor lock-in.

**Works with any black-box AI system** — RAG, agents, chatbots, content generation, summarization, and more.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Why Evaliphy Exists

Most AI evaluation frameworks are built for research. They're amazing if you're fine-tuning models or benchmarking datasets. But they're not built for developers shipping products.

### The Developer Problem

You have:
- ✅ A RAG system in production (or agents, chatbots, summarizers, etc.)
- ✅ A CI/CD pipeline
- ✅ TypeScript/JavaScript code
- ❌ No way to test your AI system like you test your APIs

### The Evaliphy Approach

We took a different path. Evaliphy lets you:
- Test via HTTP (your real API)
- Write in TypeScript (your language)
- Run in CI (your pipeline)
- Use simple assertions (your mental model)

## Quick Comparison

| Feature | Evaliphy | DeepEval / Ragas | Promptfoo |
| --- | --- | --- | --- |
| **Best For** | Developers testing in CI | Researchers / Fine-tuning | LLM Prompt Testing |
| **Language** | TypeScript / Node.js | Python | JavaScript / Python |
| **Testing Approach** | Black-box API calls | White-box Pipeline | Prompt-focused |
| **Workflow** | CI/CD Pipelines | Notebooks / Scripts | CLI / Web UI |
| **Setup** | `npm install -g evaliphy` | `pip install deepeval` | `npx promptfoo` |
| **Use Case** | "Does my RAG/AI API work?" | "How good is my model?" | "Is my prompt right?" |
