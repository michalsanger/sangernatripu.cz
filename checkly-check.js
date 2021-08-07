const puppeteer = require("puppeteer");
const expect = require("expect");

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.setViewport({ width: 1280, height: 800 });
const baseUrl = process.env.ENVIRONMENT_URL ?? "https://sangernatripu.cz";

// Test homepage
await page.goto(baseUrl);
const title = await page.$eval(
  "#__docusaurus > nav > div.navbar__inner > div:nth-child(1) > a > b",
  (el) => el.textContent.trim()
);
expect(title).toEqual("Sänger na tripu");

await page.screenshot({ path: "01-homepage.png", fullPage: true });

// Test search
await page.keyboard.down("ControlLeft");
await page.keyboard.press("KeyK");
await page.keyboard.up("ControlLeft");
await page.waitForSelector("body.DocSearch--active");
await page.screenshot({ path: "02-search.png" });

await page.keyboard.type("víno", { delay: 100 });
await page.screenshot({ path: "03-search-results.png" });

await page.keyboard.press("Enter");
await page.waitForTimeout(500);
await page.screenshot({ path: "04-result-page.png" });

// Test blog post
await page.goto(`${baseUrl}/2021/07/19/les-popiettes`, {
  waitUntil: "networkidle2",
});
await page.screenshot({ path: "05-blog-post.png" });
const h1 = await page.$eval("main > article > header > h1", (el) =>
  el.textContent.trim()
);
expect(h1).toEqual("Les Popiettes");

await browser.close();
