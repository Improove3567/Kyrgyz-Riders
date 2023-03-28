import React, { FC } from "react"
import scss from "./PhotoesItems.module.scss"

interface IPhotoesItemsProps {
  image: string;
}

const PhotoesItems: React.FC<IPhotoesItemsProps> = ({ image }) => {

  return (
    <div className={scss.photoesItemsMain}>
      {/* <img src={image} alt="image" /> */}
      <img className="bgImage" src='https://avatars.githubusercontent.com/u/110287822?v=4' alt="bcakground-image" height={280} />

    </div>
  )
}

export default PhotoesItems