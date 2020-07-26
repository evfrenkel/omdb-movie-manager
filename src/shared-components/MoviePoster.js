import React from "react";
import { Image } from "react-bootstrap";

export default function MoviePoster(props) {
  const { path } = props;

  return (
    <Image src={"https://image.tmdb.org/t/p/w500/" + path} alt="Poster" fluid />
  );
}
