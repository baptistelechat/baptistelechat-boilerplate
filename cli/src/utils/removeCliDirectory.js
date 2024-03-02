import chalk from "chalk";
import fs from "fs-extra";
import ora from "ora";

const removeCliDirectory = async () => {
  const gitRemoveSpinner = ora("Removing CLI directory...").start();
  try {
    await fs.remove("cli");
    gitRemoveSpinner.succeed("Removed CLI directory successfully.");
  } catch (error) {
    gitRemoveSpinner.fail("Failed to remove CLI directory.");
    console.error(chalk.red(error.message));
    process.exit(1);
  }
};

export default removeCliDirectory;
