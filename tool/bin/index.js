#!/usr/bin/env node
const logger = require("../src/logger")("bin");
const arg = require("arg");
const chalk = require("chalk");
const psql = require("../src/commands/psqlCLI");
const js = require("../src/commands/js");
const css = require("../src/commands/css");

try {
  const args = arg({
    "--psql": Boolean,
    "--js": Boolean,
    "--css": Boolean,
  });

  logger.debug("Received args", args);

  if (args["--psql"]) {
    psql();
  } else if (args["--js"]) {
    js();
  } else if (args["--css"]) {
    css();
  }
} catch (e) {
  logger.warning(e.message);
  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright("syntax [CMD]")}
  ${chalk.greenBright("--js")}   Shows basic js syntax
  ${chalk.greenBright("--css")}  Shows basic css syntax
  ${chalk.greenBright("--psql")} Shows basic psql CLI commands`);
}
