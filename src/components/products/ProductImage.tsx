"use client";
import React from "react";

import ImageGallery from "react-image-gallery";
const ProductImage = ({ imageSrc }: { imageSrc: string[] }) => {
  const images: any[] = [];
  imageSrc.forEach((item) => {
    images.push({
      original: item,
      thumbnail: item,
    });
  });
  return <ImageGallery items={images} />;
};

export default ProductImage;
