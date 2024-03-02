#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import { program } from "commander";
import figlet from "figlet";
import fs from "fs-extra";
import path from "path";
import cloneRepository from "./utils/cloneRepository.js";
import installDependencies from "./utils/installDependencies.js";
import removeCliDirectory from "./utils/removeCLIdirectory.js";
import removeGitHistory from "./utils/removeGitHistory.js";
import removePnpmLockFile from "./utils/removePnpmLockFile.js";

const displayBanner = () => {
  const bannerText = figlet.textSync("Baptiste LECHAT Boilerplate", {
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
};

program
  .name("my-boilerplate-cli")
  .description("Create a new project using baptistelechat-boilerplate")
  .option("-n, --name <name>", "Project name")
  .option(
    "-i, --installer <installer>",
    "Choose package installer (npm, pnpm, yarn)",
    "pnpm"
  )
  .option("-h, --help", "Display help information")
  .parse(process.argv);

const main = async () => {
  if (program.opts().help) {
    program.outputHelp();
    process.exit(0);
  }

  if (!program.opts().name) {
    console.error(chalk.red("Please provide a project name."));
    process.exit(1);
  }

  const projectName = program.opts().name || "";
  const projectDirectory = path.join(process.cwd(), projectName);
  const installer = program.opts().installer;

  if (installer !== "pnpm" && installer !== "npm" && installer !== "yarn") {
    console.error(
      chalk.red("Please provide a valid package manager : NPM, PNPM or Yarn.")
    );
    process.exit(1);
  }

  const directoryAlreadyExists = fs.existsSync(projectDirectory);

  if (directoryAlreadyExists) {
    console.error(
      chalk.red(`A directory named ${projectName} already exists.`)
    );
    process.exit(1);
  }

  await displayBanner();
  await cloneRepository(projectName);
  process.chdir(projectName);
  await removeGitHistory();
  await removeCliDirectory();
  if (installer !== "pnpm") {
    await removePnpmLockFile();
  }
  await installDependencies(installer);

  const command =
    installer === "npm"
      ? `  npm run dev`
      : installer === "pnpm"
      ? `  pnpm dev`
      : `  yarn run dev`;

  console.log(
    chalk.green(`Successfully created a new project in ${projectDirectory}.`)
  );
  console.log(chalk.cyan("To get started:"));
  console.log(chalk.cyan(`  cd ${projectName}`));
  console.log(chalk.cyan(command));
};

main();
