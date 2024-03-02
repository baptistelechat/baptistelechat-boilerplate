import chalk from "chalk";
import fs from "fs-extra";
import ora from "ora";

const removePnpmLockFile = async () => {
  const gitRemoveSpinner = ora("Removing pnpm-lock.yaml...").start();
  try {
    await fs.remove("pnpm-lock.yaml");
    gitRemoveSpinner.succeed("Removed pnpm-lock.yaml successfully.");
  } catch (error) {
    gitRemoveSpinner.fail("Failed to remove pnpm-lock.yaml.");
    console.error(chalk.red(error.message));
    process.exit(1);
  }
};

export default removePnpmLockFile;
