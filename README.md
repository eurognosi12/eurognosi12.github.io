# Ευρωγνώση Παλαιού Φαλήρου – website

## Pages

| File | Wix page |
|---|---|
| `index.html` | Home |
| `about.html` | Για εμάς |
| `our-space.html` | Ο χώρος μας |
| `books.html` | Βιβλία |
| `payments.html` | Πληρωμές |
| `info.html` | Πληροφορίες & Κανονισμοί |
| `schedule.html` | Πρόγραμμα |
| `contact.html` | Επικοινωνία |

The header menu and footer are repeated in every page. If you change a menu item, change it in all files.

## Publish on GitHub Pages

1. Create a new repository on GitHub, e.g. `eurognosifaliro`.
2. Upload every file in this folder (drag-and-drop on github.com works), or:
   ```
   git init
   git add .
   git commit -m "Website"
   git branch -M main
   git remote add origin https://github.com/<username>/eurognosifaliro.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**. Under **Source**, pick **Deploy from a branch**, then branch `main` and folder `/ (root)`. Click Save.
4. After a minute or two the site is live at `https://<username>.github.io/eurognosifaliro/`.

### Using the domain www.eurognosifaliro.com

In **Settings → Pages → Custom domain**, enter `www.eurognosifaliro.com`. Then, at the domain registrar,
add a `CNAME` record for `www` that points to `<username>.github.io`. Turn on **Enforce HTTPS** once it becomes available.

## Common edits

- **News on the home page**: replace `images/cambridge-platinum-award.jpg` or `images/holidays-2026-2027.jpg`
  with a new image of the same name, or change the `src` in `index.html`.
- **Schedule**: edit the table rows in `schedule.html`.
- **Gallery**: add `images/space-7.jpg` and copy one `<a ...><img ...></a>` line in `our-space.html`.

## Contact form

GitHub Pages can't send email by itself. Right now **Submit** opens the visitor's email app,
with a message to palaiofaliro1@eurognosi.info already filled in.
To get messages sent straight to your inbox instead, sign up for a free form service
(for example Formspree), then in every page change `<form class="contact-form" ...>` to
`<form class="contact-form" action="https://formspree.io/f/XXXX" method="POST">`, and delete the
contact-form block in `js/main.js`.
