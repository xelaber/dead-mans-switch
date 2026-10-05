# Dead Man's Switch

**GitHub Pages website:** https://xelaber.github.io/dead-mans-switch/
**Repository:** https://github.com/xelaber/dead-mans-switch
**Last README update:** 2026-10-05 15:31:33

This repository is generated and maintained by `Dead Man's Switch.py`. The GitHub Pages website is the main emergency-friendly view: it organizes profile details, photos, audio, locations, timeline entries, documents, and all uploaded files into simple static pages.

If the GitHub Pages website link shows a 404, enable GitHub Pages manually in the repository settings: Settings → Pages → Source: Deploy from a branch → Branch: main → Folder: / (root) → Save → Enforce HTTPS.

## What to open first

1. Open the GitHub Pages website above.
2. Start with `Person Profile` to identify the person and read emergency details.
3. Check `Locations` for saved GPS/network location files and map links.
4. Check `Photo Gallery` and `Audio` for emergency captures.
5. Check `Timeline` to understand what happened by date and time.
6. Check `All Files` for every uploaded file that is not part of the website itself.
7. Read `Emergency Info` for guidance and warnings.

## Important safety notes

- Emergency mode can make this repository **public** so trusted contacts can access it.
- Do **not** store passwords, bank/card data, crypto seed phrases, private keys, or account secrets here.
- This project is not a replacement for emergency services. If someone may be in danger, contact local emergency services immediately.
- The website is static. Refresh it later if emergency mode is still uploading new data.

## Local folder used by the script

`/data/data/com.termux/files/home/storage/downloads/Dead Man's Switch`

## Generated website pages

- `index.html` — dashboard
- `Pages/profile.html` — personal identification/profile
- `Pages/gallery.html` — photos grouped from uploaded files
- `Pages/videos.html` — videos grouped from uploaded files
- `Pages/audio.html` — audio recordings
- `Pages/locations.html` — location files and map links when coordinates exist
- `Pages/timeline.html` — files organized by date/time
- `Pages/files.html` — full file archive
- `Pages/emergency.html` — emergency guidance

## Previous History

Before normal repository publishes, the previous repository/local snapshot is packed into a timestamped zip inside `History/`. The script then cleans Git tracking and uploads the new current snapshot, while keeping those history zips. Local phone files are **not** deleted by this cleanup; only the Git repository index is refreshed.

## Repository structure

- `index.html`, `style.css`, `scripts.js`, `README.md` stay in the repository root.
- `Pages/` contains every website page except the main `index.html`.
- `Assets/Photos/`, `Assets/Videos/`, `Assets/Recordings/`, `Assets/Locations/`, `Assets/Profile/`, `Assets/Sessions/`, and `Assets/Other/` hold the uploaded data.
- `History/` contains previous-version zip snapshots.

---

# Dead Man's Switch (Dead Man's Switch)

A *dead man's switch* is a safety mechanism that triggers an action if the operator becomes unable to continue—
for example, if they stop checking in.

In simple terms: if a person can’t confirm they’re okay, the system can reveal instructions, transfer access,
send alerts, or publish information.

This repository can be used as a “dead man’s switch” *backup concept*:
- Keep important documents or instructions in this repo.
- Update it whenever you need.
- You can automate check-ins and actions separately (outside of this script).

> This script does **not** implement automatic triggering logic by itself.
> It only syncs the contents of your local folder to GitHub, and can optionally wipe/delete the repo.

---

# Dead Man's Switch (Νεκροδιακόπτης / Dead Man's Switch)

Ο *dead man’s switch* είναι ένας μηχανισμός ασφαλείας που ενεργοποιεί μια ενέργεια αν ο χειριστής δεν μπορεί
να συνεχίσει—π.χ. αν σταματήσει να “κάνει check‑in”.

Με απλά λόγια: αν κάποιος δεν μπορεί να επιβεβαιώσει ότι είναι καλά, το σύστημα μπορεί να αποκαλύψει οδηγίες,
να μεταφέρει πρόσβαση, να στείλει ειδοποιήσεις ή να δημοσιεύσει πληροφορίες.

Αυτό το αποθετήριο μπορεί να χρησιμοποιηθεί ως ένα “backup concept” dead man’s switch:
- Κράτα σημαντικά αρχεία ή οδηγίες εδώ.
- Ενημέρωνέ το όποτε χρειάζεται.
- Μπορείς να αυτοματοποιήσεις check‑ins και ενέργειες ξεχωριστά (εκτός αυτού του script).

> Αυτό το script **δεν** υλοποιεί από μόνο του την αυτόματη ενεργοποίηση.
> Απλά συγχρονίζει τον φάκελό σου στο GitHub και προαιρετικά μπορεί να κάνει wipe/delete το repo.
