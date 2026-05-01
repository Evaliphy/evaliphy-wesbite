import Image from "next/image";
import Link from "next/link";
import { CodeBlock } from "./components/CodeBlock";

const exampleCode = `import { evaluate, expect } from 'evaliphy';

evaluate("RAG /api/chat: return policy answer is faithful",
  async ({httpClient}) => {
    const query = "What is your return policy?";
    const res = await httpClient.post("/api/chat", {message: query});
    const data = await res.json<ChatResponse>();

    await expect(query, data.context, data.answer).toBeFaithful({
        threshold: 0.8,
    });

    await expect(query, data.context, data.answer).toBeRelevant();
    await expect(query, data.context, data.answer).toBeGrounded();
    await expect(data.answer).toBeHarmless();
    await expect(data.answer).toBeCoherent();
});
`;

export default async function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Evaliphy",
    operatingSystem: "Node.js",
    applicationCategory: "DeveloperApplication",
    description:
      "Evaliphy simplifies end-to-end AI testing by treating your AI system like a black box. Write assertions like API tests, run in CI, and get human-readable reports with no ML overhead.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Evaliphy",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 flex flex-col items-start space-y-8">
            <div className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-600">
              <span className="mr-2">✨</span> Open Source AI E2E Testing (Open in Beta)
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
                Simplify End-to-End AI Testing
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed max-w-xl">
                Like Playwright for your AI system. Write assertions, run in CI, and get human-readable reports. No ML overhead. No vendor lock-in.
              </p>
            </div>

            <div className="flex flex-col space-y-8">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/docs/quick-start"
                  className="px-8 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
                >
                  Get Started in 5 Minutes
                </Link>
                <Link
                  href="https://github.com/Evaliphy/evaliphy"
                  className="px-8 py-3 border border-zinc-200 text-zinc-900 rounded-lg font-medium hover:bg-zinc-50 transition-colors"
                >
                  View on GitHub
                </Link>
                <Link
                  href="/docs/quick-start"
                  className="px-8 py-3 border border-zinc-200 text-zinc-900 rounded-lg font-medium hover:bg-zinc-50 transition-colors"
                >
                  See Example Test
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 w-full">
            <CodeBlock code={exampleCode} filename="return-policy.eval.ts" />
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-12 border-y border-zinc-100 bg-zinc-50/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
              Works with
            </span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale">
              <span className="text-xl font-bold text-zinc-900">OpenAI</span>
              <span className="text-xl font-bold text-zinc-900">Anthropic</span>
              <span className="text-xl font-bold text-zinc-900">
                OpenRouter
              </span>
              <span className="text-xl font-bold text-zinc-900">Mistral</span>
              <span className="text-xl font-bold text-zinc-900">Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is Evaliphy Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full border-t border-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              Why Evaliphy Exists
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We built Evaliphy because AI testing should feel as straightforward as API testing:
              write assertions, run checks in CI, and get clear reports that drive immediate action.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-900">The Core Gap</h3>
              <ul className="space-y-2 text-zinc-600">
                <li className="flex items-center gap-2">✅ Your teams already ship with assertion-based tests</li>
                <li className="flex items-center gap-2">✅ CI/CD already enforces quality for every release</li>
                <li className="flex items-center gap-2">❌ AI testing often drifts into notebook-heavy, research-first workflows</li>
                <li className="flex items-center gap-2">❌ Results are frequently too metric-heavy for fast product decisions</li>
              </ul>
            </div>
          </div>
          <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-2 overflow-hidden shadow-xl">
            <Image
              src="/images/how-evaliphy-works.png"
              alt="How Evaliphy Works"
              width={800}
              height={600}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Evaliphy Report Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full border-t border-zinc-100">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            Human-readable evaluation reports
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Get detailed, human-readable reports with LLM-judge reasoning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-2 overflow-hidden shadow-2xl">
            <Image
              src="/gif/demo.gif"
              alt="Evaliphy Demo"
              width={1200}
              height={800}
              className="rounded-xl object-cover w-full h-auto"
              unoptimized
            />
          </div>
          <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-2 overflow-hidden shadow-2xl">
            <Image
              src="/gif/report.gif"
              alt="Evaliphy Evaluation Report"
              width={1200}
              height={800}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-50/50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              Four Reasons Teams Choose Evaliphy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-white rounded-lg border border-zinc-100 flex items-center justify-center shadow-sm">
                <svg
                  className="w-5 h-5 text-zinc-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Familiar Mental Model
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Test AI the same way you test APIs. Use assertions your team understands:
                <code className="mx-1 text-zinc-900 font-mono text-sm">
                  toBeFaithful()
                </code>
                ,
                <code className="mx-1 text-zinc-900 font-mono text-sm">
                  toBeRelevant()
                </code>
                , and
                <code className="mx-1 text-zinc-900 font-mono text-sm">
                  toBeGrounded()
                </code>
                .
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 bg-white rounded-lg border border-zinc-100 flex items-center justify-center shadow-sm">
                <svg
                  className="w-5 h-5 text-zinc-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                No Vendor Lock-In
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Open source by default. Bring your own provider, own your test data, and run anywhere from local to CI.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 bg-white rounded-lg border border-zinc-100 flex items-center justify-center shadow-sm">
                <svg
                  className="w-5 h-5 text-zinc-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                No ML Overhead
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                No notebooks, no tuning pipelines, and no research stack. Just write assertions, run tests, and review results.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 bg-white rounded-lg border border-zinc-100 flex items-center justify-center shadow-sm">
                <svg
                  className="w-5 h-5 text-zinc-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Human-Readable Reports
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Understand failures quickly with plain-language reasoning and clear pass/fail outcomes you can act on in CI.
                Run with the standard
                <code className="mx-1 text-zinc-900 font-mono text-sm">
                  npx evaliphy run
                </code>{" "}
                command.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            Quick Comparison
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Compare approaches, not just tools.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="py-4 px-6 text-left text-sm font-semibold text-zinc-900">
                  Aspect
                </th>
                <th className="py-4 px-6 text-center text-sm font-semibold text-zinc-900 bg-zinc-50/50">
                  Evaliphy
                </th>
                <th className="py-4 px-6 text-center text-sm font-semibold text-zinc-500">
                  Research Tools
                </th>
                <th className="py-4 px-6 text-center text-sm font-semibold text-zinc-500">
                  Prompt Testing
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-100">
                <td className="py-4 px-6 text-sm text-zinc-600 font-semibold">
                  Mental Model
                </td>
                <td className="py-4 px-6 text-center text-sm font-medium text-zinc-900 bg-zinc-50/50">
                  Assertions like API tests
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  Research and optimization
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  Prompt iteration loops
                </td>
              </tr>
              <tr className="border-b border-zinc-100">
                <td className="py-4 px-6 text-sm text-zinc-600 font-semibold">Workflow</td>
                <td className="py-4 px-6 text-center text-sm font-medium text-zinc-900 bg-zinc-50/50">
                  CI/CD pipeline
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  Notebook and experiments
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  CLI or web prompt runs
                </td>
              </tr>
              <tr className="border-b border-zinc-100">
                <td className="py-4 px-6 text-sm text-zinc-600 font-semibold">
                  Setup Time
                </td>
                <td className="py-4 px-6 text-center text-sm font-medium text-zinc-900 bg-zinc-50/50">
                  Minutes
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  Hours
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  Minutes
                </td>
              </tr>
              <tr className="border-b border-zinc-100">
                <td className="py-4 px-6 text-sm text-zinc-600 font-semibold">ML Knowledge Required</td>
                <td className="py-4 px-6 text-center text-sm font-medium text-zinc-900 bg-zinc-50/50">
                  None
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  Significant
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  Minimal
                </td>
              </tr>
              <tr className="border-b border-zinc-100">
                <td className="py-4 px-6 text-sm text-zinc-600 font-semibold">Vendor Lock-In</td>
                <td className="py-4 px-6 text-center text-sm font-medium text-zinc-900 bg-zinc-50/50">
                  None (open source)
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  Possible
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  Possible
                </td>
              </tr>
              <tr className="border-b border-zinc-100">
                <td className="py-4 px-6 text-sm text-zinc-600 font-semibold">Best For</td>
                <td className="py-4 px-6 text-center text-sm font-medium text-zinc-900 bg-zinc-50/50">
                  Production AI testing in CI
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  Benchmarking and fine-tuning
                </td>
                <td className="py-4 px-6 text-center text-sm text-zinc-500">
                  Prompt engineering
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* When to Use What Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full border-t border-zinc-100">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            AI Testing Like Everything Else
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-zinc-200 bg-white space-y-4">
            <h3 className="text-xl font-bold text-zinc-900">Same Assertion Mindset</h3>
            <p className="text-zinc-600">Use familiar expectations for AI quality, not new research paradigms.</p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• Playwright tests UI flows</li>
              <li>• Evaliphy tests AI responses</li>
              <li>• Both use clear pass/fail assertions</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 space-y-4">
            <h3 className="text-xl font-bold text-zinc-900">Open by Design</h3>
            <p className="text-zinc-600">No proprietary lock-in. Keep ownership of your tests, results, and workflows.</p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• Open source framework</li>
              <li>• Works with major LLM providers</li>
              <li>• Run local or inside CI/CD</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 space-y-4">
            <h3 className="text-xl font-bold text-zinc-900">Built for Shipping Teams</h3>
            <p className="text-zinc-600">Move from manual checks to repeatable AI quality gates before release.</p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• Catch regressions before users do</li>
              <li>• Share human-readable reports across teams</li>
              <li>• Keep AI testing in your normal workflow</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to simplify AI testing?
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Start testing any AI system with simple assertions, CI integration, and reports your team can read instantly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs/quick-start"
              className="px-8 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-100 transition-colors"
            >
              Start Testing Now
            </Link>
            <Link
              href="https://github.com/Evaliphy/evaliphy"
              className="px-8 py-3 border border-zinc-700 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
            >
              Star on GitHub
            </Link>
          </div>
          <div className="pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg font-mono text-sm text-zinc-300">
              <span className="text-zinc-500">$</span>
              <span>npm install -g evaliphy</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
