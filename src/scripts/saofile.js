const { DateTime } = require("luxon");
const fs = require("fs");
const child = require("child_process");
const util = require("util");

const asyncExec = util.promisify(child.exec);

module.exports = {
  prompts(ctx) {
    ctx.logger.info(`Generating blog post`);

    return [
      {
        name: "title",
        type: "input",
        message: "Blog post title (required)",
        validate: (v) => (v.length < 1 ? "title is required" : true),
      },
      {
        name: "date",
        type: "input",
        message: "Blog post date (optional)",
        default: () => DateTime.now().toFormat("d.M.yyyy"),
        validate: (v) => {
          const date = DateTime.fromFormat(v, "d.M.yyyy");
          return date.isValid ? true : date.invalidExplanation;
        },
        result: (v) => DateTime.fromFormat(v, "d.M.yyyy"),
      },
      {
        name: "photos",
        type: "input",
        message: "Zip file with blog post photos (required)",
        validate: (v) =>
          fs.existsSync(v) ? true : "photos file does not exists",
        result: async (v, state) => {
          ctx.logger.info(`Photos...`);
          const slug = getSlug(state.answers.date, state.answers.title);
          const photosDir = `blog/photos/${slug}`;

          if (!fs.existsSync(photosDir)) {
            ctx.logger.fileAction("magenta", "Created", photosDir);
            fs.mkdirSync(photosDir);
          }

          ctx.logger.fileAction("magenta", "Copy zip to", photosDir);
          fs.copyFileSync(v, `${photosDir}/Photos.zip`);

          ctx.logger.info(`Unzip photos`);
          await asyncExec(`cd ${photosDir} && unzip Photos.zip`);

          ctx.logger.info(`Convert photos to JPEG`);
          await asyncExec(
            `cd ${photosDir} && mogrify -format jpg *.[hH][eE][iI][cC]`
          );

          ctx.logger.info(`Cleanup`);
          await asyncExec(
            `cd ${photosDir} && rm Photos.zip *.[hH][eE][iI][cC]`
          );

          // return list of unzipped photos
          return fs.readdirSync(photosDir);
        },
      },
    ];
  },
  actions(ctx) {
    const slug = getSlug(ctx.answers.date, ctx.answers.title);
    const firstPhoto = ctx.answers.photos[0];
    const photos = ctx.answers.photos.slice(1);

    return [
      {
        type: "add",
        files: "**",
        data: {
          title: ctx.answers.title,
          slug: getSlug(ctx.answers.date, ctx.answers.title),
          firstPhoto,
          photos,
        },
      },
      {
        type: "move",
        patterns: {
          "blog-post.md": `blog/${slug}.md`,
        },
      },
    ];
  },
  async completed(ctx) {
    ctx.logger.info("Completed");
  },
};

function getSlug(date, text) {
  return `${(date ?? DateTime.now()).toFormat("yyyy-MM-dd")}-${text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replaceAll(" ", "-")
    .toLowerCase()}`;
}
