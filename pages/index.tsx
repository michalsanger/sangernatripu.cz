import React from "react";
import Link from "next/link";

const index = () => (
  <div>
    <h1>Sänger na tripu</h1>
    <hr />
    <Link href="2019-12-28-test-article">
      <a>
        <h2>Sample article</h2>
      </a>
    </Link>
    <p>
      Morbi ut purus eget velit suscipit fermentum. Aliquam dictum neque ut magna varius eleifend.
      Suspendisse lorem sem, lobortis nec rutrum ac, efficitur non dui. Ut convallis magna eu eros
      luctus, in aliquam risus suscipit. Duis dignissim nibh sed nulla accumsan pellentesque. Donec
      ultricies mi sapien
    </p>
  </div>
);

export default index;
