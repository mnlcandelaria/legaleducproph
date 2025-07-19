// app/legal/[slug]/page.tsx

import { getMarkdownHtml } from "@/lib/markdown";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function LegalPage({ params }: Props) {
  const html = await getMarkdownHtml(`${params.slug}.md`);

  if (!html) return notFound();

  return (
    <div className="prose dark:prose-invert mx-auto p-6 pt-20 max-w-6xl">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
