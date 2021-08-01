import React from "react";
import Image from "@theme/IdealImage";

export default function Photo({ photo }) {
  const isVertical = photo.src.width < photo.src.height;

  const img = (
    <Image
      img={photo}
      theme={{
        placeholder: {
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        },
        img: isVertical
          ? { "object-fit": "contain", "max-height": "500px" }
          : { "object-fit": "cover", "max-height": "500px" },
      }}
    />
  );

  return (
    <div className="blogPostPhoto">
      <a href={img.props.img.src.src}>{img}</a>
    </div>
  );
}
