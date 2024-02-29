#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import ora from "ora";
import figlet from "figlet";
import boxen from "boxen";
import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";

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
  .description("Create a new project using my-boilerplate")
  .option("-n, --name <name>", "Project name")
  .parse(process.argv);

if (!program.opts().name) {
  console.error(chalk.red("Please provide a project name."));
  process.exit(1);
}

const projectName = program.opts().name || "";
const projectDirectory = path.join(process.cwd(), projectName);

if (fs.existsSync(projectDirectory)) {
  console.error(chalk.red(`A directory named ${projectName} already exists.`));
  process.exit(1);
}

displayBanner();

const cloneSpinner = ora("Cloning repository...").start();
try {
  execSync(
    `git clone https://github.com/yourusername/my-boilerplate.git ${projectName}`,
    { stdio: "inherit" }
  );
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
