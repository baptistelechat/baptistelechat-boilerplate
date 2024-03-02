import chalk from "chalk";
import fs from "fs-extra";
import ora from "ora";

const removeGitHistory = async (projectName) => {
  const gitRemoveSpinner = ora("Removing Git history...").start();
  try {
    process.chdir(projectName);
    await fs.remove(".git");
    gitRemoveSpinner.succeed("Removed Git history successfully.");
  } catch (error) {
    gitRemoveSpinner.fail("Failed to remove Git history.");
    console.error(chalk.red(error.message));
    process.exit(1);
  }
};

export default removeGitHistory;
