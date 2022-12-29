const helpers = require("./helpers.js");
const makeBuild = require("./makeBuild.js");
const puppeteer = require("puppeteer");
const build = {
  async init(god) {
    const godName = helpers.toCaptalize(god, true);
    const url = `https://smitesource.com/gods/${godName}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);

    await page.goto(url);
    const builds = await page.evaluate(makeBuild);
    await browser.close();
    return builds;
  },
  showBuild(build) {
    const title = helpers.toCaptalize(build.title, true);
    const relics = helpers.inColumns(build.relics, 2, 24);
    const items = helpers.inColumns(build.items, 2, 24);

    return `\n${title}\n\nRelics:\n${relics}\nItems:\n${items}`;
  },
  showBuilds(builds) {
    const buildsStrings = [];
    for (let i = 0; i < builds.length; i++) {
      const activeBuild = builds[i];
      const buildString = build.showBuild(activeBuild);
      buildsStrings.push(buildString);
    }
    buildsStrings.push("");
    buildsStrings.unshift("");
    console.log(buildsStrings.join(`${"".padStart(56, "-")}`));
  },
};

module.exports = build;
