/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'portfolio';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  basePath: isGithubPages ? `/${repoName}` : undefined
};

export default nextConfig;

