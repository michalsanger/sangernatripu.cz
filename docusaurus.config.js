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
            { to: "archiv", label: "Všechny články" },
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
              label: "Twitter",
              href: "https://twitter.com/sangernatripu/",
            },
            {
              label: "Ex blog",
              href: "http://sanger.foodblogs.cz/",
            },
          ],
        },
      ],
    },
    colorMode: {
      disableSwitch: true,
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
          blogSidebarTitle: "Nejnovější články",
          blogSidebarCount: 20,
          archiveBasePath: "archiv",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-155577261-1",
        },
      },
    ],
  ],
  plugins: [["@docusaurus/plugin-ideal-image", { sizes: [1024] }]],
};
