import Image from "next/image";
import React, { FC } from "react"
import scss from "./PhotosItems.module.scss"

interface IPhotosItemsProps {
  image: string;
}

const PhotosItems: React.FC<IPhotosItemsProps> = ({image}) => {

  return (
    <div className={scss.photosItemsMain}>
      <img src={image} alt="image" />
    </div>
  )
}

export default PhotosItems