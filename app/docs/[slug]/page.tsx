import { getDocBySlug } from "@/lib/docs";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

interface DocPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function extractDocSeo(content: string, slug: string) {
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const heading = lines.find((line) => line.startsWith("# "));
  const title = heading ? heading.replace(/^#\s+/, "") : slug.replace(/-/g, " ");

  const firstParagraph = lines.find(
    (line) => !line.startsWith("#") && !line.startsWith("```") && !line.startsWith("!")
  );

  const description =
    firstParagraph && firstParagraph.length > 20
      ? firstParagraph.slice(0, 160)
      : `Learn about ${title} in the Evaliphy docs.`;

  return { title, description };
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getDocBySlug(slug);

  if (!content) {
    return {};
  }

  const { title, description } = extractDocSeo(content, slug);
  const canonicalPath = `/docs/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${title} | Evaliphy Docs`,
      description,
      url: `https://evaliphy.com${canonicalPath}`,
      type: "article",
      images: [
        {
          url: "/images/report.png",
          width: 1200,
          height: 630,
          alt: `${title} - Evaliphy Docs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Evaliphy Docs`,
      description,
      images: ["/images/report.png"],
    },
  };
}

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = props.children?.toString()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return <h2 {...props} id={id} />;
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = props.children?.toString()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return <h3 {...props} id={id} />;
  },
};

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const content = await getDocBySlug(slug);

  if (!content) {
    notFound();
  }

  const { title, description } = extractDocSeo(content, slug);
  const canonicalUrl = `https://evaliphy.com/docs/${slug}`;
  const docJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url: canonicalUrl,
    author: {
      "@type": "Organization",
      name: "Evaliphy",
    },
    publisher: {
      "@type": "Organization",
      name: "Evaliphy",
    },
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(docJsonLd) }}
      />
      <div className="prose prose-zinc max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800">
        <MDXRemote
          source={content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>
    </>
  );
}
