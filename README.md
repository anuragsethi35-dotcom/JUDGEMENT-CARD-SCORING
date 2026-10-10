# Judgement Card Scoring — Version 2

## Update your existing GitHub Pages app
1. Extract this ZIP on your computer.
2. Open your GitHub repository `JUDGEMENT-CARD-SCORING`.
3. Choose **Add file → Upload files**.
4. Upload/replace `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, and `icon-512.png` from this package. If GitHub asks to replace existing files, accept the replacements.
5. Click **Commit changes**.
6. Wait a minute, then open the Pages URL and refresh. If an old version remains, use Ctrl+F5 on PC; on iPhone close and reopen the Home Screen app or refresh Safari.

## Version 2 features
- Back to setup button; unfinished round draft is saved locally.
- Optional game name.
- Round schedule uses maximum whole cards from a 52-card deck: 6 players = 8 down to 1, blind 1-card round, then 1 up to 8 (17 rounds); 7 players = max 7 (15 rounds); 8 players = max 6 (13 rounds).
- Freeze Bids & Trump locks every bid and the trump. Actual scores are disabled until freeze.
- Total bids cannot equal the cards dealt per player; the app prevents freezing in that case.
- Scoring: matching bid/actual = 10 + actual × 11; mismatch = 0.
- Completed games are saved in Game History with final leaderboard and round-by-round bid/actual/points.
- Browser-local storage only; history is not synced between devices and can be erased if browser website data is cleared.
- Trump is chosen from a shuffled 52-card deck after simulating the cards dealt to players. The blind round is labelled; the app cannot enforce players physically keeping their card unseen.
