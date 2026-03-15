#!/usr/bin/env node
/**
 * Fetches metadata from GitHub API for PROJECT repos only (e.g. insurance-copilot).
 * Does NOT fetch the portfolio repo. Used at build time so project cards show
 * latest description and "Updated X ago" from the correct repos.
 * Writes data/repo-meta.json (description, pushed_at, stargazers_count per repo).
 */

const fs = require('fs');
const path = require('path');

const GITHUB_API = 'https://api.github.com/repos';

// Only project repos to show on the portfolio — never add the portfolio repo here.
const PROJECT_REPOS = [
  'spallepangi/insurance-copilot',
  'spallepangi/employee-attrition-ml-system'
];

const token = process.env.GITHUB_TOKEN || '';
const headers = {
  Accept: 'application/vnd.github.v3+json',
  ...(token && { Authorization: `Bearer ${token}` })
};

async function fetchRepo(ownerRepo) {
  const url = `${GITHUB_API}/${ownerRepo}`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error(`${url} ${res.status}`);
  }
  const data = await res.json();
  const repoName = ownerRepo.split('/')[1];
  return {
    [repoName]: {
      description: data.description || null,
      pushed_at: data.pushed_at || null,
      stargazers_count: data.stargazers_count ?? 0,
      updated_at: data.updated_at || null
    }
  };
}

async function main() {
  const meta = {};
  for (const ownerRepo of PROJECT_REPOS) {
    const repoName = ownerRepo.split('/')[1];
    if (repoName === 'portfolio') {
      console.warn('fetch-repo-meta: skipping portfolio repo (only project repos are fetched)');
      continue;
    }
    try {
      console.log(`fetch-repo-meta: fetching ${ownerRepo}`);
      const result = await fetchRepo(ownerRepo);
      if (result) Object.assign(meta, result);
    } catch (e) {
      console.warn(`fetch-repo-meta: ${ownerRepo} failed`, e.message);
    }
  }
  const outPath = path.join(__dirname, '..', 'data', 'repo-meta.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(meta, null, 2), 'utf8');
  console.log('fetch-repo-meta: wrote data/repo-meta.json for', Object.keys(meta).join(', '));
}

main().catch((err) => {
  console.error('fetch-repo-meta:', err);
  process.exit(1);
});
