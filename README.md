# Welcome to FireKit

First thing you need to do: create a `config.js` file in `src/firebase`, you can copy the `config.example.js` file and fill in values per your project. This information can be found on Firebase under Project Settings > General. Scroll down to the bottom to the `Your Apps` section, if there is no app, click `Add App` and create a web app. This will give you the config information you need for the `config.js` file. Simply copy the `firebaseConfig` object contents to the `export default` object at the bottom of the `config.js` file.

## User and Admin Setup

The baseline app has a sign-in page that requires and Admin user. To create a user:
* Go to https://firebase.console.google.com 
* Go to the Authentication > Users tab
* Click Add User 
* Add user email and password
* Once the user is created you can copy the UUID generated, you will need this to make the user an admin.

To make the user an Admin you will need to generate a Service Account Key and run the `makeAdmin` script. To generate a Service Account key:
* Go to https://firebase.console.google.com 
* Go to Project Settings > Service accounts
* Under Firebase Admin SDK, select `Node.js` and click `Generate new private key`
* Save the file as `serviceAccountKey.json` inside the `secrets` directory.

To promote a user to Admin:
* Open a terminal window in the root directory of this project.
* Copy the UUID of the user you want to promote from Firebase console
* Open a terminal in the root directory of this project.
* Run `node makeAdmin.local.cjs --uid {UUID}`

Now you should be able to sign-in to the newly created app.



## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Add `--host` flag to allow testing with other devices on the network:

```bash
npm run dev --host
```

### Firebase

By default, the app will use the production firebase config. If you wish to use the firebase emulators (e.g for offline development), do the following:

0. [Setup firebase locally](https://firebase.google.com/docs/cli) (required for `firebase deploy` as well)
1. `cd functions` and `npm i` to install packages required by firebase functions
2. `npm run fb:emu` to start the emulators with seed data
3. In a separate terminal, `npm run dev:emu --host`
- **NOTE:** You must specify an IP address to access the emulators from. You can do this either by creating an `.env.local` file at the project root and adding `VITE_FIREBASE_EMU_HOST=<YOUR IP>` or by setting it when running the dev server, e.g: `VITE_FIREBASE_EMU_HOST=127.0.0.1 npm run dev:emu --host`

#### Editing Emulator Seed Data

Current flow for updating seed data requires one of the following approaches:

1. Edit the export files located in `src/firebase/seed` (not recommended(?))
2. Run the emulators with `--export-on-exit src/firebase/seed`. Ideally this will only be used very intentionally to keep unwanted noise out of the seed data + out of git

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Deployment / CORS
- `npm run deploy` to firebase
- To update CORS configuration, modify `cors.json` and run `gsutil cors set cors.json gs://<FIREBASE APP NAME>` (may require gcloud login)

### Use Firebase Hosting

Add following block to `firebase.json`:
```
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/200.html"
      }
    ]
  },
```

May require static adapter in svelte.config.js:
```
import adapter from '@sveltejs/adapter-static';

const config = {
  ...
  kit: {
    adapter: adapter({ fallback: '200.html' }),
    ...
  }
}
```