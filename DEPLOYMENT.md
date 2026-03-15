# GitHub Pages deployment

## Recommended: Deploy from gh-pages branch (reliable updates)

This method builds the site and pushes it to the **gh-pages** branch. GitHub Pages then serves that branch. The site at https://spallepangi.github.io/portfolio/ will update every time the workflow runs successfully.

### One-time setup

1. Open your **portfolio** repo on GitHub: https://github.com/spallepangi/portfolio
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**:
   - **Source:** select **Deploy from a branch**.
   - **Branch:** select **gh-pages** (create it if needed—the first workflow run will create it).
   - **Folder:** select **/ (root)**.
4. Click **Save**.

### Deploy (update the live site)

- **Option A:** Push any change to **main**. The workflow **Build and push to gh-pages** will run, build the site, and push to **gh-pages**. The site will update within a minute or two.
- **Option B:** Go to **Actions** → **Build and push to gh-pages** → **Run workflow** → **Run workflow**. Wait for the green check; the site will update.

### If the site still doesn’t update

1. Go to **Actions** and open the latest **Build and push to gh-pages** run.
2. If it’s **red**, open the failed job and fix the error (e.g. build or deploy step).
3. Confirm **Settings → Pages** is set to **Deploy from a branch**, branch **gh-pages**, folder **/ (root)**.
4. After a successful run, wait 1–2 minutes and hard-refresh the page (Ctrl+Shift+R or Cmd+Shift+R).

---

**Summary:** Use **Deploy from a branch** with branch **gh-pages**. Each push to **main** (or manual run of **Build and push to gh-pages**) updates the live site.
