import { getEnvironment } from '@src/utils/server/urls.ts';

const REDIRECT_URI = {
  local: 'http://localhost:4321/tms-microfrontend-test',
  development: 'https://www.ansatt.dev.nav.no/tms-microfrontend-test',
  production: 'https://www.nav.no/minside/tms-microfrontend-test',
};

export const redirectUri = REDIRECT_URI[getEnvironment()];
export const loginUrl = `/tms-microfrontend-test/oauth2/login?redirect=${redirectUri}`;
