# Judgement Card Scoring — Local Version 13

This build removes Supabase, phone OTP, shared groups, and cloud sync. Each phone runs independently and stores its records in that device/browser.

## Publish to GitHub Pages
1. Download and extract `judgement_card_scoring_v13_local_backup.zip`.
2. Open the repository `https://github.com/anuragsethi35-dotcom/JUDGEMENT-CARD-SCORING`.
3. Upload/replace the files in the ZIP at the repository root: `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, and `icon-512.png`. Do not upload the old Supabase config/schema files; they are not used by this version.
4. Commit the changes and wait for GitHub Pages to deploy.
5. Open `https://anuragsethi35-dotcom.github.io/JUDGEMENT-CARD-SCORING/` and refresh. If the old screen persists, close the app, remove the Home Screen shortcut, reopen the URL, and add it to Home Screen again.

## Backup and restore
- On the setup screen, choose **Create Backup File**. This downloads a JSON backup of the current unfinished game, completed game history, saved player names, and display preferences.
- Save/share that file into your own Google Drive. This step is manual; the app does not sign in to Google or access Drive directly.
- On a new phone, open the app, download the backup file from Google Drive to the phone, tap **Restore Backup**, and select that JSON file.
- Restore replaces the records on that phone, so back up that phone first if its records matter.

## Notes
- This is an installable Progressive Web App, not an App Store/Play Store native app.
- Local data is tied to the browser on each device. Create backups regularly; clearing browser data or uninstalling may remove local records.
- No account, domain, Twilio, Supabase, or SMTP configuration is needed.
