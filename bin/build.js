const helpers = require("./helpers.js");
const makeBuild = require("./makeBuild.js");
const puppeteer = require("puppeteer");
const chalk = require("chalk");
const { exec } = require("child_process");

const build = {
  async init(god, options) {
    try {
      const godName = helpers.toCaptalize(god, true);
      const url = `https://smitesource.com/gods/${godName}`;
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(0);
      await page.goto(url);
      const builds = await page.evaluate(makeBuild);
      if (options.screenshot) {
        await page.$eval(".v-slide-group__content", helpers.scrollToElement);
        await new Promise((e) => setTimeout(e, 1000));
        await page.screenshot({ path: "screenshot.png" });
        exec("screenshot.png");
      }
      await browser.close();
      return builds;
    } catch (error) {
      if (error instanceof Error) {
        return;
      }
    }
  },
  showBuild(build) {
    const title = chalk.hex("#83aaff")(helpers.toCaptalize(build.title, true));
    const relicsT = chalk.hex("#E54")("Relics");
    const ItemsT = chalk.hex("#E54")("Item");
    const relics = helpers.inColumns(build.relics, 2, 24);
    const items = helpers.inColumns(build.items, 2, 24);

    return `\n${title}\n\n${relicsT}:\n${relics}${ItemsT}:\n${items}`;
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
