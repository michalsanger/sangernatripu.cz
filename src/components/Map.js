import React from "react";

export default function Map({ src }) {
  return (
    <iframe
      src={src}
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    />
  );
}
