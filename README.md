# Animation App

A small React Native Expo app with animated calculator buttons and a display that scales smoothly on interaction.

## Features

- Animated calculator buttons using Reanimated
- Press feedback for each button
- Clean dark-mode UI
- Works on Android, iOS, and web with Expo

## Prerequisites

Before you run this project, install the following:

- Node.js LTS (recommended: 20.x)
- npm (comes with Node.js)
- Git
- Android Studio (for Android emulator) or Xcode (for iOS simulator)
- Expo Go app on your physical device if you want to run it natively

## Install dependencies

From the project root, run:

```bash
npm install
```

This project uses React Native Reanimated for animations, so install the Expo-compatible version:

```bash
npx expo install react-native-reanimated
```

If you want to verify the project is fully set up, you can also run:

```bash
npm install expo-status-bar
```

## Start the app

Run the development server:

```bash
npm start
```

Then choose one of the following:

```bash
npm run android
```

```bash
npm run ios
```

```bash
npm run web
```

## Project scripts

```json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
}
```

## Main app files

- `App.js` — main app UI and animation logic
- `package.json` — project metadata and scripts
- `app.json` — Expo app configuration
- `assets/` — images and app icons

## Notes

- This project uses Expo SDK 57.
- If you see a Reanimated error, run:

```bash
npx expo install react-native-reanimated
```

- If the Metro bundler has issues, clear the cache:

```bash
npx expo start --clear
```

## License

This project is licensed under the MIT License.
