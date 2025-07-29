# Grow Assistant

A React Native app built with Expo and TypeScript for managing your indoor grow operations.

## Quickstart

1. **Clone the repository**

   ```sh
   git clone https://github.com/stevenschling13/grow-assistant-rn.git
   cd grow-assistant-rn
   ```

2. **Install dependencies**

   This project uses Expo and Yarn. Install the dependencies with:
   ```sh
   yarn install
   # or
   npm install
   ```

3. **Environment variables**

   Copy `.env.example` to `.env` and fill in your Supabase credentials:
   ```env
   SUPABASE_URL=your-supabase-url
   SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
   These are required for the Supabase client in `src/lib/supabase.ts`.

4. **Run the development server**

   Start the Expo development server:
   ```sh
   yarn start
   # or
   npm run start
   ```
   Then use the Expo Go app or an emulator to run the app.

5. **Run tests**

   Jest is configured for unit testing:
   ```sh
   yarn test
   # or
   npm test
   ```

6. **Lint and format**

   ESLint and Prettier are included:
   ```sh
   yarn lint
   yarn format
   ```

7. **Build for production**

   Use Expo or EAS CLI to build release binaries when you are ready to ship.

## Tech Stack

- **Expo** – Cross‑platform build and development tooling
- **React Native** – Framework for building native apps using React
- **TypeScript** – Static typing for safer code
- **React Navigation** – Navigation solution
- **Zustand** – Lightweight state management
- **Supabase** – Backend‑as‑a‑service for database and authentication
