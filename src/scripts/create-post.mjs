import { Command } from "commander";
import { SAO } from "sao";
import { resolve } from "path";

function createInstance() {
  return new Command("create-post")
    .argument("<photos-file>", "Zip file with blog post photos")
    .action(async (photosFile) => {
      try {
        const sao = new SAO({
          generator: resolve("./src/scripts/"),
          answers: { photos: photosFile },
        });

        sao.run?.();
      } catch (err) {
        global.console.error(err);
        process.exit(1);
      }
    });
}

createInstance().parse();
