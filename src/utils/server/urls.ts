const isDevelopment = process.env.NAIS_CLUSTER_NAME === "dev-gcp";
export const isLocal = process.env.NODE_ENV === "development";

export const getEnvironment = () => {
  if (isDevelopment) {
    return "development";
  }

  if (isLocal) {
    return "local";
  }

  return "production";
};

type EnvUrl = { development: string; production: string; local: string };

const EXAMPLE_API_URL = {
  local: "http://localhost:3000/api/tms-microfrontend-test",
  development: "http://example-your-api-app/api/something",
  production: "http://example-your-api-app/api/something",
};

const BASE_URL: EnvUrl = {
  local: "http://localhost:4321/tms-microfrontend-test",
  development: "https://www.ansatt.dev.nav.no/tms-microfrontend-test/",
  production: "https://www.nav.no/tms-microfrontend-test/",
};

export const exampleApiUrl = EXAMPLE_API_URL[getEnvironment()];
export const baseUrl = BASE_URL[getEnvironment()];
