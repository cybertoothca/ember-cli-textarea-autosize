/* eslint-env node */

/**
 * By default, your tests will run in Chrome.
 *
 * To run your tests in headless (FASTER) mode (launch_in_ci):
 *    `ember t`
 *
 * To run your tests with the browser test-page summary (launch_in_dev):
 *    `ember t -s`
 *
 */
const isHeadless = !process.argv.includes('-s');

let options = {
  framework: 'qunit',
  test_page: 'tests/index.html?hidepassed&nocontainer&notifications',
  disable_watching: true,
  /**
   * `ember t` run ci-mode
   */
  launch_in_ci: [
    'Chrome'
  ],
  /**
   * Seems `launch_in_dev` seems to fire when you run `ember t -s`
   */
  launch_in_dev: [
    'Chrome'
  ]
};

if (isHeadless) {
  options.browser_args = {
    Chrome: [
      '--headless',
      '--window-size=1440,900',
      '--disable-gpu',
      '--remote-debugging-port=9222'
    ],
    Firefox: [
      '-headless',
      '--window-size=1440,900'
    ]
  };
}

module.exports = options;
