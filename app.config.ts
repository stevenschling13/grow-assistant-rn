// Expo configuration for Grow Assistant
// This dynamic config reads environment variables via dotenv. The variables
// defined here are passed into your app via expo-constants. See
// https://docs.expo.dev/guides/environment-variables/ for more details.

import 'dotenv/config';

export default ({ config }: { config: any }) => {
  return {
    ...config,
    name: 'Grow Assistant',
    slug: 'grow-assistant',
    version: '1.0.0',
    scheme: 'growassistant',
    extra: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY
    }
  };
};
