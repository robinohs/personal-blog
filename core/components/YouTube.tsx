import { AspectRatio, Box } from "@mantine/core";
import React from "react";

type Props = {
  id: string;
};

const YouTube = ({ id }: Props) => (
  <AspectRatio ratio={16 / 9}>
    <Box
      component="iframe"
      src={`https://www.youtube.com/embed/${id}`}
      allow="autoplay; encrypted-media"
      title="Video"
      frameBorder="0"
      allowFullScreen
    />
  </AspectRatio>
);

export default YouTube;
