# GitHub Pages deployment

## If your site is not updating (e.g. "last deployment 7 hours ago")

The live site only updates when this repo’s **GitHub Actions** workflow runs successfully and **GitHub Pages is set to use that workflow**.

### 1. Set Pages source to GitHub Actions (most common fix)

1. Open your **portfolio** repo on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
   - If it is set to **Deploy from a branch**, the site will not use this workflow. Changing it to **GitHub Actions** fixes that.
4. Save. The next successful workflow run will update the site.

### 2. Check why the workflow might be failing

1. Go to the **Actions** tab in the repo.
2. Open the **Build and deploy portfolio** workflow.
3. Click the latest run (e.g. from your last push).
   - If it’s **green**: the workflow ran successfully. If the site still doesn’t update, go back to step 1 and confirm Source is **GitHub Actions**.
   - If it’s **red**: open the failed job and read the error (e.g. in the “Build” or “Deploy” step) and fix it.

### 3. Deploy the latest code without pushing again

1. Go to **Actions** → **Build and deploy portfolio**.
2. Click **Run workflow** (dropdown on the right).
3. Choose **main** (or your default branch) and click **Run workflow**.
4. Wait for the run to finish. If it succeeds, the site will update.

### 4. Ensure you’re pushing to the branch the workflow uses

The workflow runs on pushes to **main**. If you push to another branch, it won’t run. Either push to `main` or change the workflow’s `on.push.branches` to match your default branch.

---

**Summary:** Set **Settings → Pages → Source** to **GitHub Actions**, then either push to `main` or run the workflow manually. The site is built from this repo and deployed by that workflow.
