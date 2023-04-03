import React, { FC } from "react"
import scss from "./PhotoesItems.module.scss"

interface IPhotoesItemsProps {
  image: string;
}

const PhotoesItems: React.FC<IPhotoesItemsProps> = ({ image }) => {

  return (
    <div className={scss.photoesItemsMain}>
      <img src={image} alt="image" height={280}/>
    </div>
  )
}

export default PhotoesItems