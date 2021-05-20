# technica-site-2021

Technica's main site for 2021!

_NOTE:_ This website project uses SCSS and Prettier.js so you need to use the according install commands to get the dependencies necessary for both packages to apply to the project.

For Prettier, you can expect to see changes to the file you are currently working on on save (excluding `.html` files).

For SCSS, you can expect to watch for changes in `.scss` files, which get processed into the `.css` this site uses.

## Prettier

### Installation

_NOTE:_ Before running any commands in the CLI, you need to integrate Prettier with your code editor (VSCode recommended); this is a one-time integration. Also for troubleshoot, first check in your editor settings that Prettier is selected as the default formatting extension. (search for "default formatter").

```bash
npm install --save dev --save-exact prettier
```

You only need to run this command once after cloning the repo onto your local system.

### CSS Formatting on Save

```bash
echo {}> .prettierrc.json
```

After configuring Prettier locally and adjusting the editor integration settings, you will be able to apply the formatting standardization to the file on save.

_NOTE:_ You can edit format standards in the `prettierrc.json` file created.

## SCSS

### Installation

```bash
npm install
```

You only need to run this command once after cloning the repo onto your local system.

### Watch SCSS changes

```bash
npm run web
```

You need to run this command every time you make a change to the repo.

_NOTE:_ When editing this project, only edit the `.scss` files, not the `.css` files directly.
