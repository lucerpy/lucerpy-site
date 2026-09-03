import { execFileSync } from 'child_process';

// Real last-modified date from git history, not a hand-maintained field -
// so it updates automatically whenever a file's content actually changes.
// Only returns a date when the file has genuinely been revised (2+ commits);
// a file touched by a single creation commit has nothing to call "updated"
// yet, even if that commit's date doesn't match some other nominal date.
// --follow keeps history intact across renames.
export function getLastModified(fullPath) {
  const commits = getCommitDates(fullPath);
  return commits.length > 1 ? commits[0] : null;
}

// For content whose date must always show something (e.g. a legal
// document's "last updated" line) rather than being optional like the
// blog's "Atualizado em" - returns the latest commit regardless of count,
// or null only when the file has no commits at all yet.
export function getLastCommitDate(fullPath) {
  const commits = getCommitDates(fullPath);
  return commits[0] ?? null;
}

function getCommitDates(fullPath) {
  try {
    const log = execFileSync(
      'git',
      ['log', '--follow', '--format=%aI', '--', fullPath],
      { cwd: process.cwd(), encoding: 'utf8' }
    ).trim();
    return log ? log.split('\n') : [];
  } catch {
    return [];
  }
}
