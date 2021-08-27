# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

Convert HEIC to JPG:

```console
mogrify -format jpg *.heic
```

All steps around photos in one command:

```console
unzip Photos.zip; mogrify -format jpg *.heic; rm Photos.zip *.heic
```

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Check the build

```console
yarn serve
```

## Deployment

Done automatically to Vercel via [Github integration](https://vercel.com/docs/git/vercel-for-github).
