import React from "react";
import Link from "next/link";
import Head from "next/head";

// TODO: create Article component
// <Article title="Sample article">
//  <>
//    <p>....</p>
//  </>
// </Article>
const article = () => (
  <>
    <Head>
      <title>Sample article</title>
    </Head>

    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="row medium-8 large-7 columns">
      <h1>Sample article</h1>
      <p>
        Morbi ut purus eget velit suscipit fermentum. Aliquam dictum neque ut magna varius eleifend.
        Suspendisse lorem sem, lobortis nec rutrum ac, efficitur non dui. Ut convallis magna eu eros
        luctus, in aliquam risus suscipit. Duis dignissim nibh sed nulla accumsan pellentesque.
        Donec ultricies mi sapien, ut lobortis elit mollis sit amet. Nulla molestie pulvinar odio
        vel iaculis.
      </p>
      <p>
        Nullam porta turpis nunc, non sagittis risus varius at. Phasellus at quam vitae diam
        imperdiet vehicula. Morbi vulputate augue est, in interdum mi accumsan ac. Etiam at euismod
        nulla. Etiam laoreet urna sit amet vehicula imperdiet. Curabitur faucibus turpis a placerat
        efficitur. Aliquam erat volutpat. Aenean facilisis id neque vitae aliquet. Pellentesque
        pulvinar orci nisi. Nam accumsan lacus vitae pellentesque tristique. Donec justo diam,
        tincidunt vel porta at, interdum vitae ex. Vestibulum eget fringilla odio, sit amet faucibus
        sapien. Duis feugiat neque ex, sit amet tempus libero venenatis non. Ut semper, tellus a
        interdum aliquet, lorem neque efficitur leo, id molestie nisl neque eget urna. Proin
        ullamcorper erat nulla, non fringilla magna auctor vitae.
      </p>
      <p>
        Etiam arcu quam, tincidunt non laoreet eu, fringilla at purus. Pellentesque dapibus faucibus
        magna, tempus eleifend metus malesuada finibus. Vestibulum elementum at felis eget blandit.
        Pellentesque sed ipsum et eros dictum suscipit eu ut nisi. Suspendisse dignissim ligula quis
        urna tincidunt, a accumsan mi ultrices. Morbi ornare lorem non tellus ultricies sagittis.
        Nunc ullamcorper in enim vitae malesuada. Donec dictum libero sed pulvinar malesuada. Sed
        dictum eu velit sed lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Pellentesque molestie tortor ut mattis maximus. Vivamus non blandit odio, sit amet
        scelerisque eros. Cras fringilla sit amet nunc eu luctus.
      </p>
    </div>
  </>
);

export default article;
