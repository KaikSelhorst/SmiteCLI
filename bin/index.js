#! /usr/bin/env node

const yargs = require("yargs");
const utils = require("./utils.js");
const build = require("./build.js");
const chalk = require("chalk");

const usage = chalk.hex("#E54")(
  "\n\nUsage:  smite <god-name> starts a search for a build.\n\tEx: smite Xing-Tian"
);
const options = yargs
  .usage(usage)
  .option("b", {
    alias: "base",
    describe: "List all Smite gods",
    demandOption: false,
    boolean: true,
  })
  .option("s", {
    alias: "screenshot",
    desc: "will make a screeshot of the build",
    demandOption: false,
    boolean: true,
  })
  .help(true).argv;

const options_argv = {
  screenshot: yargs.argv.s,
};

// Show data base gods
if (yargs.argv.b == true || yargs.argv.base == true) {
  utils.base();
  return;
}

// console.log(smite --help)
if (yargs.argv._[0] == null) {
  utils.showHelp();
  return;
}

if (yargs.argv._[0]) {
  (async () => {
    const builds = await build.init(yargs.argv._[0], options_argv);
    build.showBuilds(builds);
  })();
}
