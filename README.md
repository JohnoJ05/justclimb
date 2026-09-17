# justClimb website

A plain HTML/CSS/JS website for justClimb (mobile climbing wall hire). No build
step, no framework — every page is a real, editable `.html` file.

## Structure

```
index.html              Home
about.html               About Us
climbing-walls.html      Climbing Walls
events.html              Events hub
events-schools.html      Event detail: Schools & Youth Groups
events-corporate.html    Event detail: Corporate & Team Building
events-parties.html      Event detail: Private & Children's Parties
events-shows.html        Event detail: Shows, Galas & Fun Days
gallery.html             Gallery
contact.html             Contact + enquiry form

css/styles.css           Colours, fonts, buttons, header/footer, layout helpers
js/main.js                Mobile menu toggle + contact form handler

design-source/           The original Claude Design canvas file this site was
                          built from, kept for reference only — it is NOT used
                          by the live site and doesn't need to be edited.
```

Each page repeats its own header, footer, "Get a Quote" banner and mobile call
bar. That's a deliberate trade-off for a no-build-tool site: editing one page's
text can't accidentally break another page, at the cost of the header/footer
markup being duplicated across files. If you rename a nav item or add a page,
update it in all 10 files.

## Editing content

All text is plain HTML — open any `.html` file and edit it directly. Anywhere
you see **"Place holder text here, place holder text here."** is copy that
still needs writing.

## Editing images

Every photo is currently a placeholder box like this:

```html
<div class="img-slot" data-label="Hero photograph — a climber high on the 27ft tower, staff belaying below"></div>
```

The `data-label` text describes what photo belongs there. To swap in a real
photo:

1. Add your image file to an `images/` folder (create it if it doesn't exist).
2. Replace the `<div class="img-slot" ...></div>` with:
   ```html
   <img src="images/your-photo.jpg" alt="A climber high on the 27ft tower, staff belaying below" style="width:100%;height:100%;object-fit:cover">
   ```
   Keep the same wrapping `<div>` around it (it controls the aspect ratio and
   rounded corners) — just replace what's inside.

## Editing colours / fonts

All design tokens live at the top of `css/styles.css` as CSS variables
(`--color-accent`, `--color-text`, `--font-heading`, etc). Change them there
and the whole site updates.

## The contact form

`contact.html`'s form currently just shows an alert on submit — it isn't wired
up to actually send anywhere yet (see `js/main.js`). To make it work, either:

- Use a form backend like [Formspree](https://formspree.io) or
  [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) — point the
  `<form>`'s `action` at their endpoint and remove the `preventDefault` in
  `js/main.js`, or
- Wire it up to your own backend / serverless function.

## Previewing locally

No build tools needed — just serve the folder and open it in a browser:

```
python3 -m http.server 8000
```

then visit http://localhost:8000/index.html. (Opening the file directly with
`file://` also mostly works, since there's no build step.)

## Deploying

This is a static site, so it can be hosted anywhere that serves plain files —
GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc. For GitHub Pages:
repo Settings → Pages → Deploy from branch → `main` / root.
