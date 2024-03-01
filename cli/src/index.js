#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import { execSync } from "child_process";
import { program } from "commander";
import figlet from "figlet";
import fs from "fs-extra";
import ora from "ora";
import path from "path";

const GITHUB_REPO =
  "https://github.com/baptistelechat/baptistelechat-boilerplate.git";

function displayBanner() {
  const bannerText = figlet.textSync("Baptiste LECHAT Boilerplate CLI", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  });

  const bannerBox = boxen(bannerText, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "cyan",
    align: "center",
  });

  console.log(bannerBox);
}

program
  .name("my-boilerplate-cli")
  .description("Create a new project using baptistelechat-boilerplate")
  .option("-n, --name <name>", "Project name")
  .option("-p, --path <path>", "Project path")
  .option("-h, --help", "Display help information")
  .parse(process.argv);

if (program.opts().help) {
  program.outputHelp();
  process.exit(0);
}

if (!program.opts().name) {
  console.error(chalk.red("Please provide a project name."));
  process.exit(1);
}

const projectName = program.opts().name || "";
const projectPath = program.opts().path || process.cwd();
const projectDirectory = path.join(projectPath, projectName);

if (fs.existsSync(projectDirectory)) {
  console.error(chalk.red(`A directory named ${projectName} already exists.`));
  process.exit(1);
}

displayBanner();

const cloneSpinner = ora("Cloning repository...").start();
try {
  execSync(`git clone ${GITHUB_REPO} ${projectName}`, { stdio: "inherit" });
  cloneSpinner.succeed("Cloned repository successfully.");
} catch (error) {
  cloneSpinner.fail("Failed to clone repository.");
  console.error(chalk.red(error.message));
  process.exit(1);
}

const gitRemoveSpinner = ora("Removing Git history...").start();
try {
  execSync(`cd ${projectName} && rm -rf .git`, { stdio: "inherit" });
  gitRemoveSpinner.succeed("Removed Git history successfully.");
} catch (error) {
  gitRemoveSpinner.fail("Failed to remove Git history.");
  console.error(chalk.red(error.message));
  process.exit(1);
}

const installSpinner = ora("Installing dependencies...").start();
try {
  execSync(`cd ${projectName} && pnpm install`, { stdio: "inherit" });
  installSpinner.succeed("Installed dependencies successfully.");
} catch (error) {
  installSpinner.fail("Failed to install dependencies.");
  console.error(chalk.red(error.message));
  process.exit(1);
}

console.log(
  chalk.green(`Successfully created a new project in ${projectDirectory}.`)
);
console.log(chalk.cyan("To get started:"));
console.log(chalk.cyan(`  cd ${projectName}`));
console.log(chalk.cyan("  pnpm dev"));
