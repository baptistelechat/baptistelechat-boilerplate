import chalk from "chalk";
import fs from "fs-extra";
import ora from "ora";

const removeScreenshotDirectory = async () => {
  const screenshotRemoveSpinner = ora("Removing Screenshot directory...").start();
  try {
    await fs.remove("screenshot");
    screenshotRemoveSpinner.succeed("Removed Screenshot directory successfully.");
  } catch (error) {
    screenshotRemoveSpinner.fail("Failed to remove Screenshot directory.");
    console.error(chalk.red(error.message));
    process.exit(1);
  }
};

export default removeScreenshotDirectory;
