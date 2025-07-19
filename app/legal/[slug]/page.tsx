// app/legal/[slug]/page.tsx

import { getMarkdownHtml } from "@/lib/markdown";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function LegalPage({ params }: Props) {
  // Await the params Promise
  const { slug } = await params;
  const html = await getMarkdownHtml(`${slug}.md`);

  if (!html) return notFound();

  return (
    <div className="prose dark:prose-invert mx-auto p-6 pt-20 max-w-7xl">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
