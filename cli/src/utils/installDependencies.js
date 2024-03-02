import chalk from "chalk";
import { exec } from "child_process";
import ora from "ora";

const installDependencies = async (installer) => {
  const installSpinner = ora("Installing dependencies...").start();
  try {
    await new Promise((resolve, reject) => {
      const command =
        installer === "npm"
          ? "npm install"
          : installer === "pnpm"
          ? "pnpm install"
          : "yarn install";

      exec(command, { stdio: "inherit" }, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
    installSpinner.succeed("Installed dependencies successfully.");
  } catch (error) {
    installSpinner.fail("Failed to install dependencies.");
    console.error(chalk.red(error.message));
    process.exit(1);
  }
};

export default installDependencies;
