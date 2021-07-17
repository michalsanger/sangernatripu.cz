import React from "react";
import Image from "@theme/IdealImage";

export default function Gallery(props) {
  const photos = props.photos ?? [];

  return (
    <div className="gallery row">
      {photos.map((photo, i) => {
        const img = (
          <Image
            img={photo}
            theme={{
              placeholder: {
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
              },
              img: { height: "175px", width: "175px", "object-fit": "cover" },
            }}
          />
        );
        return (
          <div className="photo" key={i}>
            <a href={img.props.img.src.src}>{img}</a>
          </div>
        );
      })}
    </div>
  );
}
