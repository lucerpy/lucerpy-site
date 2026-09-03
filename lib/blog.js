import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), '_posts');

// "Atualizado em" comes from git history, not a hand-maintained frontmatter
// field - so it updates automatically whenever the post's content actually
// changes, instead of relying on someone remembering to bump a date by hand.
// Only shown when the file has genuinely been revised (2+ commits) - a post
// touched by a single creation commit has nothing to call "updated" yet,
// even if that commit's date doesn't exactly match the frontmatter `date`.
function getLastModified(fullPath) {
  try {
    const log = execFileSync(
      'git',
      ['log', '--follow', '--format=%aI', '--', fullPath],
      { cwd: process.cwd(), encoding: 'utf8' }
    ).trim();
    if (!log) return null;
    const commits = log.split('\n');
    return commits.length > 1 ? commits[0] : null;
  } catch {
    return null;
  }
}

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) return [];
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
    updated: getLastModified(fullPath) ?? undefined,
  };
}
