import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'www',
  server: {
    cleartext: true         // Solo necesario si usas imágenes desde http:// (no https://)
  }
};

export default config;
