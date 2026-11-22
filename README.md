# M.R Money Tracker

Personal income, salary, production bonus (with proof photos), weekly advances, daily expenses and savings tracker. Bengali UI. Firebase Authentication + Firestore + Storage.

## Setup
1. Add your Firebase Web app configuration to `src/firebase.js`.
2. In Firebase Authentication, enable Email/Password.
3. Create Firestore database and publish the rules in `firestore.rules`.
4. Enable Firebase Storage and publish `storage.rules`.
5. Push to `main` or run the GitHub Actions workflow manually. The workflow builds a debug APK and uploads it as an artifact.

## APK
GitHub → Actions → Android APK Build → run workflow → download the `mr-money-tracker-debug-apk` artifact.


## Security
Never use open read/write rules. The included rules restrict records and images to the authenticated user's UID. Firebase client config is not a secret; security depends on rules.
