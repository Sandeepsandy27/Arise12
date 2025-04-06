import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sandeep.arise', // Your app's unique identifier for Play Store
  appName: 'ARISE',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    // Comment out the URL for production builds
    // url: 'https://79dd0903-768b-4369-a54c-330d0384adde.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#121212",
      showSpinner: true,
      spinnerColor: "#4DACFF"
    }
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
      keystorePassword: null,
      keystoreAliasPassword: null,
      releaseType: null,
      signingConfig: null
    }
  }
};

export default config;
