import React, { FC } from "react"
import scss from "./PhotoesItems.module.scss"

interface IPhotoesItemsProps {
  image: string;
}

const PhotoesItems: React.FC<IPhotoesItemsProps> = ({ image }) => {

  return (
    <div className={scss.photoesItemsMain}>
      <img src={image} alt="image" />
    </div>
  )
}

export default PhotoesItems