import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const postDir = process.argv[2];

if (!postDir || postDir.length === 0) {
  console.log("Post folder name must be set");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const template = fs.readFileSync(`${__dirname}/post-template.md`, "utf-8");
const post = template.replaceAll("{POST_DIR}", postDir);

fs.writeFileSync(`./blog/${postDir}.md`, post);
fs.mkdirSync(`./blog/photos/${postDir}`);

console.log("Blog post created!");
