import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  tags?: string[];
  banner?: string;
};

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function getMdxFiles(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
}

export function getAllArticles(): ArticleMeta[] {
  const files = getMdxFiles();
  const articles = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(ARTICLES_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      excerpt: String(data.excerpt ?? ""),
      author: data.author ? String(data.author) : undefined,
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
      banner: data.banner ? String(data.banner) : undefined,
    };
  });

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): { meta: ArticleMeta; content: string } {
  const fullPath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      excerpt: String(data.excerpt ?? ""),
      author: data.author ? String(data.author) : undefined,
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
      banner: data.banner ? String(data.banner) : undefined,
    },
    content,
  };
}
