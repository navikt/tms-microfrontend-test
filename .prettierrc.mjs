/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  bracketSpacing: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
