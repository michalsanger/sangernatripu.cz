import React from "react";
import Link from "next/link";

const index = () => (
  <>
    <div className="callout large primary">
      <div className="row column text-center">
        <h1>Sänger na tripu TEST</h1>
      </div>
    </div>

    <div className="row medium-8 large-7 columns">
      <div className="blog-post">
        <Link href="2019-12-28-test-article">
          <a>
            <h3>Sample article</h3>
          </a>
        </Link>
        <p>
          Morbi ut purus eget velit suscipit fermentum. Aliquam dictum neque ut magna varius
          eleifend. Suspendisse lorem sem, lobortis nec rutrum ac, efficitur non dui. Ut convallis
          magna eu eros luctus, in aliquam risus suscipit. Duis dignissim nibh sed nulla accumsan
          pellentesque. Donec ultricies mi sapien
        </p>
      </div>
    </div>
  </>
);

export default index;
