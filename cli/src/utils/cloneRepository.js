import chalk from "chalk";
import { exec } from "child_process";
import ora from "ora";

const cloneRepository = async (projectName) => {
  const GITHUB_REPO =
    "https://github.com/baptistelechat/baptistelechat-boilerplate.git";

  const cloneSpinner = ora("Cloning repository...").start();

  try {
    await new Promise((resolve, reject) => {
      exec(
        `git clone ${GITHUB_REPO} ${projectName}`,
        { stdio: "inherit" },
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });
    cloneSpinner.succeed("Cloned repository successfully.");
  } catch (error) {
    cloneSpinner.fail("Failed to clone repository.");
    console.error(chalk.red(error.message));
    process.exit(1);
  }
};

export default cloneRepository;
