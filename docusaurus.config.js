const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Sänger na tripu",
  url: "https://sangernatripu.cz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  projectName: "sangernatripu.cz", // Usually your repo name.
  i18n: {
    defaultLocale: "cs",
    locales: ["cs"],
  },
  themeConfig: {
    navbar: {
      title: "Sänger na tripu",
      items: [
        // { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Info",
          items: [
            { to: "spoluprace", label: "Spolupráce" },
            { to: "technicke-info", label: "Technologie" },
          ],
        },
        {
          title: "Odkazy",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/michalsanger/",
            },
            {
              label: "Ex blog",
              href: "http://sanger.foodblogs.cz/",
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      disableSwitch: true,
    },
    googleAnalytics: {
      trackingID: "UA-155577261-1",
    },
    algolia: {
      appId: "Q6MR4LN5JG",
      apiKey: "1e062e279835e9ecf581f135c7d90b49",
      indexName: "sangernatripu-cz",
      placeholder: "Hledat na blogu",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          path: "./blog",
          routeBasePath: "/",
          showReadingTime: true,
          blogSidebarTitle: "Všechny články",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [["@docusaurus/plugin-ideal-image", { sizes: [1024] }]],
};
