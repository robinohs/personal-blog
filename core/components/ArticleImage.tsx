import { AspectRatio } from "@mantine/core";
import Image from "next/image";
import React from "react";

type Props = {
  aspectRadio: number;
  src: string;
};

const ArticleImage = ({ aspectRadio, src }: Props) => (
  <AspectRatio ratio={aspectRadio}>
    <Image src={src} layout="fill" alt="IMG" />
  </AspectRatio>
);

export default ArticleImage;
