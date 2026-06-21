// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  //default timeout for playwright is 30s . if u want to override it mentionexplicitly below
  timeout: 30000,
  //for assertion timeout its expect keyword
  expect: {
    timeout: 5000,
  },
  //to get reports
  reporter : 'html',

  use: {
    browserName : 'chromium',
    headless : false
  },

});

