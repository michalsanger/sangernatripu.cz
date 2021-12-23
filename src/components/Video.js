import React from "react";

export default function Video({ src }) {
  return (
    <iframe
      src={src}
      width="100%"
      height="360"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
}
