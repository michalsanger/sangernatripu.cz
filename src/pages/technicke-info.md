---
title: Technické info
---

# Technické info

Web je postaven pomocí nástroje [Docusaurus](https://docusaurus.io/). Vznikl ve Facebooku a byl zveřejněn jako [open-source](https://cs.wikipedia.org/wiki/Otev%C5%99en%C3%BD_software). Díky tomu ho mohou udržovat a vyvíjet lidé z celého světa. Třeba já chtěl mít web v češtině, která tam nebyla, [tak jsem ji dodělal](https://github.com/facebook/docusaurus/pull/5314).

Docusaurus generuje statický web a jeho hosting je zdarma na [Vercel](https://vercel.com/). Deployment je automatický díky [Github integraci](https://vercel.com/docs/git/vercel-for-github). Každý merge do masteru vytvoří produkční deploy.

Přidávání obsahu dělám skrz pull requesty. Vercel pro každý pull request udělá [preview URL](https://github.com/michalsanger/sangernatripu.cz/pull/63#issuecomment-907251499), zároveň se spustí [CI Github action](https://github.com/michalsanger/sangernatripu.cz/blob/master/.github/workflows/continuous-integration.yml), která provede install a build. Na preview URL se zavolá [Checkly e2e test](https://www.checklyhq.com/docs/cicd/github), který ověří základní funkce webu a udělá [screenshoty pár stránek](https://github.com/michalsanger/sangernatripu.cz/pull/63/checks?check_run_id=3444224981), takže jsem v klidu, že mi následný merge do masteru nerozbije produkci.

Stejný e2e test [spouští Checkly periodicky](https://www.checklyhq.com/guides/end-to-end-monitoring/) což je pro mě dostatečný monitoring.

Automatickou aktualizaci závislostí provádí [Dependabot](https://github.com/michalsanger/sangernatripu.cz/blob/master/.github/dependabot.yml).

Zmenšování a optimalizované zobrazování fotek je realizováno `@docusaurus/plugin-ideal-image` [pluginem](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image). Pro potřeby blogu jsem si udělal několik jednoduchých [React komponent](https://github.com/michalsanger/sangernatripu.cz/tree/master/src/components).

Vyhledávání zajišťuje Algolia díky [vestavěné podpoře přímo v Docusaurus](https://docusaurus.io/docs/search). Tento web nesplňuje podmínky [Algolia DocSearch](https://docsearch.algolia.com/), který by web [scrapoval](https://en.wikipedia.org/wiki/Web_scraping) automaticky, takže musím spouštění [crawleru](https://docsearch.algolia.com/docs/run-your-own/) zajistit sám. Díky Github actions to naštěstí lze automatizovat a vyhledávací index se [aktualizuje po každém produkčním deploy](https://github.com/michalsanger/sangernatripu.cz/blob/master/.github/workflows/search-refresh.yml).
